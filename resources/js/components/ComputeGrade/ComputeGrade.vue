<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Computes Grade Table</h3>
                                </div>
                                <div class="col text-right">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="addProjectModel = true"
                                    >
                                        Upload Excel File
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="printGrade"
                                    >
                                        Print Grade
                                    </button>
                                </div>
                            </div>
                        </div>

                        <table class="table align-items-center table-flush">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Written</th>
                                    <th scope="col">Performance</th>
                                    <th scope="col">Midterm</th>
                                    <th scope="col">Final Exam</th>
                                    <th scope="col">Total Weighted Score</th>
                                    <th scope="col">Final Numerical Grade</th>
                                    <th scope="col">Remarks</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="grade in grades" :key="grade.id">
                                    <td>{{ grade.student_name }}</td>
                                    <td>{{ grade.written }}</td>
                                    <td>{{ grade.performance }}</td>
                                    <td>{{ grade.midterm }}</td>
                                    <td>{{ grade.finalexam }}</td>
                                    <td>{{ grade.total_weighted_score }}</td>
                                    <td>{{ grade.final_numerical_grade }}</td>
                                    <td
                                        :class="{
                                            'text-success':
                                                grade.remarks === 'Passed',
                                            'text-danger':
                                                grade.remarks === 'Failed'
                                        }"
                                    >
                                        {{ grade.remarks }}
                                    </td>
                                    <td>
                                        <button
                                            class="btn btn-warning"
                                            @click="editGrade(grade)"
                                        >
                                            <i class="fas fa-edit"></i> Edit
                                        </button>
                                        <button
                                            class="btn btn-danger ml-2"
                                            @click="deleteGrade(grade.id)"
                                        >
                                            <i class="fas fa-trash"></i> Delete
                                        </button>
                                    </td>
                                </tr>
                                <tr
                                    v-if="grades.length === 0"
                                    class="text-center"
                                >
                                    <td colspan="8">No Data Found</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Upload Modal -->
        <div
            v-if="addProjectModel"
            class="modal fade show"
            style="display: block;"
            tabindex="-1"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Upload Excel File</h5>
                        <button
                            type="button"
                            class="close"
                            @click="addProjectModel = false"
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitExcelFile">
                            <div class="form-group">
                                <input
                                    type="file"
                                    @change="onFileChange"
                                    accept=".xlsx, .xls"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Upload
                            </button>
                        </form>
                        <div v-if="uploadMessage" class="mt-2">
                            <p>{{ uploadMessage }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addProjectModel: false,
            editGradeModel: false,
            selectedFile: null,
            uploadMessage: null,
            grades: [],
            currentGrade: null
        };
    },
    methods: {
        getGrades() {
            this.axios
                .get("/api/v1/grades")
                .then(response => {
                    this.grades = response.data;
                })
                .catch(error => {
                    console.error("Error fetching grades:", error);
                });
        },

        onFileChange(event) {
            this.selectedFile = event.target.files[0];
        },

        submitExcelFile() {
            if (!this.selectedFile) {
                this.uploadMessage = "Please select a file before uploading.";
                return;
            }

            let formData = new FormData();
            formData.append("file", this.selectedFile);

            this.axios
                .post("/api/v1/import_excel_classrecord", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    this.uploadMessage = response.data.message;
                    this.addProjectModel = false;
                    this.selectedFile = null;
                    this.getGrades();
                })
                .catch(error => {
                    this.uploadMessage =
                        error.response.data.message || "Error uploading file.";
                });
        },

        printGrade() {
            this.axios
                .post(
                    "/api/v1/print_pdf_classrecord",
                    {},
                    {
                        responseType: "blob" // Important for receiving binary data like PDF
                    }
                )
                .then(response => {
                    const url = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "Grades.pdf"); // Specify the file name for download
                    document.body.appendChild(link);
                    link.click(); // Auto-click to open/download the PDF
                    document.body.removeChild(link);
                })
                .catch(error => {
                    this.uploadMessage =
                        error.response.data.message || "Error printing grades.";
                });
        },

        editGrade(grade) {
            this.currentGrade = { ...grade };
            this.editGradeModel = true;
        },

        calculateGrade() {
            const writtenScore = this.currentGrade.written || 0;
            const performanceScore = this.currentGrade.performance || 0;
            const midtermScore = this.currentGrade.midterm || 0;
            const finalExamScore = this.currentGrade.finalexam || 0;

            const maxScores = {
                written: 10,
                performance: 40,
                midterm: 100,
                finalexam: 100
            };

            const weightedWritten = (writtenScore / maxScores.written) * 15;
            const weightedPerformance =
                (performanceScore / maxScores.performance) * 25;
            const weightedMidterm = (midtermScore / maxScores.midterm) * 30;
            const weightedFinalExam =
                (finalExamScore / maxScores.finalexam) * 30;

            const totalWeightedScore =
                weightedWritten +
                weightedPerformance +
                weightedMidterm +
                weightedFinalExam;
            this.currentGrade.total_weighted_score = totalWeightedScore;

            let finalGrade = 5.0;
            let remarks = "Failed";

            if (totalWeightedScore >= 94.44) {
                finalGrade = 1.0;
                remarks = "Passed";
            } else if (totalWeightedScore >= 88.89) {
                finalGrade = 1.25;
                remarks = "Passed";
            } else if (totalWeightedScore >= 83.33) {
                finalGrade = 1.5;
                remarks = "Passed";
            } else if (totalWeightedScore >= 77.78) {
                finalGrade = 1.75;
                remarks = "Passed";
            } else if (totalWeightedScore >= 72.22) {
                finalGrade = 2.0;
                remarks = "Passed";
            } else if (totalWeightedScore >= 66.67) {
                finalGrade = 2.25;
                remarks = "Passed";
            } else if (totalWeightedScore >= 61.11) {
                finalGrade = 2.5;
                remarks = "Passed";
            } else if (totalWeightedScore >= 55.56) {
                finalGrade = 2.75;
                remarks = "Passed";
            } else if (totalWeightedScore >= 50.0) {
                finalGrade = 3.0;
                remarks = "Passed";
            }

            this.currentGrade.final_numerical_grade = finalGrade;
            this.currentGrade.remarks = remarks;
        },

        submitUpdatedGrade() {
            this.axios
                .put(`/api/v1/grades/${this.currentGrade.id}`, {
                    written_total_score: this.currentGrade.written,
                    performance_total_score: this.currentGrade.performance,
                    midterm_total_score: this.currentGrade.midterm,
                    finalexam_total_score: this.currentGrade.finalexam,
                    total_weighted_score: this.currentGrade
                        .total_weighted_score,
                    final_numerical_grade: this.currentGrade
                        .final_numerical_grade,
                    remarks: this.currentGrade.remarks
                })
                .then(response => {
                    this.getGrades();
                    this.editGradeModel = false;
                })
                .catch(error => {
                    console.error("Error updating grade:", error);
                });
        },

        deleteGrade(id) {
            if (confirm("Are you sure you want to delete this grade?")) {
                this.axios
                    .delete(`/api/v1/grades/${id}`)
                    .then(response => {
                        this.getGrades();
                    })
                    .catch(error => {
                        console.error("Error deleting grade:", error);
                    });
            }
        }
    },
    mounted() {
        this.getGrades();
    }
};
</script>

<style scoped>
.modal {
    z-index: 1050;
}
</style>

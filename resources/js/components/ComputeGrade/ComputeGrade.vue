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

        <!-- Edit Grade Modal -->
        <div
            v-if="editGradeModel"
            class="modal fade show"
            style="display: block;"
            tabindex="-1"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit Grade</h5>
                        <button
                            type="button"
                            class="close"
                            @click="editGradeModel = false"
                        >
                            <span>&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="submitUpdatedGrade">
                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="student_name"
                                        >Student Name</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="currentGrade.student_name"
                                        required
                                    />
                                </div>
                                <div class="form-group col">
                                    <label for="written">Written</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="currentGrade.written"
                                        @input="calculateGrade"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="performance">Performance</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="
                                            currentGrade.performance
                                        "
                                        @input="calculateGrade"
                                        required
                                    />
                                </div>
                                <div class="form-group col">
                                    <label for="midterm">Midterm</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="currentGrade.midterm"
                                        @input="calculateGrade"
                                        required
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="finalexam">Final Exam</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="currentGrade.finalexam"
                                        @input="calculateGrade"
                                        required
                                    />
                                </div>
                                <div class="form-group col">
                                    <label for="total_weighted_score"
                                        >Total Weighted Score</label
                                    >
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="
                                            currentGrade.total_weighted_score
                                        "
                                        readonly
                                    />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label for="final_numerical_grade"
                                        >Final Numerical Grade</label
                                    >
                                    <input
                                        type="number"
                                        class="form-control"
                                        v-model.number="
                                            currentGrade.final_numerical_grade
                                        "
                                        readonly
                                    />
                                </div>
                                <div class="form-group col">
                                    <label for="remarks">Remarks</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        v-model="currentGrade.remarks"
                                        required
                                    />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Update Grade
                            </button>
                        </form>
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
                        <form @submit.prevent="uploadFile">
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
            addProjectModel: false, // For opening/closing the upload modal
            editGradeModel: false, // For opening/closing the edit modal
            selectedFile: null, // Store the selected file for upload
            uploadMessage: null, // To store success/error messages
            grades: [], // Store the grades fetched from the API
            currentGrade: null // Store the current grade being edited
        };
    },
    methods: {
        // Method to fetch grades from the API
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

        // Method to handle file change for upload
        onFileChange(event) {
            this.selectedFile = event.target.files[0];
        },

        // Method to upload the selected file
        uploadFile() {
            const formData = new FormData();
            formData.append("file", this.selectedFile);

            this.axios
                .post("/api/v1/grades/upload", formData)
                .then(response => {
                    this.uploadMessage = response.data.message;
                    this.addProjectModel = false; // Close the modal
                    this.getGrades(); // Refresh the grades list
                })
                .catch(error => {
                    this.uploadMessage =
                        error.response.data.message || "Error uploading file.";
                });
        },

        // Method to edit a specific grade
        editGrade(grade) {
            this.currentGrade = { ...grade }; // Create a copy of the grade for editing
            this.editGradeModel = true; // Show the edit modal
        },

        // Method to submit the updated grade
        // submitUpdatedGrade() {
        //     this.axios
        //         .put(
        //             `/api/v1/grades/${this.currentGrade.id}`,
        //             this.currentGrade
        //         )
        //         .then(response => {
        //             this.getGrades(); // Refresh the grades list
        //             this.editGradeModel = false; // Close the modal
        //         })
        //         .catch(error => {
        //             console.error("Error updating grade:", error);
        //         });
        // },

        submitUpdatedGrade() {
            this.axios
                .put(`/api/v1/grades/${this.currentGrade.id}`, {
                    written_total_score: this.currentGrade.written,
                    performance_total_score: this.currentGrade.performance,
                    midterm_total_score: this.currentGrade.midterm,
                    finalexam_total_score: this.currentGrade.finalexam
                })
                .then(response => {
                    this.getGrades(); // Refresh the grades list
                    this.editGradeModel = false; // Close the modal
                })
                .catch(error => {
                    console.error("Error updating grade:", error);
                });
        },

        // Method to delete a specific grade
        deleteGrade(id) {
            if (confirm("Are you sure you want to delete this grade?")) {
                this.axios
                    .delete(`/api/v1/grades/${id}`)
                    .then(response => {
                        this.getGrades(); // Refresh the grades list
                    })
                    .catch(error => {
                        console.error("Error deleting grade:", error);
                    });
            }
        },

        // Method to print the grades
        printGrade() {
            window.print(); // Use window.print() to print the current page
        }
    },
    mounted() {
        this.getGrades(); // Fetch grades when the component is mounted
    }
};
</script>

<style scoped>
.modal {
    z-index: 1050; /* Ensure the modal is above other content */
}
</style>

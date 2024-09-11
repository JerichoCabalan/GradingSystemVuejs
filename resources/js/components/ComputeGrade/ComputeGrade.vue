<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Compute Grade Table</h3>
                                </div>
                                <!-- Button to Open Upload Modal -->
                                <div class="col text-right">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        @click="addProjectModel = true"
                                    >
                                        Upload Excel File
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

        <!-- Modal for Uploading Excel File -->
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
                        <form
                            ref="uploadForm"
                            @submit.prevent="submitExcelFile"
                        >
                            <div class="form-group">
                                <label for="excelFile"
                                    >Choose Excel file:</label
                                >
                                <input
                                    type="file"
                                    class="form-control"
                                    id="excelFile"
                                    ref="excelFile"
                                    @change="onFileChange"
                                    accept=".xls, .xlsx"
                                />
                            </div>
                        </form>
                    </div>

                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            @click="addProjectModel = false"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            class="btn btn-primary"
                            @click="submitExcelFile"
                        >
                            Upload
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Notifications -->
        <div v-if="uploadMessage" class="alert alert-info">
            {{ uploadMessage }}
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            addProjectModel: false, // For opening/closing the modal
            selectedFile: null, // Store the selected file
            uploadMessage: null, // To store success/error messages
            grades: [] // Store the grades fetched from the API
        };
    },
    methods: {
        onFileChange(event) {
            this.selectedFile = event.target.files[0]; // Storing the selected file
        },
        submitExcelFile() {
            if (!this.selectedFile) {
                this.uploadMessage = "Please select a file before uploading.";
                return;
            }

            let formData = new FormData();
            formData.append("file", this.selectedFile); // Add the file to FormData

            // Submit the file using axios
            this.axios
                .post("/api/v1/import_excel_classrecord", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(response => {
                    // If the upload is successful
                    this.uploadMessage = response.data.message;
                    this.addProjectModel = false; // Close the modal
                    this.selectedFile = null; // Clear the file input
                    this.getGrades(); // Fetch and refresh the grades data
                })
                .catch(error => {
                    // Handle errors and show message
                    this.uploadMessage =
                        error.response.data.message || "Error uploading file.";
                });
        },
        getGrades() {
            // Fetch the grades from the backend API
            this.axios
                .get("/api/v1/grades")
                .then(response => {
                    this.grades = response.data; // Set the grades to be displayed in the table
                })
                .catch(error => {
                    this.uploadMessage =
                        error.response.data.message || "Error fetching grades.";
                });
        }
    },
    mounted() {
        this.getGrades(); // Fetch grades when the component is mounted
    }
};
</script>

<style>
/* Add your styles here */
.modal {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>

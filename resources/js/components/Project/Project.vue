<template>
    <div>
        <div class="header bg-primary pb-6">
            <div class="container-fluid">
                <div class="header-body">
                    <div class="row align-items-center py-4">
                        <div class="col-lg-6 col-7">
                            <h6 class="h2 text-white d-inline-block mb-0">
                                Compute Grade
                            </h6>
                        </div>
                        <div class="col-lg-6 col-5 text-right">
                            <a
                                href="#"
                                class="btn btn-sm btn-neutral"
                                @click="addProjectModel = !addProjectModel"
                                >Import Excel</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid ">
            <div class="row">
                <div class="col">
                    <div class="card" id="deleteLoading">
                        <!-- Card header -->
                        <div class="card-header border-0">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="mb-0">Compute Grade Table</h3>
                                </div>
                            </div>
                        </div>

                        <!-- Light table -->
                        <div class="table-responsive" id="projectLoading">
                            <table class="table align-items-center table-flush">
                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col" class="sort">Action</th>
                                        <th scope="col" class="sort">
                                            Student Name
                                        </th>
                                        <th scope="col" class="sort">
                                            Written
                                        </th>
                                        <th scope="col" class="sort"></th>
                                        <th scope="col" class="sort">
                                            Midterm
                                        </th>
                                        <th scope="col" class="sort">Final</th>
                                        <th scope="col" class="sort"></th>
                                    </tr>
                                </thead>
                                <tbody
                                    class="list"
                                    v-for="item in items"
                                    :key="item.id"
                                >
                                    <tr>
                                        <th scope="row">
                                            <div
                                                class="media align-items-center"
                                            >
                                                <div class="media-body">
                                                    <span
                                                        class="name mb-0 text-sm"
                                                        >{{ item.name }}</span
                                                    >
                                                </div>
                                            </div>
                                        </th>
                                        <td class="budget">
                                            {{ item.budget }}
                                        </td>
                                        <td>
                                            {{ item.responsible_user }}
                                        </td>
                                        <td>
                                            <span class="badge badge-dot mr-4">
                                                <i
                                                    class="bg-warning"
                                                    v-if="
                                                        item.status ==
                                                            status.pending
                                                    "
                                                ></i>
                                                <i
                                                    class="bg-success"
                                                    v-if="
                                                        item.status ==
                                                            status.completed
                                                    "
                                                ></i>
                                                <i
                                                    class="bg-danger"
                                                    v-if="
                                                        item.status ==
                                                            status.delayed
                                                    "
                                                ></i>
                                                <i
                                                    class="bg-info"
                                                    v-if="
                                                        item.status ==
                                                            status.schedule
                                                    "
                                                ></i>
                                                <span class="status">{{
                                                    item.status
                                                }}</span>
                                            </span>
                                        </td>
                                        <td>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <span class="completion mr-2"
                                                    >{{
                                                        item.completion
                                                    }}
                                                    %</span
                                                >
                                                <div>
                                                    <div class="progress">
                                                        <div
                                                            class="progress-bar bg-warning"
                                                            v-if="
                                                                item.status ==
                                                                    status.pending
                                                            "
                                                            role="progressbar"
                                                            v-bind:style="{
                                                                width:
                                                                    item.completion +
                                                                    '%'
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="progress-bar bg-success"
                                                            v-if="
                                                                item.status ==
                                                                    status.completed
                                                            "
                                                            role="progressbar"
                                                            v-bind:style="{
                                                                width:
                                                                    item.completion +
                                                                    '%'
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="progress-bar bg-danger"
                                                            v-if="
                                                                item.status ==
                                                                    status.delayed
                                                            "
                                                            role="progressbar"
                                                            v-bind:style="{
                                                                width:
                                                                    item.completion +
                                                                    '%'
                                                            }"
                                                        ></div>
                                                        <div
                                                            class="progress-bar bg-info"
                                                            v-if="
                                                                item.status ==
                                                                    status.schedule
                                                            "
                                                            role="progressbar"
                                                            v-bind:style="{
                                                                width:
                                                                    item.completion +
                                                                    '%'
                                                            }"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <span class="completion mr-2">{{
                                                    item.created_at
                                                }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div style="display: inline-flex">
                                                <div>
                                                    <button
                                                        class="btn btn-primary btn-sm"
                                                        @click="
                                                            editBtn(item.id)
                                                        "
                                                    >
                                                        <i
                                                            class="far fa-edit"
                                                        ></i>
                                                        <span
                                                            ><strong
                                                                >Edit</strong
                                                            ></span
                                                        >
                                                    </button>
                                                    <button
                                                        href="#"
                                                        class="btn btn-danger btn-sm"
                                                        @click="
                                                            deleteBtn(item.id)
                                                        "
                                                    >
                                                        <i
                                                            class="fas fa-trash-alt"
                                                        ></i>
                                                        <span
                                                            ><strong
                                                                >Delete</strong
                                                            ></span
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-if="dataNotFound">
                                    <tr class="text-center">
                                        <td colspan="10">No Data Display</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vs-dialog v-model="addProjectModel" prevent-close blur>
            <template>
                <div>
                    <form @submit.prevent="addPost">
                        <div class="form-group">
                            <label for="file">Upload Excel File</label>
                            <input
                                type="file"
                                id="file"
                                @change="handleFileChange($event)"
                                accept=".xlsx, .xls"
                            />
                        </div>
                        <!-- <button type="submit">Add Post</button> -->
                    </form>
                </div>
            </template>
            <!-- <form
                v-on:submit.prevent="addProject()"
                id="addProjectForm"
                ref="resetForm"
            >
                <div class="form-group">
                    <label class="form-control-label">Name Of Project</label>
                    <input
                        class="form-control"
                        placeholder="Name"
                        v-model="addPostData.name"
                    />
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Budget</label>
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Budget"
                        v-model="addPostData.budget"
                    />
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Responsible User</label>
                    <input
                        class="form-control"
                        placeholder="Responsible User"
                        v-model="addPostData.responsible_user"
                    />
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Status</label>
                    <select
                        class="form-control"
                        @change="onChangeStatus($event)"
                    >
                        <option value="0">Select Status</option>
                        <option value="PENDING">Pending</option>
                        <option value="COMPLETED">Completed</option>
                        <option value="SCHEDULE">On Schedule</option>
                        <option value="DELAYED">Delayed</option>
                    </select>
                </div>
                <div class="form-group mt--3">
                    <label class="form-control-label">Completion</label>
                    <input
                        type="number"
                        class="form-control"
                        max="100"
                        placeholder="50"
                        v-model="addPostData.completion"
                    />
                </div>
                <div class="footer-dialog text-center">
                    <button class="btn btn-primary" type="submit">
                        Add New Project
                    </button>
                </div>
            </form> -->
        </vs-dialog>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            addPostData: {
                name: null,
                budget: null,
                status: null,
                completion: null,
                responsible_user: null
            },
            editPostData: {
                id: null,
                name: null,
                budget: null,
                status: null,
                completion: null,
                responsible_user: null
            },
            deletePostData: {
                id: null
            },
            // items: [
            //     {
            //         id: 1,
            //         name: "Project Alpha",
            //         budget: 5000,
            //         responsible_user: "John Doe",
            //         status: "PENDING",
            //         completion: 30,
            //         created_at: "2024-09-01"
            //     },
            //     {
            //         id: 2,
            //         name: "Project Beta",
            //         budget: 12000,
            //         responsible_user: "Jane Smith",
            //         status: "COMPLETED",
            //         completion: 100,
            //         created_at: "2024-08-15"
            //     },
            //     {
            //         id: 3,
            //         name: "Project Gamma",
            //         budget: 8000,
            //         responsible_user: "Mark Lee",
            //         status: "SCHEDULE",
            //         completion: 70,
            //         created_at: "2024-07-10"
            //     }
            // ],

            addProjectModel: false,
            editProjectModel: false,
            activeTooltip1: false,
            deleteDialog: false,
            dataNotFound: false
        };
    },

    methods: {
        getProject() {
            let loading = this.block("projectLoading");
            this.axios
                .get("/api/v1/projects")
                .then(response => {
                    this.items = response.data.data;
                    console.log(response.data.data);
                    this.dataNotFound = false;
                    loading.close();
                })
                .catch(error => {
                    this.items = null;
                    this.dataNotFound = true;
                    console.log(error.response.data);
                    loading.close();
                });
        },
        addProject() {
            let Loading = this.block("addProjectForm");
            this.axios
                .post("api/v1/add/project", this.addPostData)
                .then(response => {
                    if (response.data.status === true) {
                        this.$refs.resetForm.reset();
                        Loading.close();
                        this.addProjectModel = false;
                        this.getProject();
                    } else {
                        this.errorNotification(response.data.message);
                        Loading.close();
                    }
                })
                .catch(error => {
                    this.errorNotification(error.response.data.message);
                    Loading.close();
                });
        },
        updateProject() {
            let Loading = this.block("editProjectForm");
            this.axios
                .put("/api/v1/update/project", this.editPostData)
                .then(response => {
                    this.editProjectModel = false;
                    this.successNotification(response.data.message);
                    Loading.close();
                    this.getProject();
                })
                .catch(error => {
                    this.editProjectModel = false;
                    this.errorNotification(error.response.data.message);
                    Loading.close();
                });
        },
        onChangeStatus(event) {
            this.addPostData.status = event.target.value;
        },
        onEditChangeStatus(event) {
            this.editPostData.status = event.target.value;
        },
        deleteBtn(id) {
            if (id == "") {
                this.errorNotification("Something we Wrong..");
            }
            this.deleteDialog = true;
            this.deletePostData.id = id;
        },
        deleteProject() {
            let Loading = this.block("deleteLoading");
            this.axios
                .delete("/api/v1/delete/project/" + this.deletePostData.id)
                .then(response => {
                    if (response.data.status === true) {
                        this.deleteDialog = false;
                        this.successNotification(response.data.message);
                        this.getProject();
                        Loading.close();
                    } else {
                        this.deleteDialog = false;
                        this.errorNotification(response.data.message);
                        Loading.close();
                    }
                })
                .catch(error => {
                    this.deleteDialog = false;
                    Loading.close();
                    this.errorNotification(error.response.data.message);
                });
        },
        editBtn(id) {
            this.editPostData.id = id;
            this.editProjectModel = true;
            this.axios
                .get("/api/v1/get/project/" + id)
                .then(response => {
                    let item = response.data.data;
                    this.editPostData.name = item.name;
                    this.editPostData.budget = item.budget;
                    this.editPostData.completion = item.completion;
                    this.editPostData.responsible_user = item.responsible_user;
                    this.editPostData.status = item.status;
                    this.$refs.getStatus.value = item.status;
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
    },
    mounted() {
        this.getProject();
    }
};
</script>
<style>
.btn i:not(:last-child),
.btn svg:not(:last-child) {
    margin-right: unset;
}
</style>

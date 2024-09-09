<template>
    <nav
        class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-primary"
        id="sidenav-main"
    >
        <li class="nav-item dropdown" id="profileInfoLoading">
            <a
                class="nav-link pr-0"
                href="#"
                role="button"
                style="margin-left: 33px"
            >
                <div class="media margin-left-100px">
                    <vs-avatar circle>
                        <img v-bind:src="profileInfo.image" />
                    </vs-avatar>
                    <div class="media-body  ml-2  d-none d-lg-block">
                        <span class="mb-0 text-sm  font-weight-bold">{{
                            profileInfo.name
                        }}</span>
                    </div>
                </div>
            </a>
        </li>

        <div class="scrollbar-inner">
            <!-- Brand -->
            <!-- <div class="sidenav-header  align-items-center">
                <a class="navbar-brand" href="javascript:void(0)">
                    <h1 class="text-primary">Dashboard</h1>
                </a>
            </div> -->
            <div class="navbar-inner">
                <!-- Collapse -->
                <div
                    class="collapse navbar-collapse"
                    id="sidenav-collapse-main"
                >
                    <!-- Nav items -->
                    <ul class="navbar-nav">
                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/dashboard">
                                <i class="fas fa-home text-primary"></i> &nbsp; &nbsp;
                                <span class="nav-link-text">Dashboard</span>
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link class="nav-link" to="/project">
                                <i
                                    class="fas fa-project-computer text-primary"
                                ></i>
                                &nbsp; &nbsp;
                                <span class="nav-link-text text-primary"
                                    >Compute Grade</span
                                >
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <!-- <router-link class="nav-link" to="/task">
                                <i class="fas fa-tasks text-primary"></i> &nbsp; &nbsp;
                                <span class="nav-link-text">Task</span>
                            </router-link>
                        </li> -->
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/profile">
                                <i class="fas fa-user text-primary"></i> &nbsp;
                                &nbsp;
                                <span class="nav-link-text text-primary"
                                    >Profile</span
                                >
                            </router-link>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link class="nav-link" to="/setting">
                                <i class="fas fa-cog text-primary"></i> &nbsp; &nbsp;
                                <span class="nav-link-text">Setting</span>
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <router-link class="nav-link" to="/logout">
                                <i class="fas fa-sign-out-alt text-primary"></i>
                                &nbsp; &nbsp;
                                <span class="nav-link-text text-primary"
                                    >Logout</span
                                >
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <!--    <nav class="col-md-2 d-none d-md-block bg-light sidebar">-->
    <!--        <div class="sidebar-sticky">-->
    <!--            <ul class="nav flex-column">-->
    <!--                <li class="nav-item">-->
    <!--                    <router-link to="/dashboard" class="nav-link">-->
    <!--                        Dashboard-->
    <!--                    </router-link>-->
    <!--                </li>-->
    <!--                <li class="nav-item">-->
    <!--                    <router-link to="/product" class="nav-link">-->
    <!--                        Product-->
    <!--                    </router-link>-->
    <!--                </li>-->
    <!--                <li class="nav-item">-->
    <!--                    <router-link to="/change-password" class="nav-link">-->
    <!--                        Change Password-->
    <!--                    </router-link>-->
    <!--                </li>-->
    <!--                <li class="nav-item">-->
    <!--                    <router-link to="/logout" class="nav-link">-->
    <!--                        Logout-->
    <!--                    </router-link>-->
    <!--                </li>-->
    <!--            </ul>-->
    <!--        </div>-->
    <!--    </nav>-->
</template>

<script>
export default {
    name: "Sidebar",

    data() {
        return {
            profileInfo: {
                image: null,
                name: null
            },
            profile_baseURL: "assets/img/profile/"
        };
    },
    methods: {
        getProfileInfo() {
            let Loading = this.block("profileInfoLoading");
            this.axios
                .get("/api/v1/profile/info")
                .then(response => {
                    let data = response.data.data;
                    this.profileInfo.name = data.name
                        ? data.name
                        : "----- ------";
                    this.profileInfo.image = data.profile_pic
                        ? this.profile_baseURL + data.profile_pic
                        : this.profile_baseURL + "default.jpg";
                    Loading.close();
                })
                .catch(error => {
                    console.log(error.response.data);
                    Loading.close();
                });
        }
    },
    mounted() {
        this.getProfileInfo();
    }
};
</script>

<style scoped></style>

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
                        <span class="mb-0 text-sm  font-weight-bold text-white"
                            >{{ profileInfo.name }}
                        </span>
                        <span class="mb-0 text-sm  font-weight-bold text-white"
                            >{{ profileInfo.email }}
                        </span>
                    </div>
                </div>
            </a>
        </li>

        <div class="scrollbar-inner">
            <div class="navbar-inner">
                <div
                    class="collapse navbar-collapse"
                    id="sidenav-collapse-main"
                >
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/compute-grade">
                                <i
                                    class="fas  fa-project-diagram text-primary"
                                ></i>
                                &nbsp; &nbsp;
                                <span class="nav-link-text text-primary"
                                    >Compute Grade</span
                                >
                            </router-link>
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
                        <li class="nav-item">
                            <router-link class="nav-link" to="/setting">
                                <i class="fas fa-cog text-primary"></i> &nbsp;
                                &nbsp;
                                <span class="nav-link-text text-primary"
                                    >Setting</span
                                >
                            </router-link>
                        </li>
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

                    this.profileInfo.email = data.email;
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

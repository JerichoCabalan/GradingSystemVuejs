export const routes = [
    {
        path: "/",
        component: () => import("./components/Auth/Auth"),
        redirect: "/login",
        children: [
            {
                path: "/login",
                name: "Login",
                meta: {
                    title: "Login | VueDashboard"
                },
                component: () => import("./components/Auth/Login")
            },
            {
                path: "/register",
                name: "register",
                meta: {
                    title: "Register | VueDashboard"
                },
                component: () => import("./components/Auth/Register")
            },
            {
                path: "/forgot-password",
                name: "forgot-password",
                meta: {
                    title: "Forgot Password | VueDashboard"
                },
                component: () => import("./components/Auth/ForgotPassword")
            }
        ]
    },
    {
        path: "/verify-email/:key",
        name: "Verify-Email",
        meta: {
            title: "Verify Email | VueDashboard"
        },
        component: () => import("./components/Auth/VerifyEmail")
    },
    {
        path: "/reset_password/:key",
        name: "Reset-Password",
        meta: {
            title: "Reset Password | VueDashboard"
        },
        component: () => import("./components/Auth/ResetPassword")
    },
    {
        path: "/",
        redirect: "/login",
        component: () => import("./components/Layout/Layout"),
        children: [
            {
                path: "/project",
                name: "project",
                meta: {
                    title: "Compute Grade | Vue Dashboard"
                },
                component: () => import("./components/Project/Project")
            },

            {
                path: "/profile",
                name: "profile",
                meta: {
                    title: "Profile | Vue Dashboard"
                },
                component: () => import("./components/Profile/Profile")
            },

            {
                path: "/logout",
                name: "logout",
                meta: {
                    title: "Logout | Vue Dashboard"
                },
                component: () => import("./components/Logout")
            }
        ]
    },
    {
        path: "*",
        component: () => import("./components/Errors/NotFound")
    }
];

<template>
    <div class="w-25 mx-auto mt-5">
        <h3>Login</h3>
        <form class="mt-5">
            <div class="mb-3">
                <label
                    for="emailForm"
                    class="form-label"
                >Email</label>
                <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="emailForm"
                    placeholder="Email..."
                >
            </div>
            <div class="mb-3">
                <label
                    for="passwordForm"
                    class="form-label"
                >Password</label>
                <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="passwordForm"
                >
            </div>
            <button
                @click.prevent="login"
                type="submit"
                class="btn btn-primary"
            >Login
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",

    data () {
        return {
            email: null,
            password: null,
        };

    },

    methods: {
        login () {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post("/login", {
                    email: this.email,
                    password: this.password,
                })
                    .then(res => {
                        localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'user.personal'})
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        },
    },
};
</script>

<style scoped>

</style>

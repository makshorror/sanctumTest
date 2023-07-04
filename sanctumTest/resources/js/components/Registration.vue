<template>
    <div class="w-25 mx-auto mt-5">
        <h3>Registration</h3>
        <form class="mt-5">
            <div class="mb-3">
                <label
                    for="nameForm"
                    class="form-label"
                >Name</label>
                <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="nameForm"
                    placeholder="Name..."
                >
            </div>
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
                    placeholder="Password..."
                >
            </div>
            <div class="mb-3">
                <label
                    for="passwordConfirmationForm"
                    class="form-label"
                >Password confirmation</label>
                <input
                    v-model="password_confirmation"
                    type="password"
                    class="form-control"
                    id="passwordConfirmationForm"
                    placeholder="Password confirmation..."
                >
            </div>
            <button
                @click.prevent="register"
                type="submit"
                class="btn btn-primary"
            >Login
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data () {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        };
    },

    methods: {
        register () {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post("/register", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                    .then(res => {
                        localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'user.personal'})
                    })
            });
        },
    },


};


</script>

<style scoped>

</style>

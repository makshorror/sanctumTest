<template>
    <router-link v-if="token" :to="{name: 'get.index'}">Get </router-link>
    <router-link v-if="!token" :to="{name: 'user.login'}">Login </router-link>
    <router-link v-if="!token" :to="{name: 'user.registration'}">Registration </router-link>
    <router-link v-if="token" :to="{name: 'user.personal'}">Personal cabinet </router-link>
    <a v-if="token" @click.prevent="logout"  href="#" >Logout</a>
    <router-view :key="$route.fullPath"></router-view>
</template>

<script>
export default {
    name: "Index",

    data(){
        return{
            token: '',
        }
    },

    mounted () {
        this.getToken()
    },

    updated () {
        this.getToken()
    },

    methods: {
        getToken(){
            this.token = localStorage.getItem('x_xsrf_token')
        },

        logout(){
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token')
                    this.$router.push({name: 'user.login'})
                })
        }
    }
};
</script>

<style scoped>

</style>

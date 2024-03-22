<template>
    <div class="h-screen w-screen flex justify-center items-center flex-col">
        <img src="../assets/logo.png" class="object-contain mb-5" />
        <div class="bg-slate-200 md:w-2/5 px-10 py-10 rounded shadow-lg">
            <p class="text-3xl">Login</p>
            <form @submit.prevent="handleSubmit" class="flex flex-col pt-5 items-start">
                <label>Username</label>
                <input type="text" v-model="username"
                    class="mb-5 w-full border border-gray-300 rounded px-5 py-1" />
                <label>Password</label>
                <input type="password" v-model="password"
                    class="mb-5 w-full border border-gray-300 rounded px-5 py-1" />
                <input type="submit" class="bg-slate-800 px-5 py-2 rounded text-white cursor-pointer" />
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            username: '',
        password: ''
        }
    },
    name: 'LoginVue',
    props: ['isLoggedIn', 'user'],  
    methods: {
        handleSubmit() {
            this.$emit('login', true); 
            this.$emit('setUserValues', { username: this.username, password: this.password }); 
        }
    }
})
</script>

<style></style>

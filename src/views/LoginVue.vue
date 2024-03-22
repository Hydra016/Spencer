<template>
    <div class="login h-screen w-screen flex justify-center items-center flex-col">
        <p class="font-black text-7xl heading text-slate-800 mb-5">Spencer</p>
        <div class="bg-gray-200 md:w-2/5 px-10 py-10 rounded shadow-xl">
            <p class="text-3xl">Login</p>
            <form @submit.prevent="handleSubmit" class="flex flex-col pt-5 items-start">
                <label>Username</label>
                <input type="text" v-model="username"
                    class="mb-5 w-full border border-gray-300 rounded px-5 py-1" />
                <label>Password</label>
                <input type="password" v-model="password"
                    class="mb-5 w-full border border-gray-300 rounded px-5 py-1" />
                <!-- <input :disabled="!username || !password" type="submit" class="bg-slate-800 px-5 py-2 rounded text-white cursor-pointer" /> -->
                <button :disabled="!username || !password" class="bg-slate-800 px-5 py-2 rounded text-white cursor-pointer">Login</button>
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

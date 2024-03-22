<template>
  <LoginVue :user="user" @setUserValues="handleUserDetails" :isLoggedIn="isLoggedIn" @login="handleLogin"
    v-if="!isLoggedIn" />
  <div class="" v-else>
    <nav class="flex items-center justify-between md:mb-10 mb-5 md:px-20 px-5 py-5 border-b-2 border-gray-200">
      <div class="flex items-center">
        <p @click="goHome" class="font-black text-xl heading text-slate-800 mr-5 mb-1">Spencer</p>
        <router-link class="mr-5 hidden md:block hover:underline" to="/">Home</router-link>
        <router-link to="/create" class="hidden md:block hover:underline">Create</router-link>
      </div>
      <div>
        <button @click="handleLogout" class="bg-red-600 px-5 py-2 rounded text-white cursor-pointer">Logout</button>
      </div>
    </nav>
    <div class="">
      <router-view class="md:px-20 px-5 py-5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginVue from './views/LoginVue.vue';
import { User } from './types/index';

export default defineComponent({
  data() {
    return {
      isLoggedIn: false,
      user: { username: '', password: '' } as User
    }
  },
  components: {
    LoginVue,
  },
  mounted() {
    const JSONdata = localStorage.getItem('isLoggedIn');
    const JSONUser = localStorage.getItem('user');
    if (JSONdata && JSONUser !== null) {
      this.isLoggedIn = JSON.parse(JSONdata);
      this.user = JSON.parse(JSONUser);
    }
  },
  methods: {
    handleLogin(isLoggedIn: boolean) {
      this.isLoggedIn = isLoggedIn;
      const jsonData = JSON.stringify(this.isLoggedIn);
      localStorage.setItem('isLoggedIn', jsonData)
    },
    handleUserDetails(user: User) {
      this.user = user;
      const jsonData = JSON.stringify(this.user);
      localStorage.setItem('user', jsonData)
    },
    handleLogout() {
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn');
    },
    goHome() {
      this.$router.push('/')
    }
  }
})
</script>


<style></style>

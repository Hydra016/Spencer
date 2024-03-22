<template>
    <div>
        <p class="text-2xl">What's on your mind?</p>
        <form @submit.prevent="handleSubmit" class="flex flex-col">
            <label class="mt-5">Title*</label>
            <input v-model="blog.title" type="text"
                class="border border-gray-200 rounded md:w-3/5 px-5 py-2  outline-none" required />
            <label class="mt-5">Content*</label>
            <Editor v-model="blog.content" editorStyle="height: 320px"
                class=" resize-none md:w-3/5 rounded outline-none" rows="20"
                required></Editor>
            <input :disabled="!blog.title || !blog.content" type="submit" class="bg-slate-800 px-5 py-2 rounded text-white cursor-pointer w-28 mt-5" />
        </form>
        <!-- <ToastVue :setShowToast="showToast" title="Post Created" /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '../types/index';
import Editor from 'primevue/editor';
// import ToastVue from '../components/ToastVue.vue';

export default defineComponent({
    name: 'CreateBlogVue',
    data() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        
        return {
            blog: {
                id: Math.floor(Math.random() * 99999),
                title: '',
                content: '',
                created: formattedDate
            } as Blog,
            showToast: false as boolean
        }
    },
    components: {
        // ToastVue,
        Editor
    },  
    methods: {
        handleSubmit() {
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            blogs = [...blogs, this.blog];
            localStorage.setItem('blogs', JSON.stringify(blogs))
            this.blog.id = Math.floor(Math.random() * 99999);
            this.blog.title = '';
            this.blog.content = '';
            this.showToast = true
        }
    }
})
</script>

<style></style>
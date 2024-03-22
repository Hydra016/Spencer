<template>
    <div>
        <p class="text-2xl">What's on your mind?</p>
        <form @submit.prevent="handleSubmit" class="flex flex-col">
            <label class="mt-5">Title*</label>
            <input v-model="blog.title" type="text"
                class="border border-gray-200 rounded md:w-3/5 px-5 py-2  outline-none" required />
            <label class="mt-5">Content*</label>
            <textarea v-model="blog.content"
                class="border border-gray-200 resize-none md:w-3/5 rounded px-5 py-2 outline-none" rows="20"
                required></textarea>
            <input type="submit" class="bg-slate-800 px-5 py-2 rounded text-white cursor-pointer w-28 mt-5" />
        </form>
        <!-- <ToastVue :setShowToast="showToast" title="Post Created" /> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog } from '../types/index';
// import ToastVue from '../components/ToastVue.vue';

export default defineComponent({
    name: 'EditBlogVue',
    data() {
        return {
            blog: {} as Blog,
            showToast: false as boolean
        }
    },
    components: {
        // ToastVue
    },
    mounted() {
        let blogs = (localStorage.getItem('blogs'))
        blogs = blogs && JSON.parse(blogs);
        if (blogs && Array.isArray(blogs)) {
            this.blog = blogs.find(blog => blog.id == this.$route.params.id);
        }
    },
    methods: {
        handleSubmit() {
            const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
            let blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
            const index = blogs.findIndex((blog: { id: number; }) => blog.id == this.blog.id);
            if (index !== -1) {
                blogs[index] = {...this.blog, edited: formattedDate};
                localStorage.setItem('blogs', JSON.stringify(blogs));
            }
        }
    }
})
</script>

<style></style>
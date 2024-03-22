<template>
    <div class="">
        <div class="mb-5">
            <button class="mr-3 hover:underline font-bold">
                Delete
            </button>
            <button class="hover:underline font-bold mr-3">
                Edit
            </button>
        </div>
        <p class="text-2xl font-bold">{{ blog.title }}</p>
        <p class="mt-5">{{ blog.content }}</p>
        <p class="mt-5">posted on: {{ blog.created }}</p>
        <div class="md:flex">
            <div class="mt-10 md:mr-5 bg-gray-200 px-5 py-2 rounded" v-for="recBlog in recommendedBlogs"
                :key="recBlog.id">
                <p class="text-xl font-bold">{{ recBlog.title }}</p>
                <p class="mt-5">{{ recBlog.content.substring(0, 200) + '...' }}</p>
                <div class="mt-5">
                    <button @click="goToBlog(recBlog.id)" class="hover:underline font-bold">
                        View
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Blog } from '@/types';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SingleBlogVue',
    data() {
        return {
            id: this.$route.params.id as string | number | string[],
            blog: {} as Blog,
            blogs: [] as Blog[],
            recommendedBlogs: [] as Blog[]
        }
    },
    mounted() {
        let blogs = (localStorage.getItem('blogs'))
        blogs = blogs && JSON.parse(blogs);
        if (blogs && Array.isArray(blogs)) {
            this.blogs = blogs;
            this.blog = blogs.find(blog => blog.id == this.id);
            this.recommendedBlogs = blogs.filter(blog => blog.id !== this.blog.id);
        }
    },
    watch: {
        '$route': {
            handler() {
                this.id = this.$route.params.id
                if (this.blogs && Array.isArray(this.blogs)) {
                    this.blog = this.blogs.find(blog => blog.id == this.id) as Blog;
                    this.recommendedBlogs = this.blogs.filter(blog => blog.id !== this.blog.id);
                }
            }
        }
    },
    methods: {
        goToBlog(id: number) {
            this.$router.push(`/Blog/${id}`)
        }
    }
},
)
</script>

<style></style>
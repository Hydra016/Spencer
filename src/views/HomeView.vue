<template>
  <div class="">
    <p class="md:text-3x text-2xl">Welcome, {{ user.username }}</p>
    <input @input="searchBlogs(query)" v-model="query" type="text"
      class="border border-gray-200 rounded md:w-3/5 w-full px-5 py-2  mt-5 outline-none"
      placeholder="search blog..." />
    <div v-if="blogs.length > 0">
      <div v-for="blog in blogs" :key="blog.id">
        <div class="mt-5 bg-gray-200 md:px-10 px-5 py-5 rounded">
          <div>
            <p class="font-bold text-xl">{{ blog.title }}</p>
            <div v-html="blog.content"></div>
            <p class="mt-3 text-sm">Posted on: {{ blog.created }}</p>
            <p v-if="blog.edited" class="text-xs">Last edited: {{ blog.edited }}</p>
          </div>
          <div class="mt-5">
            <button @click="deleteBlog(blog.id)" class="mr-3 hover:underline font-bold">
              Delete
            </button>
            <button @click="goToBlog(blog.id, 'Edit')" class="hover:underline font-bold mr-3">
              Edit
            </button>
            <button @click="goToBlog(blog.id, 'Blog')" class="hover:underline font-bold">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-full flex text-3xl mt-40 justify-center items-center" v-else>
      No Blogs Yet
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Blog, User } from '../types/index';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      user: {} as User,
      blogs: [] as Blog[],
      query: ''
    }
  },
  components: {
  },
  mounted() {
    const userData = localStorage.getItem('user');
    const blogsData = localStorage.getItem('blogs')
    if (userData !== null) {
      this.user = JSON.parse(userData);
    }
    if (blogsData !== null) {
      this.blogs = JSON.parse(blogsData)
    }
  },
  methods: {
    deleteBlog(id: number) {
      this.blogs = this.blogs.filter(blog => blog.id !== id);
      localStorage.setItem('blogs', JSON.stringify(this.blogs))
    },
    goToBlog(id: number, path: string) {
      this.$router.push(`/${path}/${id}`)
    },
    searchBlogs(searchQuery: string) {
      if (!searchQuery) {
        const blogsData = localStorage.getItem('blogs')
        if (blogsData !== null) {
          this.blogs = JSON.parse(blogsData)
        }
      }
      const filteredBlogs = this.blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      this.blogs = filteredBlogs

    }
  }
});
</script>

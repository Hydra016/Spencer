<template>
  <div v-if="showToast">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'ToastVue',
    data() {
        return {
            showToast: false
        }
    },
    props: ['title', 'message', 'setShowToast'],
    watch: {
        'setShowToast'(showToast) {
            console.log(this.showToast)
        this.showToast && setTimeout(() => {
            this.showToast = false
        }, 5000)
        }
    },
    }
)
</script>

<style>

</style>
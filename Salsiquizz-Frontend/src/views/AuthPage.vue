<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LogInForm from '@/components/LogInForm.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


const router = useRouter();
</script>


<template>

    <Header></Header>

    <LogInForm />

    <Footer></Footer>
    
</template>

<style scoped></style>
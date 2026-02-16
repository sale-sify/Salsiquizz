<script setup lang="ts">

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import SettingBox from '@/components/SettingBox.vue';
    import { useRouter } from 'vue-router';
    import { RouterLink } from 'vue-router';

    const router = useRouter();

    const user = {
        id: 1,
        name: 'John Doe',
        isAuthenticated: true,
    }

</script>



<template>
    <Header />

        <main class="main-container">
            <SettingBox/>
        </main>

    <Footer />
</template>



<style scoped>

    .main-container {
        margin: 0;
        padding-top: 12vh;
        min-height: 88vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


</style>
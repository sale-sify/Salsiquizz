<script setup lang="ts">

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import { useRouter } from 'vue-router';
    import { RouterLink } from 'vue-router';

    const router = useRouter();

</script>



<template>
    <Header />

        <main class="main-container">
            <section class="home-hero">
                <h1>Bienvenue sur Salsiquizz</h1>
                <p>Testez vos connaissances avec nos quiz amusants et interactifs !</p>
                <RouterLink to="/play" class="btn-start-quiz">Jouer</RouterLink>
            </section>
        </main>



    <Footer />
</template>



<style scoped>

</style>
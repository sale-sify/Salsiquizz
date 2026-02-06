<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LogInForm from '@/components/LogInForm.vue';
import HomeHero from '@/components/HomeHero.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';


const router = useRouter();
</script>


<template>

    <section class="main-container-auth-page">
        <Header></Header>

            <div class="main-box-auth-page">
                
                    <HomeHero />
                
                
                    <LogInForm />
                
            </div>

        <Footer></Footer>
    </section>
    
</template>

<style scoped>

    .main-container-auth-page{
        display: flex;
        min-height: 100vh;
        max-width: 100vw;
        z-index: 1;
    }

    .main-box-auth-page {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding-top: 12vh;
        padding-bottom: 5vh;
    }

    
    

</style>
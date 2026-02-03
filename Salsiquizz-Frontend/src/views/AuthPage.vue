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
                <div class="HomeHero-box">
                    <HomeHero />
                </div>
                <div class="LoginForm-box">
                    <LogInForm />
                </div>
            </div>

        <Footer></Footer>
    </section>
    
</template>

<style scoped>

    .main-container-auth-page{
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .main-box-auth-page {
        width: 100%;
        height: 95vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    
    

</style>
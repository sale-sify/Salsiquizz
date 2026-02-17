<script setup lang="ts">
// Importations
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import { useRouter } from 'vue-router';
    import { RouterLink } from 'vue-router';

// Initialisations
    const router = useRouter();

// fictive user data for demonstration purposes
    const user = {
        name: 'John Doe',
        isAuthenticated: true,
    }

</script>



<template>
    <Header />

        <main class="main-container">
            <img src="../assets/images/surprised-cat.png" alt="slsiquizz surprised cat logo" class="home-cat-img">
            <section class="home-hero">
                <h1>Bienvenue sur Salsiquizz. {{ user.name }} !</h1>
                <RouterLink to="/play" class="btn-start-quiz">Jouer</RouterLink>
            </section>
        </main>

    <Footer />
</template>



<style scoped>

/* =============================    MAIN    ============================== */
/* main container */
    .main-container {
        margin: 0;
        padding-top: 12vh;
        min-height: 88vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

/* ==========================    CAT IMAGE    =========================== */
/* cat image in the middle  */
    .home-cat-img {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
    }
    
/* ========================    HOME PRESENTATION    ========================= */
/* Home presentation of the web site */
    .home-hero {
        width: 80%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 2rem;
    }
    .home-hero > h1 {
        font-family: var(--font-title);
        color: var(--text-color-one);
        font-size: 2.5rem;
    }

/* ========================    CLICK TO ACTION    ========================= */
/* Click to action to create a new quizz and animation */
    .btn-start-quiz {
        min-width: 200px;
        min-height: 70px;
        padding: 0.8rem 2rem;

        font-size: 2rem;
        font-family: var(--font-title);
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: center;

        color: var(--text-color-one);
        background-color: var(--bg-color-CTA);

        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-secondary);

        transition: all 0.3s ease-in-out;
        animation: bounce 2s infinite;
    }
    .btn-start-quiz:hover {
        background-color: var(--bg-color-CTA-hover);
        border: 3px solid var(--border-color-CTA);
    }
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
            box-shadow: var(--box-shadow-tertiary);
        }
        50% {
            transform: translateY(-10px);
            box-shadow: var(--box-shadow-secondary);
        }
    }



/* ========================    MOBILE RESPONSIVE    ========================= */
/* Hide the cat image */
    @media (max-width: 768px) {
        .home-cat-img {
            display: none;
        }
        
    }

</style>
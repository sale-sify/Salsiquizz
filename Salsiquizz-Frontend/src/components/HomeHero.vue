<script setup lang="ts">

</script>

<template>
    <section class="welcoming-box">
        <img src="../assets/images/1-removebg-preview.png" alt="logo de Salsiquizz" />
        <p>Testez vos connaissances avec nos quizz amusants et interactifs. <br> <br> Que vous soyez débutant ou expert, Salsiquizz est l'endroit idéal pour apprendre et vous divertir.</p>
    </section>
</template>


<style scoped>

    .welcoming-box {
        width: 90%;
        height: 60%;
        margin: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        flex-wrap: wrap;
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-primary);
        padding: 1rem;
        background: var(--bg-color-one);
    }

    .welcoming-box > img {
        width: 60%;
    }

    .welcoming-box > p {
        font-family: var(--font-text);
        color: var(--text-color-one);
        font-size: 1.3rem;
        line-height: 1.6rem;
        width: 80%;
    }


    @media (max-width: 768px) {
        .welcoming-box {
            width: 90%;
            height: auto;
        }
        .welcoming-box > img {
            width: 50%;
            margin: 1rem;
        }
        .welcoming-box > p {
            font-size: 1rem;
            line-height: 1.2rem;
            width: 90%;
        }
        
    }

</style>
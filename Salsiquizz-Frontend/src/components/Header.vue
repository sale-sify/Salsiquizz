<script setup lang="ts">

// Importations
    import { useRoute } from 'vue-router';
    import { RouterLink } from 'vue-router';

// Initialisation de la route
    const route = useRoute();

// Simulation d'un utilisateur authentifié (à remplacer par une vraie gestion d'authentification)
    const user = {
        isAuthenticated: route.name !== 'Auth' // Par exemple, l'utilisateur est authentifié si la route n'est pas 'Auth'
    };
</script>


<template>

    <header class="header">

        <img src="" alt="logo-salsiquizz" class="header-logo" />
        <h1 class="header-title">Salsiquizz</h1>

        <nav v-if="user.isAuthenticated" class="header-nav">
            <RouterLink class="link-btn" to="/home">Acceuil</RouterLink>
            <RouterLink class="link-btn" to="/play">Jouer</RouterLink>
            <RouterLink class="link-btn" to="/scores">Scores</RouterLink>
            <RouterLink class="link-btn" to="/profile">Profil</RouterLink>
        </nav>
        
    </header>

</template>

<style scoped>

    .header {
        margin: 0;
        position: fixed;
        top: 0%;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: rgb(102, 4, 4);
        color: beige;
    }

    .header-nav {
        display: flex;
        gap: 2rem;
    }

    .link-btn {
        text-decoration: none;
        color:beige
    }


</style>
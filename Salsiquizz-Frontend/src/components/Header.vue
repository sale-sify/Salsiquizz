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
            <RouterLink to="/home">Acceuil</RouterLink>
            <RouterLink to="/play">Jouer</RouterLink>
            <RouterLink to="/scores">Scores</RouterLink>
            <RouterLink to="/profile">Profil</RouterLink>
        </nav>
        
    </header>

</template>

<style scoped></style>
<script setup lang="ts">

// Importations
    import { useRoute } from 'vue-router';
    import { RouterLink } from 'vue-router';

// Initialisation de la route
    const route = useRoute();

// Simulation d'un utilisateur authentifié (à remplacer par une vraie gestion d'authentification)
    const user = {
        isAuthenticated: true
    };

</script>



<template>

    <header class="header">

        <img src="../assets/images/cat.png" alt="logo-salsiquizz" class="header-logo" />
        <h1 class="header-title">Salsiquizz.</h1>

        <nav v-if="user.isAuthenticated" class="header-nav">
            <RouterLink class="link-btn" to="/home">Acceuil</RouterLink>
            <RouterLink class="link-btn" to="/play">Jouer</RouterLink>
            <RouterLink class="link-btn" to="/scores">Scores</RouterLink>
            <RouterLink class="link-btn" to="/profile">Profil</RouterLink>
        </nav>
        
    </header>

</template>



<style scoped>

/* Header main container  */
    .header {
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        background: var(--bg-color-two);
        color: var(--text-color-one);
        border-bottom: 1px solid var(--border-color-primary) ;
        box-shadow: 0 0 16px 1px var(--border-color-secondary); 
    }

/* Header title  */
    .header > h1 {
        font-size: 2.7rem; 
        font-family: var(--font-text);
        font-style: normal;
    }

/* Header logo  */
    .header-logo {
        width: 10rem;
    }

/* Header Navigation  */
    .header-nav {
        display: flex;
        gap: 3rem;
        font-family: var(--font-text);
    }

/* Header link button navigation  */
    .link-btn {
        min-width: 50px;
        text-align: center;
        font-size: 1.1rem;
        padding: 0.8rem;
        text-decoration: none;
        color:var(--text-color-one);
        background: var(--bg-color-one);
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 5px var(--border-color-secondary);
        transition: all 0.2s ease-in-out;
    }
    .link-btn:hover {
        background: var(--bg-color-three);
        box-shadow: 2px 2px 5px 3px var(--border-color-secondary);
        transform: scale(1.05);
    }




    @media (max-width: 768px) {
        .header {
            flex-direction: column;
            height: auto;
        }
        .header > h1 {
            font-size: 1.5rem;
        }
        .header-nav {
            width: 100%;
            gap: 1rem;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            margin-bottom: 1rem;
        }
        .link-btn {
            padding: 0.4rem;
            font-size: 0.7rem;
        }   
    }

</style>
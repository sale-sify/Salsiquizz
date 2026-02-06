<script setup lang="ts">

import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { isAuthenticated } = storeToRefs(userStore);
function logout() {
    userStore.logout();
}

</script>


<template>

    <footer class="footer">
        <p>&copy; 2026 Salsiquizz. Tous droits réservés.</p>
        <button class="btn-footer" @click="logout">Deconnexion</button>
    </footer>
    
</template>



<style scoped>

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 7%;
        background: var(--bg-color-two);
        color: var(--text-color-one);
        font-family: var(--font-text);
        border: 1px solid var(--border-color-primary);
        box-shadow: var(--box-shadow-primary);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn-footer {
        position: absolute;
        right: 1.5rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-family: var(--font-text);
        color: var(--text-color-one);
        background-color: var(--bg-color-CTA);
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-secondary);
        transition: all 0.3s ease;
    }
    .btn-footer:hover {
        box-shadow: var(--box-shadow-hover);
        transform: scaleX(1.05);
    }

</style>
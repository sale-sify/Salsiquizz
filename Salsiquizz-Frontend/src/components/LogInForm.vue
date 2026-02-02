<script setup lang="ts">

// Importations
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/users';
    import { tokenToString } from 'typescript';


// Initialisations
    const router = useRouter();
    const userStore = useUserStore();
    const { isAuthenticated, name, email, loading, error } = storeToRefs(userStore)

    async function handleLogin() {
        await userStore.login('test@mail.co', 'password')
    }


// Variables pour les formulaires
    const password = ref('');
    const confirmPassword = ref('');


// Gestion de l'affichage des formulaires
    let isSignIn = ref(false);
    function toggleForm() {
        isSignIn.value = !isSignIn.value;
    }






</script>


<template>
    
    <section>

        <button @click="toggleForm">{{ isSignIn ? 'Se connecter' : 'S\'inscrire' }}</button>

        <div class="signin-form-container" v-if="isSignIn">
            <h2>Inscription</h2>
            <form class="signin-form">

                <div class="form-group">
                    <label for="email">Email :</label>
                    <input v-model="email" type="email" id="email" name="email" required />
                </div>

                <div class="form-group">
                    <label for="name">Nom d'utilisateur :</label>
                    <input v-model="name" type="text" id="name" name="name" required />
                </div>

                <div class="form-group">
                    <label for="password">Mot de passe :</label>
                    <input v-model="password" type="password" id="password" name="password" required />
                </div>

                <div class="form-group">
                    <label for="confirm-password">Confirmer le mot de passe :</label>
                    <input v-model="confirmPassword" type="password" id="confirm-password" name="confirm-password" required />
                </div>

                <button type="submit">S'inscrire</button>

            </form>
        </div>

        <div class="login-form-container" v-else>
            <h2>Connexion</h2>
            <form class="login-form">

                <div class="form-group">
                    <label for="login-email">Email :</label>
                    <input v-model="email" type="email" id="login-email" name="login-email" required />
                </div>

                <div class="form-group">
                    <label for="login-password">Mot de passe :</label>
                    <input v-model="password" type="password" id="login-password" name="login-password" required />
                </div>

                <button type="submit">Se connecter</button>

            </form>
        </div>

    </section>

</template>



<style scoped>
    
</style>
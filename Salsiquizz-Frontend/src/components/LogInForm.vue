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

// Fonction de gestion de la connexion et de l'inscription
    // Connexion
    async function handleLogin() {
        await userStore.login(email.value, password.value)
    }
    // inscription
    async function handleSignIn() {
        if (password.value !== confirmPassword.value) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        await userStore.signIn(name.value, email.value, password.value)
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
    
    <section class="form-main-container">

        <button id="toggle-form-btn" @click="toggleForm">{{ isSignIn ? 'Se connecter' : 'S\'inscrire' }}</button>

        <div class="signin-form-container" v-if="isSignIn">
            <h2>Inscription</h2>
            <form class="signin-form" @submit.prevent="handleSignIn">

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

                <button class="submit-btn" type="submit" >S'inscrire</button>

            </form>
        </div>

        <div class="login-form-container" v-else>
            <h2>Connexion</h2>
            <form class="login-form" @submit.prevent="handleLogin">

                <div class="form-group">
                    <label for="login-email">Email :</label>
                    <input v-model="email" type="email" id="login-email" name="login-email" required />
                </div>

                <div class="form-group">
                    <label for="login-password">Mot de passe :</label>
                    <input v-model="password" type="password" id="login-password" name="login-password" required />
                </div>

                <button class="submit-btn" type="submit">Se connecter</button>

            </form>
        </div>

        <img id="sleeping-cat" src="../assets/images/sleeping-cat.png" alt="">

    </section>

</template>



<style scoped>

    .form-main-container {
        width: 90%;
        height: 60%;
        min-height: 60%;
        margin: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-primary);
        background: var(--bg-color-one);
        padding: 1rem;
        padding-top: 1.5rem;
        padding-bottom: 0;
        position: relative;
    }

    

    #toggle-form-btn {
        position: absolute;
        top: 1.5rem;
    }

    .login-form-container, .signin-form-container {
        width: 100%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around; 
    }

    h2 {
        min-width: 50%;
        font-family: var(--font-text);
        color: var(--text-color-one);
        font-size: 1.8rem;
        margin-top: 1.5rem;
        padding-bottom: 0.6rem;
        border-bottom: 1px solid var(--border-color-primary);
    }

    .login-form-container  > h2 {
        margin-top: 3rem;
    }

    .signin-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8%;
    }

    .login-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 8%;
    }

    .form-group {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
    }
    .form-group > label {
        font-family: var(--font-text);
        color: var(--text-color-one);
        font-size: 1.1rem;
        margin-bottom: 0.2rem;
        margin-left: 0.5rem;
    }
    .form-group > input {
        width: 100%;
        min-height: 1.1rem;
        padding: 0.5rem;
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 5px var(--border-color-secondary);
        background: var(--bg-color-three);
    }
    .form-group > input:focus {
        outline: none;
        border-color: var(--border-color-secondary);
        box-shadow: 2px 2px 5px 3px var(--border-color-secondary);
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        background-color: var(--bg-color-three) !important;
        -webkit-box-shadow: 
            0 0 0 1000px var(--bg-color-three) inset,
            2px 2px 5px 3px var(--border-color-secondary);
        -webkit-text-fill-color: black !important;
        border: 1px solid var(--border-color-secondary) !important;   
    }

    .submit-btn {
        position: absolute;
        bottom: 2rem;   
        background: var(--bg-color-CTA);
    }
    .submit-btn:hover {
        background: var(--bg-color-CTA-hover);
    }
    
    button {
        min-width: 300px;
        text-align: center;
        font-size: 1.3rem;
        padding: 0.8rem;
        text-decoration: none;
        color:var(--text-color-one);
        background: var(--bg-color-one);
        border: 1px solid var(--border-color-primary);
        border-radius: var(--border-radius);
        box-shadow: 2px 2px 5px var(--border-color-secondary);
        transition: all 0.2s ease-in-out;
    }
    button:hover {
        background: var(--bg-color-three);
        box-shadow: 2px 2px 5px 3px var(--border-color-secondary);
        transform: scale(1.05);
    }
    

    #sleeping-cat {
        position: absolute;
        bottom: 0;
        left: 12%;
        transform: translateY(54%);
        animation: pulse 3s infinite;
    }

    @keyframes pulse {
        0% {
            transform: translateY(54%) scale(1);
        }
        50% {
            transform: translateY(54%) scale(1.03);
        }
        100% {
            transform: translateY(54%) scale(1);
        }
    }
    
</style>
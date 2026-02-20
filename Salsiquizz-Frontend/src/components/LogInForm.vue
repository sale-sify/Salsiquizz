<script setup lang="ts">

// Importations
    import { ref } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useRouter } from 'vue-router';
    import { useUserStore } from '@/stores/users';


// Initialisations
    const router = useRouter();
    const userStore = useUserStore();
    const { loading, error } = storeToRefs(userStore)


// Variables pour les formulaires
    const password = ref('');
    const confirmPassword = ref('');
    const email = ref('');
    const name = ref('');



// Fonction de gestion de la connexion et de l'inscription

    // Connexion
    async function handleLogin() {
        const ok = await userStore.login(email.value, password.value)
        if (!ok) {
            alert('Erreur de connexion : ' + error.value);
            return;
        }
        router.push('/home');

        
    }

    // inscription
    async function handleSignIn() {
        // Confirmation du mot de passe
        if (password.value !== confirmPassword.value) {
            alert('Les mots de passe ne correspondent pas');
            return;
        }
        // Verification longueur du mot de passe
        if (password.value.length < 6) {
            alert('Le mot de passe doit contenir au moins 6 caractères');
            return;
        }
        // Verification de l'email
        if (email.value.length < 5 || !email.value.includes('@')) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }
        // Appel de la fonction d'inscription du store
        const ok = await userStore.signIn(name.value, email.value, password.value)

        if (ok) {
            isSignIn.value = false;
        }
    }







// Gestion de l'affichage des formulaires
    let isSignIn = ref(false);
    function toggleForm() {
        isSignIn.value = !isSignIn.value;
    }






</script>


<template>


    <section class="loading-container" v-if="loading">
        <p>Chargement...</p>
        <div class="loader"></div>
    </section>
    
    
    <section v-if="!loading" class="form-main-container">

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

    



/* ========================== MAIN CONTAINER ========================== */
    .form-main-container {
        width: 90%;
        height: 70%;
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

    
/* Toggle form button to switch form signin to login */
    #toggle-form-btn {
        position: absolute;
        top: 1.5rem;
    }


/* ========================== FORM CONTAINER ========================== */
    .login-form-container, .signin-form-container {
        width: 100%;
        height: 88%;
        padding-bottom: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around; 
    }
/* Title for form */
    h2 {
        min-width: 50%;
        font-family: var(--font-text);
        color: var(--text-color-one);
        font-size: 1.8rem;
        padding-top: 2rem;
        padding-bottom: 0.6rem;
        border-bottom: 1px solid var(--border-color-primary);
    }

/* Sign in form conatainer */
    .signin-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 8%;
    }

/* Login form container */
    .login-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-bottom: 8%;
    }

/* Group form representing label and input  */
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
        margin-bottom: 0.4rem;
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


/* Submit / CTA button and hover animation */
    .submit-btn {
        position: absolute;
        bottom: 2rem;   
        background: var(--bg-color-CTA);
    }
    .submit-btn:hover {
        background: var(--bg-color-CTA-hover);
    }
    

/* button styling and hover animation */
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
        border: 2px solid var(--border-color-CTA);
    }
    
/* Sleeping cat at the bottom with animation */
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


/* ==================== LOADING CONTAINER ===================== */
    .loading-container {
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

/* Loading text */
    .loading-container > p {
        font-family: var(--font-text);
        color: var(--text-color-one);
        font-size: 2rem;
    }

/* Loader animation -> 3 vertical bars scaling up and down on different timing*/
    .loader,
    .loader:before,
    .loader:after {
        background: var(--text-color-one);
        -webkit-animation: load1 1s infinite ease-in-out;
        animation: load1 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
    }
    .loader {
        color: var(--text-color-one);
        text-indent: -9999em;
        margin: 88px auto;
        position: relative;
        font-size: 11px;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .loader:before,
    .loader:after {
        position: absolute;
        top: 0;
        content: '';
    }
    .loader:before {
        left: -1.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .loader:after {
        left: 1.5em;
    }
    @-webkit-keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
        }
    @keyframes load1 {
        0%,
        80%,
        100% {
            box-shadow: 0 0;
            height: 4em;
        }
        40% {
            box-shadow: 0 -2em;
            height: 5em;
        }
    }
    
</style>
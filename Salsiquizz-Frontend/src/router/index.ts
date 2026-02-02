import { createRouter, createWebHistory } from 'vue-router'

// Creation des routes de l'application pour naviguer entre les differentes pages
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Route pour la page d'authentification / login / inscription / landing page
        {
            path: '/',
            name: 'auth',
            component: () => import('@/views/AuthPage.vue')
        },
        // Route pour la page d'accueil une fois l'utilisateur authentifie
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomePage.vue')
        },
        // Route pour la page de jeu / creation de quizz
        {
            path: '/play',
            name: 'play',
            component: () => import('@/views/PlayPage.vue')
        },
        // Route pour la page des scores et classements
        {
            path: '/scores',
            name: 'scores',
            component: () => import('@/views/ScoresPage.vue')
        },
        // Route pour la page de profil utilisateur
        {
            path: '/profile',
            name: 'profile',
            component: () => import('@/views/ProfilePage.vue')
        },


    ],
})

export default router

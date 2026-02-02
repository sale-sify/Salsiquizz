import { defineStore } from "pinia";
import type { User, UserId } from '@/types/user'
import { idText } from "typescript";


interface UserState {
    token: string | null
    user: User | null
    loading: boolean
    error: string | null
}


const STORAGE_KEY = "app_user_v1"

function loadFromStorage(): Pick<UserState, "token" | "user"> {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? (JSON.parse(raw) as { token: string | null; user: User | null }) : { token: null, user: null }
    } catch {
        return { token: null, user: null }
    }
}


export const useUserStore = defineStore('user', {
    state: (): UserState => {
        const { token, user } = loadFromStorage()
        return {
            token, 
            user,
            loading: false,
            error: null
        }
    },

    getters: {
        isAuthenticated: (state) => !!state.token,
        id: (state) => state.user?.id ?? null,
        name: (state) => state.user?.name ?? '',
        email: (state) => state.user?.email ?? ''
    },

    actions: {
        persist() {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: this.token, user: this.user }))
        },

        setToken(token: string | null) {
            this.token = token
            this.persist()
        },

        setUser(user: User | null) {
            this.user = user
            this.persist()
        },
    
        updateUserInfo(partial: Partial<User>) {
            if (!this.user) return
            this.user = {...this.user, ...partial}
            this.persist()
        },

        logout() {
            this.token = null
            this.user = null
            this.error = null
            this.loading = false
            localStorage.removeItem(STORAGE_KEY)
        },
    }
})

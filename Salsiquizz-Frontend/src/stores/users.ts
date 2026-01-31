import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    username: "",
    email: "",
    isAuthenticated: false,
    token: ""
}),
  actions: {
    setUser(id: number, username: string, email: string, token: string) {   

    }}})
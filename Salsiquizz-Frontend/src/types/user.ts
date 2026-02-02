export type UserId = string

export interface User {
    id: UserId
    name: string
    email: string
}

export interface Credentials {
    email: string
    password: string
}
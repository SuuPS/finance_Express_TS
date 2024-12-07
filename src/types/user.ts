// src/models/user.ts
export interface User {
    id: number;
    username: string;
    email: string;
    password: string; // В реальных приложениях пароли не должны храниться в открытом виде
}
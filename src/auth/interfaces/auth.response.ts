import type { User } from "@/interfaces/user.interface";


//Login, register, checkstatus
export interface AuthResponse {
    user:  User;
    token: string;
}
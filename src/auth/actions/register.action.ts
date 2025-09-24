import { makeupApi } from "@/api/makeupApi"
import type { AuthResponse } from "../interfaces/auth.response"


export const registerAction = async(fullName: string, email: string, password: string): Promise<AuthResponse | undefined> => {

    try {
        
        const { data } = await makeupApi.post<AuthResponse>('/auth/register', {
            fullName,
            email,
            password
        });

        return data;

    } catch (error) {
        console.log(error)
    }
}
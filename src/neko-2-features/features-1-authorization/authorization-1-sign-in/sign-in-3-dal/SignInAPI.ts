import {instance} from "../../../../base-url";

export interface ISignInData {
    name: string;
    token: string;
    tokenDeathTime: number;

    error: string;
}

export const SignInAPI = {
    signIn: async (email: string, password: string, rememberMe: boolean) => {
        const response = await instance.post<ISignInData>('/auth/login', {email, password, rememberMe});
        return response.data;
    },

};

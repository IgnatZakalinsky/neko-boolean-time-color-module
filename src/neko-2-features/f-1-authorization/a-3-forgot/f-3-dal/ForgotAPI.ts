import { instance } from "../../../../base-url";

export interface IForgotData {
    success: boolean;

    error: string;
}

export const ForgotAPI = {
    forgot: async (email: string) => {
        const response = await instance.post<IForgotData>('/auth/forgot', {email});
        return response.data;
    },

};

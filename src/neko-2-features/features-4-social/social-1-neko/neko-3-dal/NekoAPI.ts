import {instance} from "../../../../base-url";

export interface IGetMeData {
    name: string;
    token: string;
    tokenDeathTime: number;

    error: string;
}

export const NekoAPI = {
    getMe: async (token: string) => {
        const response = await instance.post<IGetMeData>('/auth/me', {token});
        return response.data;
    },

};

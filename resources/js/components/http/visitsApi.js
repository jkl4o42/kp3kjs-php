import {$host} from "./index";

export const create = async visitData => {
    try {
        const {data} = await $host.post('api/visits', visitData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getAll = async (fromToArr) => {
    try {
        if (fromToArr) {
            const {data} = await $host.post('api/visits/for_week', fromToArr);
            return data;
        } else {
            const {data} = await $host.get('api/visits');
            return data;
        }
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const remove = async removeId => {
    try {
        const {data} = await $host.delete(`api/visits/${removeId}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};



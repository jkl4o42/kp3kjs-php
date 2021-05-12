import {$host} from "./index";

export const create = async scheduleData => {
    try {
        const {data} = await $host.post('api/schedules', scheduleData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getAll = async () => {
    try {
        const {data} = await $host.get('api/schedules');
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const remove = async id => {
    try {
        const {data} = await $host.delete(`api/schedules/${id}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

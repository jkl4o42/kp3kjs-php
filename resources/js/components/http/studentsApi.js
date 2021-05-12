import {$host} from "./index";

export const create = async studentData => {
    try {
        const {data} = await $host.post('api/students', studentData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const getAll = async () => {
    try {
        const {data} = await $host.get('api/students');
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const update = async updateData => {
    try {
        const {data} = await $host.post('api/students/update', updateData);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

export const remove = async id => {
    try {
        const {data} = await $host.delete(`api/students/${id}`);
        return data;
    } catch (e) {
        const {data} = e.response;
        return data;
    }
};

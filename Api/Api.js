import axios from "axios";
import qs from 'qs';

const url = "http://172.20.5.25:81/AppQldt/"

export const infor = (data) => {
    const res = axios.post(url, qs.stringify(data), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    return res
}
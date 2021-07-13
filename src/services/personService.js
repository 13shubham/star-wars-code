import http from './httpService';
import config from '../config.json'
export default function getPerson(id){
    return http.get(`${config.apiEndpoint}${id}`)
}


import axios from 'axios';

export default()=>{
    return axios.create({
        baseURL:'http://locahost:3000/'
    })
}
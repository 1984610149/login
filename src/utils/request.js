import axios from 'axios'
console.log(axios)
import Qs from 'Qs'
const service = axios.create({
    baseURL: 'https://test.52hbl.com',
    timeout: 1000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data);
    }],
});

export default service
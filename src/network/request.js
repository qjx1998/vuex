import axios from 'axios'

export function request(config){
//   创建axios实例 方法一
//  return new Promise((resolve,reject) => {
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config).then(
//         res => {
//             resolve(res);
//         }
//     ).catch(err => {
//         reject(err)
//     })

//   })
 

// 方法二
const instanct = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
})


// 请求拦截
instanct.interceptors.request.use(config => {
  
    return config;
}, err => {
    
})

// 响应拦截
instanct.interceptors.response.use(config => {
    return config;
}, err => {
    
})

return instanct(config);
}
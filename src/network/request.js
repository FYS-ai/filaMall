import Axios from 'axios'
export function request(config){
  //1、创建axios实例
  const instance1 = Axios.create({
    baseURL:'http://123.207.32.32:8000/api/m3',
    timeout:5000
  })
  //发送请求拦截interceptors
  instance1.interceptors.request.use(config => {
    return config
  })
  instance1.interceptors.response.use(
    res => {
    //拦截数据成功，返回给then，这样then才会接受到
    return res.data
    },
    err=>{
      return console.log(err)
    })
  return instance1(config)
}
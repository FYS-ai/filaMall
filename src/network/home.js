import {request} from './request'
export function getRotationChart(){
  return request({
    url:'/home/multidata'
  })
}
export function getGoods(type,page){
  return request({
    url:'/home/data',
    //get请求需要用params，post需要在data里面
    params:{
      type,
      page
    }
    
  })
}
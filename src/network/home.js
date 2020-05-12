import {request} from './request'
export function getRotationChart(){
  return request({
    url:'/home/multidata'
  })
}
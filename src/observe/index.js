//把data中的数据 都能够使用Object.defineProperty重新定义es5
//Object.defineProperty 不能兼容ie8以下的浏览器
import {isObject} from '../util/index'
class Observer {
    constructor(value) {
        
    }
}
export function observe(data) {
    console.log(isObject(data));
    if(!isObject(data)) {
        return;
    }

    return new Observer(data); //用来观测数据
   
}
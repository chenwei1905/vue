//Vue的核心代码,只是Vue的声明
import  {initMixin} from './init'

function Vue(options)  {
    //进行Vue的初始化操作
    console.log(options)
    this._init(options);
}
//通过引入文件的方式给 Vue原型上引入init方法
initMixin(Vue);

export default Vue
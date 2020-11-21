(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
}(this, (function () { 'use strict';

    function isObject(data) {
        if (typeof data === 'object' && data !== null) {
            return true;
        }
    }

    //把data中的数据 都能够使用Object.defineProperty重新定义es5
    class Observer {
        constructor(value) {
            
        }
    }
    function observe(data) {
        console.log(isObject(data));
        if(!isObject(data)) {
            return;
        }

        return new Observer(data); //用来观测数据
       
    }

    function initState(vm) {
        const opts = vm.$options;
        //vue数据 属性 方法 计算属性 watch
        if (opts.props) ;
        if (opts.methods) ;
        if (opts.data) {
            initData(vm);
        }
        if (opts.computed) ;
        if (opts.watch) ;
    }
    function initData(vm) {
        let data = vm.$options.data; //用户传递的data
        data = vm._data = typeof data === "function" ? data.call(vm) : data;
        //对象劫持,用户改变了数据 我希望可以得到通知 => 刷新页面
        //MVVM模式 数据变化可以驱动视图的变化

        //object.definedProperty() 给属性增加get set方法
        observe(data); //响应式原理


       

    }

    //在原型上添加一个init方法
    function initMixin(Vue) {
        //初始化流程
        Vue.prototype._init = function (options) {
            //数据劫持
            const vm = this;
            vm.$options = options;
            //初始化状态
            initState(vm); //分割代码
        };
    }

    //Vue的核心代码,只是Vue的声明

    function Vue(options)  {
        //进行Vue的初始化操作
        console.log(options);
        this._init(options);
    }
    //通过引入文件的方式给 Vue原型上引入init方法
    initMixin(Vue);

    return Vue;

})));
//# sourceMappingURL=vue.js.map

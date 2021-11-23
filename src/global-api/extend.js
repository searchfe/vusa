import define from '../runtime/define-component';

let cid = 1

const SuperStatic = {
	extend,
	options: {}
}

export function extend(extendOptions = {}) {
	const Super = this.cid ? this : SuperStatic;
	const SuperId = Super.cid;

	// 初始化构造函数
	const Sub = define(extendOptions);
	// console.log('prototype:', Sub.prototype)
	// console.log('SuperId:', SuperId)
	// Sub.options = mergeOptions(Super.options, extendOptions)
	console.log('Sub.options:', Sub.options)
	// 继承父类原型上的所有方法
	
	// // 合并父类的静态属性
	// Sub.options = Object.assign({}, Super.options, extendOptions)

	// // 将子类的静态属性 super 指向父类
	// Sub['super'] = Super
	Sub.cid = cid++
	Sub.extend = Super.extend;
	// Sub.superOptions = Super.options
	// Sub.extendOptions = extendOptions

	// 导出子类
	console.log('Sub原型对象:', Sub.prototype)
	return Sub
}
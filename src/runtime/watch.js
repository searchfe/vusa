/**
 * @file s-watch-transition
 * @author ngaiwe(ngaiwe@126.com)
 */
import {isObj, isFunction, isString} from '../shared/util';

function transitionHandler(handler, context) {
	if (isString(handler)) {
		return context && context['$options'] && context['$options']['methods'] && context['$options']['methods'][handler];
	}
	else if (isFunction(handler)) {
		return handler;
	}
	else {
		return ''
	}
}

export default function watcher(name, listener, context) {
	let watcher = {};
	// 第一步判断watcher类型
	if (isFunction(listener)) {
		watcher.handler = listener;
	}
	else if (isString(listener)) {
		watcher.handler = transitionHandler(listener, context);
	}
	else if (isObj(listener)) {
		const handler = transitionHandler(listener.handler, context);

		if (listener.immediate) {
			handler.call(context, context.data.get(name));
		}

		watcher = Object.assign({}, listener, {
			handler
		});
	}

	return watcher;
}
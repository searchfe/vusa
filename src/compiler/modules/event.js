/**
 * @file event
 * @author cxtom(cxtom2008@gmail.com)
 */

import transform from '../expression-transformer';
import {customAlphabet} from 'nanoid';

const reEvent = /^(@|v-on:)/;
const fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
const simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

function getName() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, 4);
    return nanoid();
}

function postTransformNode(node, options) {
    const injectScript = [];
    const eventAttrs = node.attrsList.filter(n => reEvent.test(n.name));
    for (const attr of eventAttrs) {
        delete node.attrsMap[attr.name];
        const [name, ...modifiers] = attr.name.split('.');

        const isMethodPath = simplePathRE.test(attr.value);
        const isFunctionExpression = fnExpRE.test(attr.value);

        if (isFunctionExpression) {
            options.error('function expression in event value are not supported.');
            return;
        }

        if (attr.value) {
            let eventHandler;
            if (isMethodPath) {
                eventHandler = transform(attr.value).code;
            }
            else {
                const fnName = getName();
                const method = `${fnName}($event) {${attr.value}}`;
                eventHandler = `${fnName}($event)`;

                injectScript.push(method);
            }

            node.attrsMap[`on-${name.replace(reEvent, '')}`]
                = `${modifiers.map(m => m + ':').join('')}${eventHandler}`;
        }
    }

    if (injectScript.length) {
        options.error(`[injectScript]${JSON.stringify(injectScript)}`);
    }
}

export default {
    postTransformNode,
};

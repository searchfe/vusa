/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */

import clazz from './class';
import style from './style';
import bind from './bind';
import yf from './if';
import fr from './for';
import event from './event';
import html from './html';
import ref from './ref';
import stripAttr from './strip-attr';
import dynamicComponent from './dynamic-component';

export default [
    stripAttr,
    yf,
    fr,
    event,
    html,
    ref,

    clazz,
    style,
    dynamicComponent,

    // bind 放在所有处理完之后
    bind
];

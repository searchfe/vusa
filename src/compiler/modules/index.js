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
import dynamicComponent from './dynamic-component';
import bool from './boolean';

export default [
    bool,
    yf,
    fr,
    event,
    html,
    ref,

    clazz,
    style,

    // bind 放在所有处理完之后
    bind,

    dynamicComponent
];

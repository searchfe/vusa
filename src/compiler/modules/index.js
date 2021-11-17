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
import template from './template';
import transition from './transition';
import textCombine from './text-combine';
import forIf from './for-if';

export default [
    template,
    bool,
    yf,
    fr,
    forIf,
    event,
    html,
    ref,
    textCombine,

    clazz,
    style,

    // bind 放在所有处理完之后
    bind,
    transition,

    dynamicComponent,
];

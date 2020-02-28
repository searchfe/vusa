/**
 * @file transformers
 * @author cxtom(cxtom2008@gmail.com)
 */

import clazz from './class';
import style from './style';
import bind from './bind';
import yf from './if';
import fr from './for';

export default [
    yf,
    fr,

    clazz,
    style,

    // bind 放在 class 和 style 处理完之后
    bind
];

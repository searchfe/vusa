/**
 * @file 修改 draggable 属性
 * @author donghualei
 */

export default function changeDisabled(disabled) {
    if (disabled === true) {
        return 'disabled';
    }
    if (disabled && typeof disabled === 'string') {
        return 'disabled';
    }
    return disabled;
}

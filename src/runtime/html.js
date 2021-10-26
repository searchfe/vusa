/**
 * @file 转换html
 * @author donghualei
 */


function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

export default function toHtml(html) {
    return html == null
        ? ''
        : Array.isArray(html) || (isPlainObject(html) && html.toString ===  Object.prototype.toString)
            ? JSON.stringify(html, null, 2)
            : String(html);
}

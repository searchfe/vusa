function processAttr(str) {
    return str.split(/(?=<)/g).map(function (subStr) {
        if (/^<\//.test(subStr) || (subStr.indexOf('>') < 0)) {
            return subStr;
        }
        let reg = /\s*(on[^\s"'<>\/=]+)\s*=/gi;
        let gtIndex = subStr.indexOf('>');
        let back = subStr.slice(gtIndex + 1);
        let front = subStr.slice(0, gtIndex + 1).replace(reg, function (match, match1) {
            return match.replace(match1, match1 + '-safe');
        });
        return front + back;
    }).join('');
}

export default function toSafeString(html) {
    if (html.indexOf('<') > -1) {
        const reg = /((<script.*?<\/script>)|(<style.*?<\/style>))/ig;
        const map = {
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;', // 与 PHP 转义保持一致
        };
        html = html.replace(reg, function (match) {
            return match.replace(/([<>"])/g, function (char) {
                return map[char];
            });
        });
        return processAttr(html);
    }
    return html;
}

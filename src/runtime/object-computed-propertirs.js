/**
 * @file object computed properties merge
 * @author cxtom(cxtom2008@gmail.com)
 */

export default function (properties) {
    return properties.reduce((prev, {k, v}) => {
        prev[k] = v;
        return prev;
    }, {});
}

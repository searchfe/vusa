"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
 * @file merge class
 * @author cxtom(cxtom2008@gmail.com)
 */
function string(cls = '') {
  if (!cls) {
    return '';
  }

  return cls.split(' ').reduce((prev, name) => {
    if (!name) {
      return prev;
    }

    return { ...prev,
      [name]: 1
    };
  }, {});
}

function object(cls = {}) {
  return Object.keys(cls).reduce((prev, key) => {
    if (!cls[key]) {
      return prev;
    }

    return { ...prev,
      ...string(key)
    };
  }, {});
}

function array(cls = []) {
  let clazz = {};

  for (let i = 0, len = cls.length; i < len; i++) {
    const element = cls[i];

    if (!element) {
      continue;
    }

    if (typeof element === 'string') {
      clazz = { ...clazz,
        ...string(element)
      };
    } else if (Array.isArray(element)) {
      clazz = { ...clazz,
        ...array(element)
      };
    } else {
      clazz = { ...clazz,
        ...object(element)
      };
    }
  }

  return clazz;
}

function _default(staticClass = '', cls = {}) {
  return Object.keys(array([staticClass, cls])).join(' ');
}
//# sourceMappingURL=merge-class.js.map
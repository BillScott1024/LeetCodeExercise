/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var array = strToArray(s);
    var stack = new Stack();
    if (array.length % 2) return false;
    for (let i = 0; i < array.length; i++) {
        let topElement = array[i];
        if (topElement == "(" || topElement == "[" || topElement == "{") {
            stack.push(topElement);
        } else {
            if (stack.isEmpty()) {
                return false;
            } else {
                if (topElement == ")") {
                    if (stack.pop() !== "(") return false
                } else if (topElement == "]") {
                    if (stack.pop() !== "[") return false
                } else if (topElement == "}") {
                    if (stack.pop() !== "{") return false
                }
            }
        }
    }

    return stack.isEmpty();

};

var strToArray = function (str) { 
    return str.split("");
}
function Stack() {
    var items = [];
    this.push = function (element) {
        items.push(element);
    }

    this.pop = function () { 
        return items.pop();
    }

    this.peek = function () { 
        return items.length > 0 ? items[items.length - 1] : null;
    }

    this.size = function () { 
        return items.length;
    }

    this.clear = function () { 
        items = [];
    }

    this.contains = function (element) { 
        return items.includes(element);
    }

    this.isEmpty = function () { 
        return items.length == 0;
    }
    this.print = function () {
        console.log(items.toString());
    }
}

// @lc code=end


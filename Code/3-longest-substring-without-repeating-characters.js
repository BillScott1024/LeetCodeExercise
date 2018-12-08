/**
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 
 * 示例 1:

    输入: "abcabcbb"
    输出: 3 
    解释: 无重复字符的最长子串是 "abc"，其长度为 3。
    示例 2:

    输入: "bbbbb"
    输出: 1
    解释: 无重复字符的最长子串是 "b"，其长度为 1。
    示例 3:

    输入: "pwwkew"
    输出: 3
    解释: 无重复字符的最长子串是 "wke"，其长度为 3。
        请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。

 * @param {string} s
 * @return {number}
 */
s = "abcabcbb";
var lengthOfLongestSubstring = function(s) {
    let array = s.split("");
    let arrayData = [];
    arrayData.push(array[0]);

    for(let i = 0 ;i < array.length;i++){

        if((i+1) == array.length) break;
        for(let j = 0;j < arrayData.length;j++){
            if(arrayData[j] != array[i+1]){
                arrayData.push(array[i+1]);
            }else{
                break;
            }    
        }
        
    }
    console.log('arrayData.length',arrayData.length);
    return arrayData.length;
    
};
lengthOfLongestSubstring(s);
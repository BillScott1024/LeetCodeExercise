using System;
using System.Collections.Generic;
namespace LeetCodeExercise
{
    class MainProgram14
    {
        public class Solution
        {
           
            
            public static string LongestCommonPrefix(string[] strs)
            {
                // 结果
                string resultStr = "";
                // 字符串数量
                int strCount = strs.Length;
                int minLength = strs[0].Length;
                if (strs == null || strs.Length == 0)
                {
                    return "";
                }
                minLength = strs[0].Length;
                for (int i = 0; i < strs.Length; i++)
                {
                    if (minLength > strs[i].Length)
                    {
                        minLength = strs[i].Length;
                    }
                }

                for (int i = 0; i < minLength; i++)
                {
                    if (strs[i] == strs)
                }

                return resultStr;
            }

            static void Main(string[] args)
            {
                string[] strs = {"dog", "racecar", "car"};

                Console.WriteLine(LongestCommonPrefix(strs));
            }
        }
    }
}
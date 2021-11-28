using System;
using System.Collections.Generic;
namespace LeetCodeExercise
{
    class MainProgram13
    {
        public class Solution
        {
           
            
            public static int RomanToInt(string s)
            {
                Dictionary<char, int> romanMap = new Dictionary<char, int>();
                romanMap.Add('I', 1);
                romanMap.Add('V', 5);
                romanMap.Add('X', 10);
                romanMap.Add('L', 50);
                romanMap.Add('C', 100);
                romanMap.Add('D', 500);
                romanMap.Add('M', 1000);

                int result = romanMap[s[0]];
                if (s == null || s.Length == 0)
                {
                    return 0;
                }

                for (int i = s.Length - 1; i > 0; i--)
                {
                    if (romanMap[s[i]] <= romanMap[s[i - 1]])
                    {
                        result -= romanMap[s[i]];
                    }
                    else
                    { 
                        result += romanMap[s[i]];
                    }
                }
                return result;
            }

            static void MainTest2(string[] args)
            {
                Console.WriteLine(RomanToInt("MCMXCIV"));
            }
        }
    }
}
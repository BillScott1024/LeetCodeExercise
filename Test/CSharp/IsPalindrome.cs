using System;
namespace LeetCodeExercise 
{
    class MainProgram
    {
        public class Solution {
        public static bool IsPalindrome(int x) 
        {
                if (x < 0 || x % 10 == 0 && x != 0)
                {
                    return false;
                }

                int revertedNumber = 0;
                while (x > revertedNumber)
                {
                    revertedNumber = revertedNumber * 10 + x % 10;
                    x /= 10;
                }

                return x == revertedNumber || x == revertedNumber / 10;
        }
        
        // static void Main(string[] args)
        // {
        //     Console.WriteLine(IsPalindrome(12323321));
        // }
    }
}     
}
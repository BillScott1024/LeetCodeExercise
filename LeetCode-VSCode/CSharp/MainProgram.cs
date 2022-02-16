using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace LeetCodeExercise
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            List<int> A = new List<int>() { 2, 1, 0 };
            List<int> B = new List<int>();
            List<int> C = new List<int>();
            // A.Add(2);
            // A.Add(1);
            // A.Add(0);
            // StringBuilder stringBuilder = new StringBuilder("123");
            // stringBuilder.Append("456");
            // Console.WriteLine(stringBuilder.ToString());
            HanoiTower.Hanoi(A, B, C);
        }
    }
}

/*
 * @Author: Wang Jun
 * @Date: 2021-12-11 15:45:21
 * @LastEditTime: 2021-12-11 16:02:28
 * @LastEditors: Wang Jun
 * @Description: 汉诺塔问题
 * @FilePath: HanoiTower.cs
 * 
 */
using System;
static class HanoiTower
{
    private static int count = 0;
    /// <summary>
    /// 汉诺塔
    /// </summary>
    /// <param name="n"></param>
    /// <param name="A"> A </param>
    /// <param name="B">B</param>
    /// <param name="C">C</param>
    public static void Hanoi(int n, string A, string B, string C)
    {
        if (n == 1)
        {
            Move(A, C);
            Console.WriteLine("总步骤 {0}", count);
        }
        else
        {
            Hanoi(n - 1, A, C, B);
            Move(A, C);
            Hanoi(n - 1, B, A, C);
        }

    }

    private static void Move(string source, string dest)
    {
        count++;
        Console.WriteLine("Move {0} To {1}", source, dest);
    }
}
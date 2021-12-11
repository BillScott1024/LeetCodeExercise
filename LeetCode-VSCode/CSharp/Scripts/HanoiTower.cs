/*
 * @Author: Wang Jun
 * @Date: 2021-12-11 15:45:21
 * @LastEditTime: 2021-12-11 17:30:14
 * @LastEditors: Akimoto
 * @Description: 汉诺塔问题
 * @FilePath: HanoiTower.cs
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
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
    public static void Hanoi(IList<int> A, IList<int> B, IList<int> C)
    {
        int n = A.Count;

        Move(n, A, B, C);
        for (int i = 0; i < C.Count; i++)
            {
                Console.WriteLine(C[i]);
            }
    }
    //移动
    public static void Move(int n, IList<int> A, IList<int> B, IList<int> C)
    {
        if (n == 1)
        {
            C.Add(Pop(A));
        }
        else
        {
            Move(n - 1, A, C, B);
            C.Add(Pop(A));
            Move(n - 1, B, A, C);
        }
    }
    // 推出最后一个值
    public static int Pop(IList<int> list)
    {
        int lastValue = list[list.Count - 1];
        list.RemoveAt(list.Count - 1);
        return lastValue;
    }
}
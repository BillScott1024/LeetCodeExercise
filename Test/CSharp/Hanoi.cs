using System;
using System.Data;
using System.Collections;
using System.Diagnostics;
using System.Collections.Generic;

public static class Solution
{
    public static void Hanota(IList<int> A, IList<int> B, IList<int> C)
    {
        int n = A.Count;

        Move(n, A, B, C);
    }
    //移动
    public static void Move(int n, IList<int> A, IList<int> B, IList<int> C)
    {
        if (n == 1)
        {
            C.Add(Pop(A));
            Debug.WriteLine(C);
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

    public static void Main(string[] args)
    {
        List<int> A = new List<int>();
        List<int> B = new List<int>();
        List<int> C = new List<int>();
        A.Add(2);
        A.Add(1);
        A.Add(0);


        Debug.WriteLine("Test1");
        Hanota(A, B, C);
        Debug.WriteLine(C.ToString());
        Debug.WriteLine("Test");
    }

}




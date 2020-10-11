using System;

namespace Singleton
{
    class Program
    {
        static void Main(string[] args)
        {
            Singleton single = Singleton.GetInstance();
            single.AddLink("https://classroom.google.com/");
            single.AddLink("https://www.uzhnu.edu.ua/");
            single.AddLink("https://e-learn.uzhnu.edu.ua/");
            single.AddLink("https://www.uzhnu.edu.ua/");
            single.AddLink("https://classroom.google.com/");
            single.AddLink("https://e-learn.uzhnu.edu.ua/");
            single.AddLink("https://classroom.google.com/");
            single.AddLink("https://www.uzhnu.edu.ua/");
            single.AddLink("https://classroom.google.com/");
            single.PrintAllLinks();

            single.ClearAllLinks();
            
            single.AddLink("https://www.uzhnu.edu.ua/");
            single.AddLink("https://www.uzhnu.edu.ua/");
            single.PrintAllLinks();
        }
    }
}

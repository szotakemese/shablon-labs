using System;
using System.Collections.Generic;
namespace Singleton
{
    public class Singleton
    {
        private static Singleton _instance;
        private Dictionary<string,int> LinksList { get; set; }

        public static Singleton GetInstance()
        {
            return _instance ?? (_instance = new Singleton());
        }

        private Singleton()
        {
            LinksList = new Dictionary<string, int>();
        }
        public void AddLink(string link)
        {
            if (LinksList.ContainsKey(link))
                LinksList[link] += 1;
            else
                LinksList.Add(link,1);
        }

        public void PrintAllLinks()
        {
            foreach (var link in LinksList)
                Console.WriteLine(link);
        }
        public void ClearAllLinks()
        {
            LinksList.Clear();
            Console.WriteLine("Links' list cleared!");
        }
    }
}
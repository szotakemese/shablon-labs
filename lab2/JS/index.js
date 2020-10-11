import Singleton from "./Singleton"

const single = Singleton.getInstance();

single.addLink("https://classroom.google.com/");
single.addLink("https://www.uzhnu.edu.ua/");
single.addLink("https://e-learn.uzhnu.edu.ua/");
single.addLink("https://www.uzhnu.edu.ua/");
single.addLink("https://classroom.google.com/");
single.addLink("https://e-learn.uzhnu.edu.ua/");
single.addLink("https://classroom.google.com/");
single.addLink("https://www.uzhnu.edu.ua/");
single.addLink("https://classroom.google.com/");

single.printAllLinks();
single.clearAllLinks();

single.addLink("https://www.uzhnu.edu.ua/");
single.addLink("https://www.uzhnu.edu.ua/");

single.printAllLinks();

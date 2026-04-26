// sampling what a real-world, longform metalang program could look like!

new Program("main").test("")
new Thread("main").program("main").ts("").switch("math").var(5).plus(5)
new Thread("main").program("main").ts("").var(2).plus(76).switch("math")
new Thread("main").program("main").switch("math").var(5).plus(1)

new Assignment("x").equals(5).using("stdin").standard("interval").input("blocks").__bool__(true);
new Assignment("y").equals(82).using("stdin").standard("interval").input("blocks").__bool__(true);

new Program("main").test("")
new Thread("third").program("main").ts("").switch("math").var(5).plus(5)
new Thread("main").program("main").ts("").switch("math").var(5).plus(5)
new Circuit("southbridge").program("main").ts("").switch("math").var(5).plus(5)

new Domain("biome").sample("data")

new Operation("division").Apply("square root")
new State("main").program("main")

new Assignment("x").to(5).using("stdin").standard("interval").input("blocks").__bool__(true);
new Assignment("y").to(82).using("stdin").standard("interval").input("blocks").__bool__(true);
new Assignment("b").to(5).using("stdin").standard("interval").input("blocks").__bool__(true);
new Assignment("z").to(82).using("stdin").standard("interval").input("blocks").__bool__(true);

// and this would be the actual source-code implementation
// but we just like the syntax highlighting :)
class Thread { }
class Program { }
class Domain { }
class Assignment { }
class Operation { }
class State { }
class Circuit { }
class Blueprint { }

const Static = {
    Method(){},
    Method2(){}
}

Static.Method2();
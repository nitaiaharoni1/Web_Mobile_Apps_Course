var q1 = function () {
    var doSomething = function () {
    };
    var desc = "string : a description of what doSomething() is doing and why let changes it";
    return {
        "doSomething": doSomething,
        "desc": desc
    }
};

var q2 = function () {
    var doSomething = function () {
        var i = 5;
        console.log("Start: i = " + i);
        for (var i = 0; i < 100; i++) {
            console.log("Loop: i = " + i);
        }
        console.log("Finish: i = " + i);
    };

    var desc = "doSomething prints the variable i at the begginning, after 100 iterations loop, and at the end. The variable i is declared using \'var\'. It then redeclared in the loop. The function using var only: will print 5 and then 1..99 and then 100. And Using let in the loop decleration: will print 5 and then 1..99 and then 5";
    return {
        "doSomething": doSomething,
        "desc": desc
    }
};

function q3() {
    function ObjectFactory() {
        return {
            doSomething: function () {
                var k = {k: 1};
                var j = Object.create(k);
                var i = Object.create(j);
                var h = Object.create(i);
                var g = Object.create(h);
                var f = Object.create(g);
                var e = Object.create(f);
                var d = Object.create(e);
                var c = Object.create(d);
                var b = Object.create(c);
                var a = Object.create(b);
                return [a, b, c, d, e, f, g, h, i, j, k];
            },

            desc: "doSomething returns an array of 10 empty objects (a to k) that are structured as the following prototype-chain a->b->c->d->e->f->g->i->j->k"
        }
    }
    return new ObjectFactory();
}

function q4() {
    var ObjectConstructor = function () {
        this.doSomething = function () {
            var Calculator = function () {
                var _num = 0;

                this.add = function (num) {
                    _num += num;
                };

                this.sub = function (num) {
                    _num -= num;
                };

                this.getValue = function () {
                    return _num;
                }
            };
            return new Calculator();
        };

        this.desc = "doSomething is a function that creates and return a new Calculator object instance that is initialized with value '0'. The calculator instance has 3 functions: add(num), sub(num) and getVale(). Each one of them changes the calculator instance own value";
    };

    return new ObjectConstructor();
}
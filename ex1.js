var q1 = function () {
    var doSomething = function (op) {
        if (op === "start") {
            startit()
        } else if (op === "stop") {
            stopit();
        } else {
            alertFlippedId(op)
        }
    };

    function alertFlippedId(id) {
        let flippedStr = "";
        for (let i = 0; i < id.length; i++) {
            if (id.charAt(i) === id.charAt(i).toLocaleUpperCase()) {
                flippedStr += id.charAt(i).toLocaleLowerCase();
            } else {
                flippedStr += id.charAt(i).toLocaleUpperCase();
            }
        }
        alert("Flliped picture id is: " + flippedStr)
    }

    function stopit() {
        document.my_age.yrs.value = "";
        document.my_age.dys.value = "";
        document.my_age.hrs.value = "";
        document.my_age.mins.value = "";
        document.my_age.secs.value = "";
    }

    function startit() {
        var today = new Date();
        var curyear = today.getYear();
        if (curyear < 1000)
            curyear += 1900;
        var display_value = " Time:  " + curyear;
        if (today.getMinutes() < 10) {
            display_value += ":0" + today.getMinutes();
        } else {
            display_value += ":" + today.getMinutes();
        }
        if (today.getSeconds() < 10) {
            display_value += ":0" + today.getSeconds();
        } else {
            display_value += ":" + today.getSeconds();
        }
        if
        (today.getHours() >= 12) {
            display_value += " P.M.  "
        } else {
            display_value += " A.M.  "
        }
        display_value += " Date:  " + (today.getMonth() + 1) + "/" + today.getDate() + "/" + curyear;
        window.status = display_value;
        writeyourAge();
    }

    function writeyourAge() {
        TheDate = new Date();
        Month = TheDate.getMonth();
        Day = TheDate.getDate();
        Year = TheDate.getYear();
        if (Year < 1000)
            Year += 1900;
        Hour = TheDate.getHours();
        Minute = TheDate.getMinutes();
        Second = TheDate.getSeconds();
        byear = (document.my_age.birthy.value);
        bm = (document.my_age.birthm.value);
        bd = (document.my_age.birthd.value);
        BDate = Date.UTC(byear, bm, bd, 0, 0, 0);
        if (Year < 2000) {
            CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
        } else {
            CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
        }
        Age = CDate - BDate + (1000 * 60 * 60 * 24 * 30);
        document.my_age.yrs.value = parseInt(((((Age / 1000) / 60) / 60) / 24) / 365.25, 10);
        document.my_age.dys.value = parseInt((((Age / 1000) / 60) / 60) / 24, 10);
        document.my_age.hrs.value = parseInt(((Age / 1000) / 60) / 60, 10);
        document.my_age.mins.value = parseInt((Age / 1000) / 60, 10);
        document.my_age.secs.value = parseInt(Age / 1000, 10);
    }

    var desc = "doSomething() contains 4 different functions: startit - calculates accurate age in years/months/days/hours/minutes/secondes and uses utility function called writeyourAge, stopit - clears the time was calculated, alertFlippedId - gets the id text of the image and alerts the flipped string";

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

    var desc = "doSomething prints the variable i at the beginning, after 100 iterations loop, and at the end. The variable i is declared using \'var\'. It then redeclared in the loop. The function using var only: will print 5 and then 1..99 and then 100. And Using let in the loop decleration: will print 5 and then 1..99 and then 5";
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
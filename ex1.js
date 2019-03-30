var q1 = function(){
    var doSomething = function(){
        var acc = 0
        var show_time = false;
        var timerID = null;
        var blank = ":";

        function stopit(){
            if(show_time)
                clearTimeout(timerID);
            show_time = false;
        }

        function startit(form){
            var today = new Date();
            var curyear = today.getYear()
            if(curyear < 1000)
                curyear += 1900
            var acc1 = acc;
            var display_value = " Time:  " + curyear
            if(today.getMinutes() < 10){
                display_value += ":0" + today.getMinutes();
            } else{
                display_value += ":" + today.getMinutes();
            }
            if(today.getSeconds() < 10){
                display_value += ":0" + today.getSeconds();
            } else{
                display_value += ":" + today.getSeconds();
            }
            if
            (today.getHours() >= 12){
                display_value += " P.M.  "
            } else{
                display_value += " A.M.  "
            }
            display_value += " Date:  " + (today.getMonth() + 1) + "/" + today.getDate() + "/" + curyear;
            window.status = display_value;
            writeyourAge(acc1)
            timerID = setTimeout("startit()", 100);
            show_time = true;
        }

        function writeyourAge(onval){
            if(onval == 0){
                normal()
            } else{
                accurate()
            }
        }

        function normal(){
            TheDate = new Date();
            Month = TheDate.getMonth();
            Day = TheDate.getDate();
            Year = TheDate.getYear();
            if(Year < 1000)
                Year += 1900
            Hour = TheDate.getHours();
            Minute = TheDate.getMinutes();
            Second = TheDate.getSeconds();
            by = (document.my_age.birthy.value);
            bm = (document.my_age.birthm.value);
            bd = (document.my_age.birthd.value);
            bh = (document.my_age.birthh.value);
            bmn = (document.my_age.birthmin.value);
            bs = (document.my_age.births.value);
            BDate = Date.UTC(by, bm, bd, bh, bmn, bs);
            if(Year < 2000){
                CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
            } else{
                CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
            }
            Age = CDate - BDate + (1000 * 60 * 60 * 24 * 30);
            document.my_age.yrs.value = parseInt(((((Age / 1000) / 60) / 60) / 24) / 365.25, 10);
            document.my_age.dys.value = parseInt((((Age / 1000) / 60) / 60) / 24, 10);
            document.my_age.hrs.value = parseInt(((Age / 1000) / 60) / 60, 10);
            document.my_age.mins.value = parseInt((Age / 1000) / 60, 10);
            document.my_age.secs.value = parseInt(Age / 1000, 10);
        }

        function accurate(){
            TheDate = new Date();
            Month = TheDate.getMonth();
            Day = TheDate.getDate();
            Year = TheDate.getYear();
            if(Year < 1000)
                Year += 1900
            Hour = TheDate.getHours();
            Minute = TheDate.getMinutes();
            Second = TheDate.getSeconds();
            by = (document.my_age.birthy.value);
            bm = (document.my_age.birthm.value);
            bd = (document.my_age.birthd.value);
            bh = (document.my_age.birthh.value);
            bmn = (document.my_age.birthmin.value);
            bs = (document.my_age.births.value);
            BDate = Date.UTC(by, bm, bd, bh, bmn, bs);
            if(Year < 2000){
                CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
            } else{
                CDate = Date.UTC(Year, Month, Day, Hour, Minute, Second);
            }
            Age = CDate - BDate + (1000 * 60 * 60 * 24 * 30);
            document.my_age.yrs.value = ((((Age / 1000) / 60) / 60) / 24) / 365.25;
            document.my_age.dys.value = (((Age / 1000) / 60) / 60) / 24;
            document.my_age.hrs.value = ((Age / 1000) / 60) / 60;
            document.my_age.mins.value = (Age / 1000) / 60;
            document.my_age.secs.value = Age / 1000;
        }

    };

    var desc = "string : a description of what doSomething() is doing and why let changes it";
    return {
        "doSomething": doSomething,
        "desc": desc
    }
};

var q2 = function(){
    var doSomething = function(){
        //function: do something that uses only ‘var’s and would behave completely differently if you would use ‘let’
        // instead, but it should return correctly
        var i = 5;
        console.log("Start: i = " + i);
        for(var i = 0; i < 100; i++){
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

function q3(){
    //function: return an array of 10 ( a to k) objects that structured as the following prototype-chain
    // a->b->c->d->e->f->g->i->j->k
    // string: description of what doSomething() is doing
    var ObjectFactory = function(func, desc){
        var obj = {};
        obj.doSomething = function() {
            var array = [];
            this.array.push();
        };
        obj.desc = "";
        return obj;
    };

    var objCreated = new ObjectFactory();
    return objCreated;
}

function q4(){
    //return a calculator object that has 3 methods add(num), sub(num) getValue() and no other exposed keys
    //string: description of what doSomething() is doing
    var ObjectConstructor = function(func, desc){
        this.func = func;
        this.desc = desc;
    };

    var calculator = function(){
        this.num = 0;

        var add = function(num){
            this.num += num;
        }

        var sub = function(num){
            this.num -= num;
        }

        var getValue = function(){
            return this.num;
        }
    }

    var objCreated = new ObjectConstructor(calculator, 'test');
    return objCreated;
}

q1().doSomething();
var q1 = function(){
    var doSomething = function(){
        //function: has at least 100 lines of meaningful code; uses 8 “things” you have learned in the tutorials
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
    };

    var desc = "string: description of what doSomething() is doing and which “things” it utilizes";
    return {
        "doSomething": doSomething,
        "desc": desc
    }
};

function q3(){
    //return a calculator object that has 3 methods add(num), sub(num) getValue() and no other exposed keys
    //string: description of what doSomething() is doing
    var objectFactory = function(func, desc){
        var obj = {};
        obj.doSomething = func;
        obj.desc = desc;
        return obj;
    };

    var objCreated = new objectFactory(alert(), 'test');
    return objCreated;
}

function q4(){
    //function: return an array of 10 ( a to k) objects that structured as the following prototype-chain a->b->c->d->e->f->g->i->j->k
    //string: description of what doSomething() is doing
    var objectConstructor = function(func, desc){
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

    var objCreated = new objectConstructor(calculator, 'test');
    return objCreated;
}

q4();
// ichma ichma-ich funcsiya 

let und = {
    name: "nodirbek",
    A: "home",
    sayHi: function () {
        return function () {
            return 'hello' + this.name
        }
    }
}

console.log(und.sayHi()());
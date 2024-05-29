function publishName() {
    console.log(this.name);
}

const publishSomething = () => {
    console.log(this.name);
};

let myObj = {name:"Allows", abc:"other edge"}


publishName.call(myObj); // hi
// publishName.print() // error, print is not a function

publishSomething.call(myObj); // undefined
//publishSomething.print() // error, print is not a function

// vs
var controller = {
    abc: "edge",
    makeRequest: function(){
        console.log(this.abc);
    }
}
console.log("calling make request")
controller.makeRequest();

let adj = new controller.makeRequest()

controller.makeRequest.call(myObj)

var controller2 = {
    abc: "edge",
    makeRequest: ()=>{
        console.log(this.abc);
    }
}

controller2.makeRequest.call(myObj)

controller.makeRequest();
controller2.makeRequest();

// ---

var Foo = {
    setMe: function(me){
        this.me = me;
    },
    sayMe: function() {
        console.log(`this is: ${this.me}`)
    }
}

var Bar = Object.create(Foo);
Bar.sayMe()
Bar.setMe("alice")
Bar.sayMe()

 

const element = document.getElementById("btn");
element.addEventListener("click", myFunction);

function myFunction() {
    let cval=document.getElementById("cel").value;
     cval=cval*(1.8)+32;
    document.getElementById("fer").value=cval+"";
}


// class 
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    details(){
        return this.name+"!";
    }

}

const p=new Person("Rohit ", 23);

console.log(p.details);
class Student {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    static Welcome() {
        return "Welcome to JavaScript!";
    }

    static Home(studentInstance) {
        return "Home of " + studentInstance.name;
    }

    hi() {
        return "Hi " + this.name + ", your age is " + this.age();
    }
}

class Shoes {
    constructor(brand) {
        this.brand = brand;
    }

    present() {
        return "I own a pair of " + this.brand + " shoes.";
    }
}

class Model extends Shoes {
    constructor(brand, model) {
        super(brand);  
        this.model = model;
    }


    show() {
        return this.present() + " The model is " + this.model + ".";
    }
}

let student1 = new Student("Anisha", 2009);
let student2 = new Student("Maya", 2011);
let myShoes = new Model("Nike", "Airforce");

document.getElementById("studentDetails").innerHTML =
    student1.hi() + "<br>" + student2.hi();

document.getElementById("shoeDetails").innerHTML = myShoes.show();

document.getElementById("Welcome").innerHTML = Student.Welcome();
document.getElementById("Home").innerHTML = Student.Home(student1);
document.getElementById("Friend").innerHTML = student1.hi();
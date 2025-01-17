class shoes {
    constructor(brand) {
        this.shoename = brand;
    }
    present() {
        return 'I own ' + this.shoename; 
    }
}
class model extends shoes {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', they are ' + this.model;
    }
}
let myShoes = new model("Nike", "Airforce");
document.getElementById("details").innerHTML = myShoes.show(); 


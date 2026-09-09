export{}
class Product{
    name: string;
    price: number;
    constructor(name: string,price: number){
        this.name= name;
        this.price= price;
    }
    displayinfo(){
        console.log(`สินค้า : ${this.name}`)
        console.log(`ราคา : ${this.price} บาท`)
    }
}

const _product = new Product('คอมพิวเตอร์',20000);
_product.displayinfo()
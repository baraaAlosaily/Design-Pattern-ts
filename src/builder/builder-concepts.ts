class Product{
    parts:string[]=[];
}

interface IBuilder{
    buildPartA():this;
    buildPartB():this;
    buildPartC():this;
    getProduct():Product;
}

class Builder implements IBuilder{
    product: Product;

    constructor(){
        this.product=new Product();
    }
    buildPartA(): this {
        this.product.parts.push('a');
        return this;
    }
    buildPartB(): this {
        this.product.parts.push('b');
        return this;
    }
    buildPartC(): this {
        this.product.parts.push('c');
        return this;
    }
    getProduct(): Product {
        return this.product
    }
}

class Director{
    static construct(){
        return new Builder()
        .buildPartA()
        .buildPartB()
        .buildPartC()
        .getProduct()
    }
}

const PRODUCT=Director.construct();
console.log(PRODUCT.parts)
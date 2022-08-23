import Chair from "./chair";

export default class BigChair extends Chair{
    constructor(){
        super()
        this.height=100;
        this.width=100;
        this.depth=100;
    }
}
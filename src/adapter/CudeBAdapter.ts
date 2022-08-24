import { ICubeA } from "./CudeA";
import { CubeB } from "./CudeB";

export default class CubeBAdapter implements ICubeA{

    #cubA:CubeB;

    constructor(){
        this.#cubA=new CubeB();
    }
    manufacture(height: number, width: number, depth: number): boolean {
       const success=this.#cubA.create(
        [0 - width / 2, 0 - height / 2, 0 - depth / 2],
        [0 + width / 2, 0 + height / 2, 0 + depth / 2]
       )
       return success;
    }

}
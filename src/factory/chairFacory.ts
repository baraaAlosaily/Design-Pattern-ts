import SmallChair from "./smallChair";
import BigChair from "./bigChair";
import MediumChair from "./meduimChair";
import IChair from './chair';

export default class ChairFacotry{
    static getChair(chair:string):IChair{
        if(chair==='b'){
            return new BigChair();
        }else if(chair==='m'){
            return new MediumChair();
        }else{
            return new SmallChair();
        }
    }
}
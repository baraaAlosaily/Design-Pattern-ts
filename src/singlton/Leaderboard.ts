import IGame from "./igame";
export default class LeaderBoard implements IGame{
 
    static instance:LeaderBoard;
    #table:{[id:number]:string}={}

    constructor(){
        if(LeaderBoard.instance){
            return LeaderBoard.instance
        }
        LeaderBoard.instance=this
    }

    public addWinner(position: number, name: string): void {
        this.#table[position]=name;
    }

    public print(){
        console.log(`----------LeaderBoard----------`)
        for (const key in this.#table) {
            console.log(`|\t${key}\t|\t${this.#table[key]}\t|`)
        }
        console.log();
    }
}
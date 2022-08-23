import Document from "./prototype"

export default interface IPrototype{
    clone(mode:number):Document
}
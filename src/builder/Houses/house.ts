export default class House{
    buildingType:string='';
    doors:number=0;
    wallMaterial:string='';
    windows:number=0
    construction():string{
        return `This is a ${this.wallMaterial} ${this.buildingType} with ${this.doors} door(s) and ${this.windows} window(s).`
    }
}
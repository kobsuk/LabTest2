export{}
abstract class Employee{
    name: string;
    position: string;
    constructor(name: string,position: string){
        this.name= name;
        this.position= position;
    }
    displayinfo(){
        console.log(`ชื่อ : ${this.name}`);
        console.log(`ตำแหน่ง ${this.position}`);
    }
}
class Manager extends Employee{
    department: string;
    constructor(public name: string,public position: string,department: string){
        super(department);
        this.name= name;
        this.position= position;
        this.department= department;
    }
    override displayinfo(): void {
        console.log(`ชื่อ : ${this.name}`);
        console.log(`ตำแหน่ง ${this.position}`);
        console.log(`แผนก ${this.department}`);
    }
}

const _Manager= new Manager("สมชาย","ผู้จัดการ","IT");
_Manager.displayinfo()
class Employees{
    constructor(id,name,slot,salary){
        this.id = id;
        this.name=name;
        this.slot=slot;
        this.salary=salary;
    }
    JobTitle(location){
        
            document.write(
                this.name + 
                " is a " + 
                this.skills + 
                " working in a " + 
                this.slot + 
                " slot. " + 
                "He is working  " + 
                location + 
                " as a " + 
                this.skills + 
                ", having a salary of " + 
                this.salary  + " having Employee id " + this.id
              );
          
        

    }
}   
    class Developer extends Employees{
        constructor(id,name,slot,salary,skills,){
            super(id,name,slot,salary)
            this.skills=skills
        }
    }

    let d = new Developer("2","Ahmed","Evening","100000","Front-end Developer");
    d.JobTitle('remote');
    


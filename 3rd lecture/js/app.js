class Student{
    constructor(id,name,slot,Class){
      this.id = id;
      this.name = name;
      this.slot = slot;
      this.Class = Class;
    }
    learn() {
        document.write(this.name + " having student id " + this.id + 
            " enrolled in slot " + this.slot + " and learning course " + this.Class +"<br>");
    }
    
    exam() {
        document.write(this.name + " having student id " + this.id + 
            " has passed the " + this.Class + " with 95%");
    }
    
 }
 let learning = new Student("1553007","Muhammad Ahmed","9 to 11","DISM")
 learning.learn();

 let test = new Student("1553007","Muhammad Ahmed","9 to 11","CPISM")
 test.exam();
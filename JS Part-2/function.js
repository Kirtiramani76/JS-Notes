// Factory Function 
function Rectangle(len,bre){
    let rectangle = {
        length: len,
        breadth: bre,
        draw() { 
            console.log('creating object');
        }
    };
    return rectangle;
    }
    let rectObj=Rectangle(2,3);
    
    // CamelCase Notation: numberOfStudents
    // Pascal Notation: NumberOfstudents
    
    // Constructor Function
    function Rectangle(){
        this.length=1;
        this.breadth=2;
        this.draw=function(){
            console.log("Drawing rectangle");
        }
    }
    // Object creation using Constructor Function
    let rectObj1=new Rectangle();
    rectObj1.color='voilet';  
    console.log(rectObj1);
    delete rectObj1.color;
    console.log(rectObj1);
    
console.log("Hello World")

//create object - in curly bracket
//obj can be replaced
let obj ={
    "rollno": 1,
    "name":"FOO",
    "FavouriteNumbers":[1,2,3,4,5],
    "address":{
        "Street":"ABC",
        "Building":"Shiv Gange",
        "Landmark":"Gandhiroad"
    }
    //"rollno":3
    //if we write same key again it will show error will override
}

let keyVar = "rollno"


console.log(obj)
//only for name
console.log(obj.name)
//only for rollno
console.log(obj.rollno)

//nested.object 
console.log(obj.address.Street)
console.log(obj.address.Building)
console.log(obj.address.Landmark)

//
console.log(obj.keyVar)
//it will literally search"keyVar" name key in obj
//it will not find and it will print "undefined"

console.log(obj[keyVar])
//it will replace keyVar with its value and search for rollno

//console.log(obj[rollno])- we cannot write this it will not print anything
console.log(obj["rollno"])
//it will print the roll no now as this is strings and we have to write in double quotes if we write this in square bracket instead of .//



const numVal = 5;
console.log(numVal)

//numVal = 7;
//it will show error

const obj2 = {
    "name":"Hello",
    "rollno":5
    
}

console.log(obj2)
obj2.address ="changed"
//this way we can add something which is not there in object
obj2.name ="Priyanka"
console.log(obj2)

//obj2 = {
 //   "test":"hello"
//}
//This reference cannot be changed to point to a different object but
//internal value can ChannelMergerNode(line 58)


console.log(5==5)
console.log('5'==5)
console.log('5'===5)
console.log('5'==='5')

let num1 = 5;
let num2 = 5;

console.log(num1==num2)
console.log(num1===num2)
// true true aaya

let arr1 = [1,2,3,4,5]
let arr2 = [1,2,3,4,5]

console.log(arr1==arr2)
console.log(arr1===arr2)
//false false aaya

let student1= {
    "name":"Test",
    "rollNo":5
}

let student2 = {
    "name":"Test",
    "rollNo":5
}
console.log(student1==student2)
console.log(student1===student2)
//false false aaya

//in non primitive data types you can never vheck equality using == or ===
//since it will check  references

let emp1 = {
    "name":"employee1",
    "id":1
}

//let emp2 = emp1;

let emp2 = {
    ...emp1
    //spread operator, spread all the key value of emp1 into emp2
}
//create new object, spread out all values from emp1 into that object and let emp2
//refer too that new object

console.log(emp1,emp2)

emp2.name = "Updated"
emp2.id = 2
console.log(emp1,emp2)

//shallow copy
let person1 = {
    "name":"priyanka",
    "address":{
        "street":"XYZ ROAD",
        "building":"ABC"
    }

}
let person2 = {
    ...person1
}
console.log(person1,person2)

person2.name = "Updated name"
person2.address.building = "Updated ABC building"
console.log(person1,person2)

let numbers = [1,2,3,4,5]
let sum = 0
for(let i = 0;i<numbers.length;i++){
    sum+numbers[i];

}
let sum2 = 0;
for(let elem of numbers){
    sum2 +=elem
}
console.log(sum,sum2)
let book = {
    "id":1,
    "Title":"pjr"
}

for (let key in book){
    console.log(book[key])
}


for (let x in book){
    console.log(x)
}

//to print indexes



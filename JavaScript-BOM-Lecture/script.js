console.log('Hello')



const obj = {
    Name : "Rajat",
    Age : 26,
    Gender : "Male",
    obj2 : {
        Course : "React",
        Fee : 500,
        Duration : 45
    },
    printDetails : function(){
        console.log(this.Name)
    }
}
// console.log(obj.Age)
obj.printDetails()
console.log(obj.obj2.Course)


// window.alert('Hello this BOM')


let h = window.innerHeight
let w = window.innerWidth
console.log(h,w)

// let a = prompt('Enter input')
// console.log(a)

// if(confirm('This is true')){
//     console.log("True if")
// }else{
//     console.log('False')
// }

// let b = window.prompt


// str = new String()

const date = new Date()
console.log(date)


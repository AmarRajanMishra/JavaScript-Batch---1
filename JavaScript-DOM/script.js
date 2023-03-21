// console.log(document)
// console.log(document.documentElement)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.children[0])
// let a = document.body.children[0]
// console.log(a)
// a.style.backgroundColor = 'red'
// a.style = 'background-color : red'






// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body.childNodes)
// console.log(document.head.childNodes)
// console.log(document.body.children)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)
// DOM (Document Object Model)
// let a = document;
// console.log(a)
// console.log(document.body)

// console.log(document.documentElement);
// console.log(document.body)
// console.log(document.head);
// console.log(head);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)



// Root Node
// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)
// console.log(document.body.childNodes)
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// Siblings
// console.log(document.body.children[1])
// let a = document.body.children[0]
// a.style = "background-color: red"

// console.log(document.body.children[1])
// document.body.children[0]
// console.log(divTag)
// const ulTag = document.body.children[0];
// // const firstLi = ulTag.children[0]
// const secondLi = ulTag.children[1]
// console.log(secondLi.previousElementSibling.textContent);
// console.log(ulTag.style = "font-size: 20px")

// console.log(document.body.children[1])
// let heading1 = document.body.children[1]
// console.log(heading1.nextElementSibling.textContent)




// const tableTag = document.body.children[3];
// console.log(tableTag);
// // var a = [20, 30, 10, 100]
// // console.log(a[2]);
// console.log(tableTag.tBodies[0].rows[0].cells[1].textContent);
// console.log(tableTag.tBodies[0].rows[0].cells[0].style = "background-color:blue;");
// let tableId = document.getElementById('row1')
// tableId.style
// console.log(tableTag.rows)


// Search By ID

// let a = document.getElementById('head')
// // a.innerHTML
// // console.log(a.innerText)
// // a.innerHTML = 'Welcome'
// let root = document.getElementById('root')
// // console.log(root)
// // root.innerHTML = '<h1>JavaScript Class</h1>'
// root.innerHTML = `
// <div class='list'>
// <ul>
// <li>List 1</li>
// <li>List 2</li>
// <li>List 3</li>
// <li>List 4</li>
// <img src='' />
// </ul>
// </div>
// `


// Search By Class Name

// let a = document.getElementsByClassName('container')
// console.log(a)

// Search By Tag Name

// let a = document.getElementsByTagName('h1')
// console.log(a)


// Search By  Name
// let a = document.getElementsByName('')



// Queryselector
// let a = document.querySelector('.container')
// console.log(a)

// Query Selector All
// let a = document.querySelectorAll('.container')
// console.log(a)


// Event Handling

// function changeColor(){
//     // console.log('Hello')
//     let head = document.getElementById('heading')
//     // console.log(head)
//     head.innerHTML = 'Welcome Back To JavaScript'
//     head.style.color = 'red'
// }

// function onMove(){
//     let head = document.getElementById('heading')
    
//     head.style.color = 'green'
// }


// let counter = document.getElementById('counter')
// let count = 0;
// function increFun(){
//     count++;
//     counter.innerHTML = count;
// }
// function decreFun(){
//     if(count > 0){
//         count--;
//         counter.innerHTML = count;
//     }
    
// }

// function reset(){
//     count = 0;
//     counter.innerHTML = count;
// }

// let counter2 = document.getElementById('counter2')
// let count2 = 0;

// function counterValue(btn){
//     if(btn === 'plus'){
//         // console.log('Increment')
//         count2++;
//     }
//     if(btn === 'minus'){
//         // console.log('Dcrement')
//         if(count2 > 0){
//             count2--;
//         }
        
//     }
//     if(btn === 'reset'){
//         // console.log('reset')
//         count2 = 0;
//     } 
//     counter2.innerHTML = count2;
// }


let btn = document.getElementById('btn')
// btn.onclick = hello
// function hello(){
//     alert('Welcome')
// }
// btn.onclick = welcome

// function welcome(){
//     alert('Welcome Back')
// }


// Event Listener

// btn.addEventListener('click', hello)

// function hello(){
//     alert('Hello Fun')
// }
// btn.addEventListener('click', welcome)

// function welcome(){
//     alert('Welcome Fun')
// }

// btn.addEventListener('mouseover', function(){
//     btn.style.backgroundColor = 'Red'
// })
// btn.addEventListener('mouseleave', function(){
//     btn.style.backgroundColor = 'green'
// })

// btn.removeEventListener('click', hello)
// btn.removeEventListener('click', welcome)
// btn.removeEventListener('mouseover', function(){
//     btn.style.backgroundColor = 'Red'
// })

// let img = document.getElementById('img')
// // console.log(img.src)
// img.src = 'Hello'
// console.log(img.src)
















// Search With ID

// let a = document.getElementById('l1')
// console.log(a)
// a.innerHTML = 'Hello'
// a.style.backgroundColor = "red"

// Search With Class Name

// let b = document.getElementsByClassName('container')
// console.log(b)

// Search By Tag Name 

// let c = document.getElementsByTagName('h1')
// console.log(c)

// Search By querySelector

// let d = document.querySelector('#heading')
// console.log(d)

// let a = document.querySelector('.container') // For one Element
// console.log(a)

// let a = document.querySelectorAll('.container')
// console.log(a)

// Search By Id
// let a = document.getElementById('l1')
// // console.log(a)
// a.innerHTML =`<h1>hello</h1>`
// Search By Class Name
//  let a = document.getElementsByClassName('container')

// Search by TagName
// let a = document.getElementsByTagName('h1')

// Search by Name
// let b =document.getElementsByName('')

// let a = document.querySelector('.container')
// console.log(a)
// let a = document.querySelectorAll('.container')
// console.log(a)


// Event Handler
// let counter = document.getElementById('counter')
// let count = 0;

// function incrementFun(){
//     count += 1;  // count = count + 1
//     counter.innerHTML = count

// }
// function decrementFun(){
//     if(count > 0){
//         count -= 1;
//         counter.innerHTML = count
//     } 
// }
// function resetFun(){
//     count = 0;
//     counter.innerHTML = count;
// }


// // 
// let counter = document.getElementById('counter')
// let count = 0;
// function handleBtn(btn){
//     if(btn === 'plus'){
//         count += 1;
//     }else if(btn === 'minus'){
//         if(count > 0){
//             count -= 1;
//         }
//     }else{
//         count = 0;
//     }
//     counter.innerHTML = count;
// }


// function addNum(a, b){
//     console.log(a+b)

// }
// addNum(20, 30)
// addNum(40, 30)
// addNum(60, 10)
// function wishMe(name){
//     console.log("Happy Birthday "+ name)
// }
// wishMe('Kushagra')
// wishMe('Brijesh')
// wishMe('Rajat')





// function addNum(a, b){
//     // var a = 10, b = 20;
//     console.log(a+b)
// }
// addNum(20, 30)

// function myFun(){
//     console.log("Hello")
// }
// function myNewFun(){
//     alert("Welcome")
// }
// btn.onclick = myNewFun

// // Event Listener
// btn.addEventListener('click',btnFun)
// function btnFun(){
//     // console.log('Welcome Back')
//     alert('Welcome Back')
// }
// btn.addEventListener('click', btnFun2)
// function btnFun2(){
//     alert('Again btn is running')
// }
// btn.addEventListener('click', function(){
//     alert("Anonymous Function")
// })

// btn.removeEventListener('click', btnFun)
// btn.removeEventListener('click', function(){
//     alert("Anonymous Function")
// })



















// Search Element By Id
// let head = document.getElementById('heading');
// head.style.backgroundColor = "red"
// head.innerHTML = "This is Dynamic Content"

// Search by Class Name 
// let divTag = document.getElementsByClassName('container')
// divTag.style.backgroundColor = "blue"
// divTag.innerHTML = `<h1>Hello</h1>`

// var a = 10;

// console.log("The value of a ",a)
// var a = 10;
// console.log(`the "value" ''''''''of a is "${a}"`)

// let divTag = document.getElementsByClassName('container')
// console.log(divTag)

// Search Element by Tag Name
// document.getElementsByTagName('h1')

// Search Element By Name
// document.getElementsByName('')

// Search by QuerySelector
// document.querySelector('.container')
// document.querySelector('#container')
// document.querySelectorAll('')







// Searching in Docuement
// Search By ID
// let heading = document.getElementById('heading')

// document.getElementById('head1')
// console.log(heading)
// heading.style.backgroundColor = "red"

// Search by Class name
// let heading = document.getElementsByClassName('heading')
// console.log(heading)

// Search Element By TagName
// let tagName = document.getElementsByTagName('h1')

// Search Element By Name 
// let byName = document.getElementsByName('name')

// Search By QuerySelector
// document.querySelector('ul > li:first-child')
// document.querySelectorAll('')



// const heading = document.getElementById('heading');
// // console.log(heading);
// heading.style.backgroundColor = "red";

// Search By Class Name
// const a = document.getElementsByClassName('output');
// console.log(a);

// Search By Tag Name
// const tagName = document.getElementsByTagName('h1');
// tagName.style.backgroundColor = "red";
// console.log(tagName)


// Search By Name

// const Name = document.getElementsByName('heading1');


// Search By querySelector
// const queryName = document.querySelector('')
// document.querySelectorAll('')
// const head2 = document.getElementById('head2')
// head2.innerHTML = "Welcome To JavaScript DOM Lecture"








// Search By ID
// console.log(ulTag.style.background = "green");
// const ulTags = document.getElementById('ulTag');
// ulTags.style.backgroundColor = "gray";

// Search By Class Name

// const liItems = document.getElementsByClassName('li-items');
// console.log(liItems)
// liItems.style

// const liItems =  document.querySelectorAll('ul > li:last-child');
// console.log(liItems[0].textContent)

// const allDiv = document.getElementsByClassName('div-section');
// console.log(allDiv);

// Attributes


// console.log(root.id)
// console.log(img.src)
// console.log(img.class)
// console.log(img.data)
// console.log(head.getAttribute('class'))
// console.log(head.getAttribute('data'))
// console.log(head.setAttribute('work', 'My Work Attribute'))
// console.log(head.hasAttribute('data'))
// // console.log(head.removeAttribute('work'))
// console.log(head.hasAttribute('work'))
// console.log(head.attributes)



// console.log(img.src)
// console.log(img.id)
// console.log(img.alt)
// console.log(img.class)
// var b = img.getAttribute('class')
// console.log(img.getAttribute('data'))
// heading.setAttribute('work', 'Dom')
// console.log(heading.hasAttribute('work')) //
// heading.removeAttribute('work')
// console.log(heading.hasAttribute('work'))
// console.log(img.attributes)



// console.log(heading.id)
// console.log(head1.id)
// console.log(head1.data)
// console.log(head1.getAttribute('AttributeName'))
// console.log(head1.getAttribute('data'))
// console.log(head1.setAttribute('work', 'This is Work Attribute'))
// console.log(head1.getAttribute('work'))
// console.log(head1.hasAttribute('work'))
// console.log(head1.hasAttribute('work'))
// console.log(head1.removeAttribute('data'))
// console.log(head1.hasAttribute('data'))
// console.log(head1.hasAttribute('work'))
// console.log(head1.attributes)
// console.log(heading.userDefine)
// console.log(heading.data)
// console.log(heading.getAttribute('userDefine'))
// console.log(heading.setAttribute('work', 'this is my work attribute'))
// console.log(heading.getAttribute('work'))
// console.log(heading.hasAttribute('work'))
// console.log(heading.removeAttribute('data'))
// console.log(heading.hasAttribute('data'))
// console.log(heading.attributes)
// console.log(output.work);
// console.log(output.getAttribute('data'))
// console.log(output.setAttribute('order-placed', 'my-attribute'));
// console.log(output.getAttribute('order-placed'))
// console.log(output.hasAttribute('order-placed'))
// console.log(output.removeAttribute('order-placed'))
// console.log(output.hasAttribute('order-placed'))
// console.log(output.attributes);
// console.log(head1.attributes)

// var a = 10;
// console.log(`the value of a is ${a}`)


// const vs let vs var

// var a = 10;
// var a = 20;

// console.log(a)
// let a = 10;
// a = 20;

// console.log(a)

// const a = 10;
// a = 20;
// console.log(a)




// var a = 20

// Creating and Removing the node Element
// const newElement = document.createElement('div')
// newElement.innerHTML = `<table>
// <tr>
//     <td>${a}</td>
//     <td>2</td>
//     <td>3</td>
// </tr>
// <tr>
//     <td>4</td>
//     <td>5</td>
//     <td>6</td>
// </tr>
// <tr>
//     <td>7</td>
//     <td>8</td>
//     <td>9</td>
// </tr>
// </table>

// `
// container.append(newElement)
// console.log(newElement)
// let textElement = document.createTextNode('this is dynamic text')
// newElement.appendChild(textElement)
// container.append(newElement)
// container.prepend(newElement)
// container.before(newElement)
// container.after(newElement)
// newElement.remove()
// container.remove()

// const newElement = document.createElement('h1');
// let addText = document.createTextNode('This is Dynamic Text') 
// newElement.appendChild(addText)
// newElement.innerHTML = "Another way add Text in Element"
// addDiv.append(newElement)
// const newText = document.createTextNode('Welcome to JavaScript Lecture')
// newElement.appendChild(newText)
// container.append(newElement);
// newElement.textContent = "Another Way of Adding Text";
// Add HTML Code
// newElement.innerHTML = "Welcome to My World"
//    newElement.innerHTML = `<ul id="ulTag">
//     <li class="li-items">First Element</li>
//     <li class="li-items">Second Element</li>
//     <li class="li-items">Third Element</li>
//     </ul>`
// container.append(newElement)
// container.prepend(newElement)
// container.before(newElement)
// container.after(newElement)
// container2.replaceWith(newElement)
// newElement.remove()
// container.remove();

// Event
// function hello(){
//     alert('This is Another way of Event Handling Function')
// }

// btn.onclick = hello

// btn.onclick = function(){
//     alert('This is Anonymous Function')
// }

// Event Listener
// btn.addEventListener('click', wishMe)
// function wishMe(){
//     alert('Good Evening')
// }
// btn.addEventListener('click', hi)
// function hi(){
//     alert('Hello')
// }
// btn.addEventListener('click', function(){
//     alert("Anonymous Function")
// })

// btn.removeEventListener('click', hi)

// btn.removeEventListener('click',function(){
//     alert("Anonymous Function")
// })









// function handleBtn(){
//     // console.log("this is function By Click Event")
//     alert("Function By Reference")
//     // document.write("This is print by click event")
    
// }
// clickBtn.onclick = handleBtn // Function Reference

// clickBtn.onclick = function(){
//     alert('This is anonymous function')
// }


// clickBtn.onclick = function(){
//     alert('This is Alert')
// }

// clickBtn.onClick = function(){
//     alert("Hello Good Evening")
// }


// function clickHere(){
//     alert('Thank You ')
// }
// clickBtn.onclick = clickHere

// Event Listner



// function callMe(e){
//     console.log(this)
//     console.log(e.type)
//     console.log(e.currentTarget)
//     console.log(e.clientY)
//     console.log(e.clientX)
//     alert('Good Evening')
// }
// clickBtn.onclick = callMe
// function callMe(e){
//     console.log('clicked..')
//     console.log(e.type)
//     console.log(e.currentTarget)
//     console.log(e.clientX)
//     console.log(e.clientY)
// }

// btn.addEventListener('click', callMe)

// clickBtn.addEventListener('click', callMe)

// clickBtn.addEventListener('click', function(){
//     alert('This Is Second Alert')
// })
// clickBtn.removeEventListener('click', callMe)
// clickBtn.removeEventListener('click', function(){
//     alert('This Is Second Alert')
// })
// clickBtn.addEventListener('click', function(){
//     alert("This is Anonymous Function")
// } )
// clickBtn.removeEventListener('click', callMe)
// clickBtn.removeEventListener('click', function(){
//     alert("This is Anonymous Function")
// })





// addEventListner




// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))










// var num = 5;
// var fact = 1;
// for(var i = num; i >= 1; i--){
//     fact = fact*i;
// }
// console.log(fact);


// document.getElementById('heading').style.backgroundColor = "red"

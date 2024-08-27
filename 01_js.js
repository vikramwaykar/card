// Premitive - Number, String, Boolean, undefined , Null, BigInt ,

// Reference - array , object, function

// var let const 


// var a=5;
// var b="DreamsGuider";
// var c=true;
// var d;


// let a=1;
// let b="Hello World";
// let c=false;
// let d=null;


// es5 => Javascript Version => var  

// var => Global Scope variable declaration
// let => Local Scope variable declaration



// for(let i=0; i<5; i++)
// {
//     console.log(i);
// }


// const pi=3.14159265;


// let num=5;
// let num2=num;
// console.log(num2);


// var a=[1,2,3,4,5];

// var b={
//     name: "John",
//     age: 30,
//     city: "New York"
// }

// var addition =function add(){

// }



// operators

//Logical operator => && || ! 


// && => true && true => true
// && => True && false => False


// || => False || True => True
// || => true || False => True

// ! => !false => True
// ! => !true => False


// if
// if else
// if else if

// if(username== "vikram"){
//     console.log("Condition is true");
// }


// if(username== "vikram"){
//     console.log("Condition is true");
// }
// else if(username=="waykar"){
//     console.log("Condition is false");
// }

// loop

// for
// while
// switch
// do while

// for(var i = 0; i <5;i++){
//     console.log(i);
// }

// var i = 0;

// while(i<5){
//     console.log(i);
//     i++;
// }


// do{


//     console.log(i);

// }while(i>5);


// switch(input){

//     case '+': console.log(a+b); break;
//     case '-': console.log(a-b); break;
//     case 2:console.log("Two"); break;
// }



// function calc() {


//     var a = document.getElementById("a").value;
//     var b = document.getElementById("b").value;
//     

//    a = parseInt(a);
//     b = parseInt(b);

//     var input = document.getElementById("add").innerText;
//     console.log(input);

//     var input2= document.getElementById("sub").innerText;
//     console.log(input2);

//     let array =[input, input2]

//     array.forEach(element => {
//          switch (element) {

//        case 'Add': console.log(a+b); break;
//        case 'Sub' : console.log(a-b); break;

//     }


//     });






// }


function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;


    //    input box madhun ji kahi value yete ti string asnar ahe
    //   ji input box madhunn value aleli ahe tila convert kartoy number madhe


    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var result = num1 + num2;


    var ans = document.getElementById("Ans");
    ans.textContent = "Hello ";
    console.log(result);


}
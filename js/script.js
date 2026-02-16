// // document.write('My name is Ariba,Sheikh Ariba Noor')
// // alert('hello world')
// console.log("My name is Ariba,Sheikh Ariba Noor")

// let mern_stack=10
// let laptop=1
// let attendance=80

// if(mern_stack>5){
    
//     if(laptop==1){  

//         if(attendance>80) {
//             console.log("He can avail free mern_stack")
//         }else{
//             console.log("He can-not avail free mern_stack due to low attendance")
//         }
        
//     }else{
//         console.log("He can-not avail free mern_stack")
//     }

// }else{
//     console.log("He cannot avail free mernstack course")
// }

// var username="Ariba"
// var password="12345"

// var input_username="Ariba"
// var input_password="12345"
// if(username==input_username){
//     if(password==input_password){
//         console.log("Login Successful")
//     }else{
//         console.log("Incorrect Password")
//     }
// }else{
//     console.log("Incorrect Username")

// }
// let age=18
// if(age>=21){
//     console.log("You are eligible to vote")
// }else{
//     console.log("You are not eligible to vote")
// }



// let m=Number(prompt("Enter first number"))
// let n=Number(prompt("Enter last number"))
// let reject=Number(prompt("Enter rejected number"))



// for (let i = m; i <= n; i++) {
// if (i==reject) {
//     console.log("This section is rejected");
// } else {
//         console.log(i+"'s","multiplication start");
//     for (let j = 1; j<=10;j++) {

//         if (i*j==32) {
//             console.log("This section is rejected")
            
//         } else {
            
//             console.log(i+"X"+j+"="+i*j );
        
//         }
  
//     } if (i<n) {
//     console.log(i+"'s"+"multiplication end");
//     } else {
//       console.log("All End");
  
//     }  
// }  
// }
// function start(n) {
//     console.log(n);
      
// }
// start(30)
// function login(name,password) {
//     return{name: name,password :password};
    
    
// }
// let result=login("Ariba",12345)
// let k={
//     name:"Ariba",
//     password:12345}
// if(k.name==result.name && k.password==result.password){
//     console.log("Log in Successful")
    
// } else {
//     console.log( "Wrong credentials");
    
// }

let height=Number(prompt("Enter Your Height in meter"))
let weight=Number(prompt("Enter your weight in kg"))
let c=25

   if((weight/(height^2))<c){

    console.log("BMI healthy");
    
   }else {
       console.log("Fitness Needed");
       
   }

let ch=prompt("Enter a letter")
conch=ch.toLowerCase()

if(conch=="a"||conch=="e"||conch=="i"||conch=="o"||conch=="u"){
    console.log("vowel");   
}else{
    console.log("Consonant");    
}
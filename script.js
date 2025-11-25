let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");

let name = document.getElementById("name");
let email = document.getElementById("email");
let area = document.getElementById("area");

let s1 = document.getElementById("s1");
let s2 = document.getElementById("s2");
let s3 = document.getElementById("s3");
let s4 = document.getElementById("s4");
let s5 = document.getElementById("s5");

let btnl = document.getElementById("btnl");
let num = document.getElementById("num");
let nume = document.getElementById("nume");
let name1 = document.getElementById("name1");

function feedBack() {
     if(name.value === "" && email.value === "" && area.value === ""){
        alert("Please fill out all text area.");
    }
    else if(name.value === ""){
        alert("Please enter your proper name.");
    }
    else if(email.value === ""){
        alert("Enter a valid email");
    }
    else if(area.value === ""){
        alert("Please provide us a feedback.");
    }
    else if(name.value !== "" && email.value !== "" && area.value !== ""){
        alert("Thank you for your feedback. We will look back into problems.");
    }
}


let num1 = 0; 
let num2 = 0;
let num3 = 0;
let num4 = 0;

one.innerText = num1;
two.innerText = num2;
three.innerText = num3;
four.innerText = num4;

function inc1(){
    num1++;
    one.innerText = num1;
}

function inc2(){
    num2++;
    two.innerText = num2;
}
function inc3(){
    num3++;
    three.innerText = num3;
}
function inc4(){
    num4++;
    four.innerText = num4;
}
function dec1(){
    if(num1 > 0){
        num1--;
    }
    one.innerText = num1;
}
function dec2(){
    if(num2 > 0){
        num2--;
    }
    two.innerText = num2;
}
function dec3(){
    if(num3 > 0){
        num3--;
    }
    three.innerText = num3;
}
function dec4(){
    if(num4 > 0){
        num4--;
    }
    four.innerText = num4;
}

function delivery(){
    if(name1.value === "" && num.value === "" && nume.value === ""){
        alert("Please provide information");
    }
    else if(name1.value !== "" && num.value !== "" && nume.value !== ""){
        alert("Warm sips coming your way! Thank you for choosing us!")
    }
    else if(name1.value === ""){
        alert("Please provide your name");
    }
    else if(num.value === ""){
        alert("Please provide your card number");
    }
    else if(nume.value === ""){
        alert("Please provide expiry card number");
    }
}
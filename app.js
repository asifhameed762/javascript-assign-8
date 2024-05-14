// Q1
let multiArr = [];

for(let i = 0; i < 3;  i++){
    multiArr.push([]);
}

// Q2
let num = [];
num.push(["0  1  2  3"]);
num.push(["1  0  1  2"]);
num.push(["2  1  0  1"]);
document.write("Q2. <br>");
for(let i = 0; i < 3; i++){
    document.write(num[i] + "</br>");
}

// Q3
document.write("<br>Q3. Numeric counting <br>");

for(let i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

// Q4
let tableNum = +prompt("Enter a number to show table" , 2);
let lenghtNum = +prompt("Enter Lenght to multiplication table" ,15 );
document.write(`<br>Q4 . Multiplication table of  ${tableNum} || Lenght ${lenghtNum} <br>`);
for(let i = 1; i <= lenghtNum; i++){
    document.write(`${tableNum} x ${i} = ${i*tableNum}<br> `);
}

// Q5
let fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
document.write("<br>Q5 : Fruits <br>");

for(let i = 0; i < fruits.length; i++){
    document.write(`Elements at index ${[i]} is ${fruits[i]} <br>`);
}

// Q6
document.write("Q6.<br>A. Counting <br>");
for (let i = 1; i <= 15; i++){
    document.write(` ${[i]}`);
}

document.write("<br>B. Reverse Counting <br>");
for (let i = 10; i >= 1; i--){
    document.write(` ${[i]}`);
}

document.write("<br>C. Even Counting <br>");
for (let i = 0; i <=20; i++){
    if(i % 2 === 0){
    document.write(` ${[i]}`);
    }
}

document.write("<br>D. Odd Counting <br>");
for (let i = 1; i < 20; i++){
    if(i % 2 === 1){
    document.write(` ${[i]}`);
    }
}

document.write("<br>E. K series <br>");
for (let i = 1; i <=20; i++){
    if(i % 2 === 0){
    document.write(` ${[i + "k"]} `);
    }
}


// Q7
let bakery = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
let search = prompt("Welcome to Sweets Bakery.What do you want to order sir/maam?");
let found = false;
for(let i = 0; i < bakery.length; i++){
  if(search === bakery[i]){
        found = true;
        document.write(`<br> Q7.Bakery <br> ${bakery[i]} is available at index ${[i]} in our bakery`);
    }
}   
if(found === false){
    document.write(`<br> Q7.Bakery <br> ${search} is not available in our bakery`);
}
// Q8
let numb = [24 , 53 , 78 , 91 ,12];
let larNum = numb[0];
for (i = 0; i < numb.length; i++){
    if(numb[i] > larNum){
        larNum = numb[i];
    }
}
document.write("<br><br> Q8. Largest Number <br> Array Items " + numb)
document.write("<br> The Largest number is " + larNum)

// Q9
let smaNum = numb[0];
for (i = 0; i < numb.length; i++){
    if(numb[i] < smaNum){
        smaNum = numb[i];
    }
}
document.write("<br><br> Q9. Smallest Number <br> Array Items " + numb)
document.write("<br> The smallest number is " + smaNum + "<br>") 

// Q10
document.write("Q10.<br> ");
for (let i = 1; i <= 100; i++){
    if(i % 5 === 0){
        document.write(" " + [i]);
    }

}







// 1st Task
// var number = prompt("Enter a Number (floating point) : ");
// number = Number(number);
// if(number > 0)
// {
//     document.write("Number : " + number + "<br>");
//     document.write("Round off value : " + Math.round(number) + "<br>");
//     document.write("Floor value : " + Math.floor(number) + "<br>");
//     document.write("Ceil value : " + Math.ceil(number) + "<br>");
// }
// else {
//     alert("Number should be non-negative.");
// }


// 2nd Task
// var number = prompt("Enter a Number (floating point) : ");
// number = Number(number);
// if(number <= 0)
// {
//     document.write("Number : " + number + "<br>");
//     document.write("Round off value : " + Math.round(number) + "<br>");
//     document.write("Floor value : " + Math.floor(number) + "<br>");
//     document.write("Ceil value : " + Math.ceil(number) + "<br>");
// }
// else {
//     alert("Number is non-negative.");
// }


// 3rd Task
// var number = prompt("Enter a Number (positive or negative) : ");

// document.write("The absolute value of : " + Math.abs(number) + "<br>");


// 4th Task
// document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");

// document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");


// 5th Task
var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin + "<br>");
    document.write("random coin value : Heads" + "<br>");
}
else if(coin == 1)
{
    document.write(coin + "<br>");
    document.write("random coin value : Tails" + "<br>");
}

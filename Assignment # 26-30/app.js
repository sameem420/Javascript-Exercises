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
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number <= 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number is non-negative.");
}


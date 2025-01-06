var bioNumber = +prompt("Enter your Biology Number")
var mathNumber = +prompt("Enter your Math Number")
var phyNumber = +prompt("Enter your Physics Number")

var obtainedNum = bioNumber + mathNumber + phyNumber;
var stuPercantage = obtainedNum / 300 * 100;
var round = Math.round (stuPercantage);
document.write("Obtained Number: " + obtainedNum + "<br>");
document.write("Your Percantage: " + round + "%" + "<br>")

if ( stuPercantage >= 80){
    document.write("Your Grade: A+" + "<br>")
    document.write("Remarks: Excellent")
}else if  ( stuPercantage >= 70 || stuPercantage > 80){
    document.write("Your Grade: A" + "<br>")
    document.write("Remarks: Good")
}else if (stuPercantage >= 60 || stuPercantage > 70){
    document.write("Your Grade: B" + "<br>")
    document.write("Remarks: You need to improve")
}else (document.write("Fail"))


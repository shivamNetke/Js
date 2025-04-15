// write a program to change the url to google.com (redirection) if user enters a number greater than 4

let number = prompt("enter your number")
number = Number.parseInt(number)
if(number>4){
    location.href = "https://google.com"
}
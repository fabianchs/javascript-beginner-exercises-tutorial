var total = prompt('How many km are left to go?');

// Your code below:
total = parseInt(total);

if (total > 100) {
    console.log("We still have a bit of driving left to go");
}
else if (total <= 100 && total > 50) {
    console.log("We'll be there in 5 minutes");
}
else if(total<50){
    console.log("I'm parking. I'll se you right now");
}
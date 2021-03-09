/* Basic Exercise 1
Create a form with input fields for your firstname, lastname and age.  Extract the values from each input field and display them all in a separate div.
If the length of your name is larger than 5 characters, change the text colour to green. Otherwise, change the text-colour to red.  */


function displayExercise() {
    let myName = document.getElementById("firstName").value;
    let myLastName = document.getElementById("lastName").value;
    let myAge = document.getElementById("age").value;
    console.log(myName);

    document.getElementById("result").innerHTML = `My name is: ${myName} ${myLastName} and I am ${myAge} years old.`;
}

function nameColor(){
    var nameLength = firstName.value + lastName.value;
    var nlength = nameLength.length;
    if(nlength > 5) {
        document.getElementById("result").style.color="green";
    } else {
        document.getElementById("result").style.color="red";
    }
}

function profColor() {
    let profession1 = one.value;
    let profession2 = two.value;
    let selector = select.value;

    if(selector == profession1){
        document.getElementById("result").style.backgroundColor="blue";
    } else {
        document.getElementById("result").style.backgroundColor="pink";
    }
}


document.getElementById("btn").addEventListener("click",profColor);
document.getElementById("btn").addEventListener("click",nameColor);
document.getElementById("btn").addEventListener("click",displayExercise);



/* Extend the previous form to have a select option, where your profession can be selected. If you are working in IT, the background of the div displaying the information from the form will turn purple, if you work in hospitality, your div will turn yellow, etc. 

(Hint: extracting the selection value will work similarly to extracting the input values) */
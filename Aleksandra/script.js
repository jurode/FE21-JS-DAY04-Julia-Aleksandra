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



document.getElementById("btn").addEventListener("click",displayExercise);


/* Extend the previous form to have a select option, where your profession can be selected. If you are working in IT, the background of the div displaying the information from the form will turn purple, if you work in hospitality, your div will turn yellow, etc. 

(Hint: extracting the selection value will work similarly to extracting the input values) */
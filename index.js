// TODO: this file! :)
/* Goals 
when user submit their number, their number is added to the number bank
user can access a button to submit
The number is sorted into one of two categories: odd or even 
*/

//check to see if we are connected to the console
// console.log("testing");

// create two arrays one for odd numbers and one for even numbers

let oddNumbers = [];
let evenNumbers = [];


// target all the divs in our html
const form = document.querySelector("form");
const input = document.querySelector("input");
const numberBank = document.getElementById("numberBank");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const sortedNumbers = document.getElementById("sortedNumbers");
const odds = document.getElementById("odds");
const evens = document.getElementById("evens");


// set up an eventListener whenever an number is added
document.addEventListener("DOMContentLoaded", function () {
     // create a function to update the display
    function updateDisplays() {
      numberBank.querySelector("output").textContent = "Numbers: " + [...oddNumbers, ...evenNumbers].join(", ");
  
     // add the input to the odd box if the number is odd
      odds.querySelector("output").textContent = "Odds: " + oddNumbers.join(", ");
  
        // add the input to the even box if the number is even
      evens.querySelector("output").textContent = "Evens: " + evenNumbers.join(", ");
    }
  
        // create a render function to call the updateDisplay function 
    function render() {
      updateDisplays();
    }
  
     // create an eventListener for when user click the submit button and prevent the screen from refreshing
    form.addEventListener("click", function (e) {
      e.preventDefault();
  

        // create a loop to check if the number is odd or even then render it onto the display
      const number = parseInt(input.value);
  
      if (!isNaN(number)) {
        if (number % 2 === 0) {
          evenNumbers.push(number);
        } else {
          oddNumbers.push(number);
        }
  
        
        render();

        // clear out the input box
        input.value = "";
      }
    });
  
    // create an eventListener when the user click on the sortone button
    sortOne.addEventListener("click", function () {
      oddNumbers.sort((a, b) => a - b);
      evenNumbers.sort((a, b) => a - b);
  
      // Call the render function to update the displays.
      render();
    });
  
    // create an eventListener for when the user click on the sortAll button 
    sortAll.addEventListener("click", function () {
      oddNumbers.sort((a, b) => a - b);
      evenNumbers.sort((a, b) => a - b);
  
      render();
    });
})
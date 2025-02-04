const cont = document.querySelector("#container");  // Setting container to cont

// Generate a random color
function randomColor() {
    let color = []; // Store the random color
    for (let i = 0; i < 3; i++) { // Goes through the 3 RGB values
      color.push(Math.floor(Math.random() * 256)); // Random between 0 and 256 colors
    }
    return 'rgb(' + color.join(', ') + ')'; // Returns a random value formatted in the CSS RGB format
} 

function base(size) { // Function for the base size of the sketch pad
    
    for (i = 0; i < size; i++) {
        const row = document.createElement("div"); // Creating a div for rows

        row.addEventListener("mouseover", (event) => { // Event listener to change colors when hovered
            event.target.style.backgroundColor = randomColor(); // Setting it to the randomColor() function
        });

        for(j = 0; j < size; j++) { // Goes through the columns
            const col = document.createElement("div");   // Creates div for columns
            // Setting styling
            col.style.width = "30px";  
            col.style.height = "30px";
            col.style.backgroundColor = "#fffff";
            col.style.border = "0.01px solid grey";
            row.appendChild(col);
        }
        cont.appendChild(row);
    }
}
base(16); // Calling function with set size

const btn = document.querySelector("#new"); // Creating a new button
btn.addEventListener("click", (event) => { // Check for click
    let person = prompt("enter new size max 100"); // Ask user to enter a value
    // Clears area
    cont.innerHTML = "";
    
    // Go through i to user input
    for (i = 0; i < person; i++) {
        const nrow = document.createElement("div"); // Create new div for new row
        nrow.addEventListener("mouseover", (event) => { // Event listener for new row for the same hover effect
            event.target.style.backgroundColor = randomColor();
        });
        
        const nsp = 480 / person; // Divide the user input by the set size of the divs
        for(j = 0; j < person; j++) { // Goes through the columns
            const ncol = document.createElement("div"); // New div for the new columns
            ncol.style.width =  nsp + "px";   
            ncol.style.height =  nsp + "px";
            ncol.style.backgroundColor = "#fffff";
            ncol.style.border = "0.01px solid grey";
            nrow.appendChild(ncol);
        }
        cont.appendChild(nrow);  
    }

    // Check user input is valid
    if(person > 100){
        prompt("to big try again");
    } else if (person == null){ // Not valid, display the default 16x16 pad
        alert("enter new size max 100");
        base(16);
    }
});

// Reset button which overrides and displays the function again
const btn2 = document.querySelector("#reset");
btn2.addEventListener("click", (event) => {
    cont.innerHTML = "";
    base(16);
});

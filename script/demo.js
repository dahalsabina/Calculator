


// Retrieve elements with class name "container"
const classElements = document.getElementsByClassName("container");

// Check if the collection is not empty
if (classElements.length > 0) {
    console.log(classElements[0].textContent); // Output the text content of the first element
} else {
    console.log("No elements found with class name 'container'.");
}



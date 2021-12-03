const assert = require('assert');

function flatten_array(input) {

    /* Input check for array element */
    if(!Array.isArray(input)) {
        return "This function is for flattening array not any other datatype";
    }

    const flatArray = [];
    let error = false;

    // Recursive function to get values from the nested array:
    // If the current element is an array then it calls the function over each element of the array
    //      if not then it adds the element to the flatArray.
    function innerArrayflattening(currentItem) {
        if(currentItem !== undefined) {
            if(Array.isArray(currentItem)) {
                currentItem.forEach(innerArrayflattening);
            } else {
                flatArray.push(currentItem);
            }
        } else {
            error = true;
        }
    }

    innerArrayflattening(input);

    if(error === true) {
        return 'Incorrect data entered';
    } else {
        return flatArray;
    }
}
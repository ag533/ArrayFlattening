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

assert.deepStrictEqual(flatten_array([1,[2,[3]],4]),[1,2,3,4],"Test1 Fails");
assert.deepStrictEqual(flatten_array(new Array([1])),[1],"Test1 Fails");
assert.deepStrictEqual(flatten_array([]),[], "Test2 Fails");
assert.deepStrictEqual(flatten_array([1,[]]),[1], "Test3 Fails");
assert.deepStrictEqual(flatten_array([1,2,[3,[[[4,[5]]]]]]),[1,2,3,4,5], "Test4 Fails");
assert.deepStrictEqual(flatten_array(213),'This function is for flattening array not any other datatype', "Test5 Fails");
assert.deepStrictEqual(flatten_array({}),'This function is for flattening array not any other datatype', "Test6 Fails");
assert.deepStrictEqual(flatten_array({123:123}),'This function is for flattening array not any other datatype', "Test7 Fails");
assert.deepStrictEqual(flatten_array([123[123,['sad'['asd']]]]),'Incorrect data entered', "Test8 Fails");
assert.deepStrictEqual(flatten_array(['ada',32,4,2,['asd',3]]),['ada',32,4,2,'asd',3], "Test9 Fails");
assert.deepStrictEqual(flatten_array('ada'),'This function is for flattening array not any other datatype', "Test10 Fails");
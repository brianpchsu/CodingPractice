/* given a list/array of integers find the position of the largest int.
// input: array
// output: index of the largest int
// Time O()?
// Space ?
// copy and sort the array, get the largest int by the end of the position
// get the index of the largest int in the original array
*/

// Solution 1: using sort
var getLargest = function(input){
    var copy = input.slice();
    copy = copy.sort(function(a, b){
        return b-a;

    });
    var largest = copy[0];
    return input.indexOf(largest);
};

var getSecondLargest = function(input){
    var copy = input.slice();
    copy = copy.sort(function(a, b){
        return b-a;
    });
    var secondLargest = copy[1];
    return input.indexOf(secondLargest);
};



// find largest int not using sort
var getLargest = function(input){
    var largest = -Infinity;
    var largestIndex = -1;
    for(var i = 0; i < input.length; i++){
        if ( input[i] > largest) {
            largest = input[i];
            largestIndex = i;
        }
    }
    return largestIndex;
};


// recursive way
// ex [1,2,3]

var getLargest = function(input, largest, largestIndex, start){
    largest = largest || -Infinity;
    largestIndex = largestIndex || -1;
    start = start || 0;

    // base case
    // input is empty

    if ( input.length === 0) {
        return largestIndex;
    }

    var current = input[0];
    if( current > largest) {
        largest = current;    // 1
        largestIndex = start;        // 0
    }

    var remaining = input.slice(1);    // [2,3]
    return getLargest(remaining, largest, largestIndex, start+1);
};

console.log(getLargest([2,1,3,0]));
console.log(getSecondLargest([2,1,3,0]));

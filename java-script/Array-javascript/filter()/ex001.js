function array(value) {
    return value >= 10;
} 

var filtered = [9, 2,  11, 14, 20, 5, 100, 150].filter(array);

console.log(filtered)
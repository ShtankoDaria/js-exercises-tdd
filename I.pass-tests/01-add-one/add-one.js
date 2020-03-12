module.exports = function(numbers) {
    let newN = numbers.slice();
    for(i=0; i<numbers.length; i ++) {
 newN[i] += 1;
    }
return newN;
};

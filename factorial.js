function factorial(num){
    let result=1;
    if(1 > num || num > 10){
        return "Please enter numbers between 1 to 10";
    }
    while(num>0){
        result *= num;
        num--;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(4));

// Time Complexity: O(n)
// Space Complexity: O(1)
function sumOfRealNumbers(a,b){
    let result = 0;
    let min_number;
    let max_number;
    if(1 > a || b > 100000){
        return "Please enter numbers between 1 to 100000";
    }
    if(a<b){
        min_number = a;
        max_number = b;
    } else {
        min_number = b;
        max_number = a;
    }
    let temp = min_number;
    while(temp<=max_number){
        result += temp;
        temp++;
    }
    return result;
}
console.log(sumOfRealNumbers(1,4));
console.log(sumOfRealNumbers(10,6));

// Time Complexity: O(n)
// Space Complexity: O(1)
// Anonymous function:


// 1. Print odd numbers in an array:
/*  var arr = [1,2,3,4,5,6,7,8,9,10];
function oddNo(){
    // For loop condition 
    for (i=0; i<arr.length; i++){
        if (i % 2 === 0){
            console.log(arr[i]);
        }
    }
}
oddNo()  */



// 2. Convert all the strings to title caps in a string array
/*   function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  console.log(toTitleCase("hai i am manikandan"));   */




// 3. Sum of all numbers in an array:
/*  var array = [150, 258, 346, 448, 548];
   var sum = array.reduce(function(a, b){
       return a + b;
   }, 0);
   console.log(sum);  */




// 4. Return all the prime numbers in an array 
/*  var numbers = [1,4,6,7,9,5,11,74,987,52];
var prime = [];
function primeNnum(item){
    var get =  item / 2;
    for (var j=2; j<=get; j++){
        if ((item % j) == 0){
            return false;
        }
    }
    return true;
}
for (var i=0; i<numbers.length; i++){
    if (primeNnum(numbers[i])){
        prime.push(numbers[i]);
    }
}
console.log(prime);  */






// 5. Remove duplicates from an array
/* let arr = ['10', '20', '20', '30', '40'];
    function removeDuplicates(data){
        return [...new Set(arr)];    
  }
    console.log(removeDuplicates(arr));  */




// 6. Rotate an array by k times
/*  const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 5;
function arrRotation(arr, numberOfShifts){
    for (let i=0; i<numberOfShifts; i++){
        arr.unshift(arr.pop());
        console.log(`step ${i + 1}:`, arr);
    }
}
console.log("final output:", arrRotation(nums, k));  */






// 7. Return median of two sorted arrays of same size
/*  const nums1 = [1,3,4,5,6]; // i1
const nums2 = [2]; // i2
function findMedian(nums1 = [],nums2 = []){
let i1 = 0;
let i2 = 0;
const len1 = nums1.length;
const len2 = nums2.length;
const len  = len1 + len2;
if (len === 0){
    return nll
}
const merged = [];
while (i1<len1 && i2<len2){
    if (nums1[i1]<= nums2[i2]){
        merged.push(nums1[i1++]);
    } else { 
        merged.push(nums1[i2++]);
    }
}
while (i1<len1){
    merged.push(nums1[i1++]);
}
while (i2<len2){
    merged.push(nums2[i2++]);
}
const isOdd = len%2;
if (isOdd){
    return merged[(len -1)/2]
} else {
    return (merged[len/2] + merged[len/2 -1])/2     
}
}
console.log(findMedian(nums1,nums2))  */






//  8. Return all the palindromes in an array

/*  var str = ["madam", "hello", "did", "dad", "121", "12364"];

    (function(){
        var res =[];
            for(i=0;i<str.length;i++){
                let n = str[i].split("");
                let r = n.reverse();
                let v = r.join("");
            if(str[i] == v){
        res.push(str[i]);
    }else{
        continue;
}
    }
        console.log(res);
})
(); */






// Arrow functions:


// 1. Print odd numbers in an array
/* var oddNo = num => {
    let res=[];
        for(let key of num){
            if(key%2 !== 0){
                res.push(key);
            }
        }
    return res;
}
    console.log(oddNo([1,2,3,4,5]));  */




// 2. Convert all the strings to title caps in a string array

/*  var toTitleCase = str =>  {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }
console.log(toTitleCase("hai i am manikandan")); */




// 3. Sum of all numbers in an array:
/* var sum_all = num =>{
   let count = 0;
       for(let key of num){
           count = count + (+key);
       }
   return count;
};
   console.log(sum_all([34,24,43,74])); */




// 4. Return all the prime numbers in an array 
/* const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(element => isPrime(element));
console.log(myPrimeArray); */


//  5. Return all the palindromes in an array
/*  let palindrome = str => {
    let res = [];
    for (let key of str) {
        let n = key.split("");
        let r = n.reverse();
        let v = r.join("");
        if (key == v) {
            res.push(key);
        } else {
            continue;
        }
    }
    return res;
};
console.log(palindrome(["madam", "hello", "did", "dad", "121", "12364"])); */
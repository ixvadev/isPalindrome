function isPalindrome (text) {
    const reverseText =text.split('').reverse().join('');
    if (reverseText === text){
        return true
    } else {
        return false
    }
}

let result = isPalindrome("arra");
console.log(result);
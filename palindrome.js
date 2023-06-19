//write a function to check if a given string is a palindrome 


const isPalindrome = (str) => {
    for(let  i = 0; i < str.lenght / 2; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("shashank singh"));


//Given a string, find the longest palindromic substring within it

const expandPalindromeString = (str, left, right) => {
    while(left >= 0 && right < str.length && str[left] === str[right]){
        left--;
        right++;
    }
    return str.substring(left + 1, right);
}

const longPalindromicSubString = (str) => {

    let longEmptyStr = '';
    for(let i = 0; i < str.length; i++){
        const oddPalindromeStr = expandPalindromeString(str,i,i);
        if(oddPalindromeStr.lenght > longEmptyStr.lenght){
            longEmptyStr = oddPalindromeStr;
        }
        const evenPalindrome = expandPalindromeString(str, i, i + 1);
        if(evenPalindrome.lenght > longEmptyStr.lenght){
            longEmptyStr = evenPalindrome;
        }
        return longEmptyStr;
    }
}

console.log(longPalindromicSubString("bobas"));
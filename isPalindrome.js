// Write your code below


word = 'tacocat'

const isPalindrome = word =>{
    let backWordArr = []
    for(i = 0; i < word.length; i++){
        backWordArr.unshift(word[i])
    }
    backWord = backWordArr.splice()
    if(word = backWord){
        return true
    } else {
        return false
    }
}

console.log(isPalindrome('penis'))



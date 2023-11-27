// Write your code below



//FIRST FAILED ATTEMPT
// const isPalindrome = word =>{
//     let backWordArr = []
//     for(i = 0; i < word.length; i++){
//         backWordArr.unshift(word[i])
//     }
//     backWord = backWordArr.splice()
//     if(word = backWord){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome('racecart'))


// word = 'racecar'

//SECOND ATTEMPT
// const isPalindrome = word =>{
//     for(i = 0; i < word.length; i++){
//         for(j = word.length - 1; j < word.length; j--){
//             if(word[j] === word[i]){
//                 continue
//             } else {
//                 return true
//             }
//         }
//     }
// }

// console.log(isPalindrome(word))


function isPalindrome(word) {
    let j = word.length - 1
    for (let i = 0; i < (word.length - 1) / 2; i++) {
      if (word[i] !== word[j]) {
        return false
      }
      j--
    }
    return true
  }

  console.log(isPalindrome('tacocaT'))

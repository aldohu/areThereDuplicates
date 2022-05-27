// Implement a function called, areThereDuplicates which accepts a variable number 
// of arguments, and checks whether there are any duplicates among the arguments passed in.



//create function areThereDuplicates
//freq counter solution
function areThereDuplicates(...args) {
    //catch all arguments to the array;
    let arr = [...args];
    // naive way of finishing task {}
    let obj = {};
    //create object to count same numbers
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if(obj[num]) {
            obj[num]++
        }else {
            obj[num] = 1;
        }
    }
    for (const key in obj) {
        if (obj[key] > 1) {
            return true;
            
        }
    }
    return false;

}






 console.log(areThereDuplicates(1, 2, 3)) //false
  console.log(areThereDuplicates(1, 2, 2)) //true
  console.log(areThereDuplicates("c", "a", "t", "s", "s")) //true
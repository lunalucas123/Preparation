// let pyramidComplete = (rows) => {
  
//     for(let i = 1; i <= rows; i++){
//       let str = '';
      
//       //Add the white space to the left
//       for(let k = 1; k <= (rows - i); k++){
//         str += ' ';
//       }
      
//       //Add the '*' for each row
//       for(let j = 0; j != (2 * i - 1); j++){
//         str += '*';
//       }
      
//       //Add the white space to the right
//       for(let k =  i + 1; k <= rows; k++){
//         str += ' ';
//       }
      
//        //Print the pyramid pattern for each row
//       console.log(str);
//     }
//  }

// // console.log(line)  
 

// pyramidComplete(6)

// // let pyramidLeft = (rows) => {
   
// //   for(let i = 1; i <= rows; i++){
    
// //     let str = '';
    
// //     for(let j = 1; j <= i; j++){
// //       //Count the '*' for each row
// //       str += '*';
// //     }
    
// //     //Print the pyramid pattern for each row
// //     console.log(str);
// //   }
// // };

// // pyramidLeft(5)


// for (let i = 1; i <= 5; i ++ ) {
//         /* i = 0 is less than 2 
//            i = 1 is less than 2
//            i = 2 is ikus to 2
           
//         */
//        let line = ''

//   for ( let k = 1; k <= i; k++){

//     /* k = 0 is less than 0 (i)
//        k = 0 is ikus to   1 (i)
//        k = 1 is ikus to   1 (i)
//        k = 0 is less than 2 (i)
//        k = 1 is less than 2 (i)
//        k = 2 is ikus to   2 (i)

    
//     */
//       line += '*'
    
//   }console.log(line)
  
  
// } 


let space =  'f'

space += 'g'



console.log(space)






// function recursiveStar(n, star){
//     if ( n === 1){
//         return 1
//     }
    
//     return (n * recursiveStar(n-1))
// }
// console.log(recursiveStar(4, '*'))





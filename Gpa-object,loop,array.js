
const myGPA = (arrOfGrades) => {
  // write your code here
 let totalGpa = 0;
 let myObj = {
  'A+': 4.33,
  'A': 4,
  'A-': 3.67,
  'B+': 3.33,
  'B': 3,
  'B-': 2.67,
  'C+': 2.33,
  'C' : 2,
  'C-': 1.67,
  'D+': 1.33
   }
   
  for ( let i = 0; i < arrOfGrades.length; i++){
     totalGpa += myObj[arrOfGrades[i]];
     
     
  } 
  return totalGpa / myObj.length

  // return totalGpa / myObj.length
}


myGPA(['A+','C+','B+','A-','C'])

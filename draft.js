// You're given input is a nested array of colleagues. Within the nested array there are your colleagues' titles and a characteristic of them. 

// Write a function that console.log the colleague's name, title and their characteristic and then returns true

// Example:
let colleagueData = [
  ['Stacey', ['IT person', 'super smart']],
  ['Jim', ['sales person', 'outgoing']],
  ['Jenny', ['manager', 'very empathetic']],
  ['Cory', ['software engineer', 'very funny']]
  ]

// myColleagues(colleagueData)
// // Stacey is the IT person and is super smart.
// // Jim is the sales person and is outgoing.
// // Jenny is the manager and is very empathetic.
// // Cory is the software engineer and is very funny.
// //-> true
// }

let arrows = colleagueData.length
for ( let i = 0; i < arrows; i++){

let personality = ''
let profession =''
let names = ''

    names = colleagueData[i][0]
 
  let len = colleagueData[i][1].length
  //  console.log(len)

  for ( let j = 0; j < len ; j++){
     profession = colleagueData[i][j][0]
     personality = colleagueData[i][j][1]

    
    }  

console.log( 
  
  `${names} is the ${profession} and is ${personality}.
  
  `)

}
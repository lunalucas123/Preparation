let arrOfEmployees = [
    {
      'name': 'Joe',
      'title': 'developer',
      'salary': 125000,
      'bonus': 15000
    },
    {
      'name': 'Kelly',
      'title': 'developer',
      'salary': 135000,
      'bonus': 7500
    },
    {
      'name': 'Joan',
      'title': 'product manager',
      'salary': 105000,
      'bonus': 25000
    },
    {
      'name': 'Amber',
      'title': 'developer',
      'salary': 122000,
      'bonus': 16500
    },
    {
      'name': 'Tom',
      'title': 'designer',
      'salary': 87000,
      'bonus': 9000
    },
    {
      'name': 'Sara',
      'title': 'product manager',
      'salary': 97000,
      'bonus': 12500
    },
    {
      'name': 'Chris',
      'title': 'designer',
      'salary': 77500,
      'bonus': 6500
    }
    ]
    
function getEmployeeData(arrOfEmployees){
    // Your code here
    
    let result = [
      {
        'title': 'developer',
        'totalEmployees': 0,
        'avgSalary': 0,
        'avgBonus': 0,
        'avtTotalComp': 0
      },
      {
        'title': 'product manager',
        'totalEmployees': 0,
        'avgSalary': 0,
        'avgBonus': 0,
        'avtTotalComp': 0
      },
      {
        'title': 'designer',
        'totalEmployees': 0,
        'avgSalary': 0,
        'avgBonus': 0,
        'avtTotalComp': 0
      }
    ];
    let counter = 0
    let counter2 = 0
    let counter3 = 0
    let bonus = 0
    let bonus2 = 0
    let bonus3 = 0
    let avgBonus = 0
    let avgBonus2 = 0
    let avgBonus3 = 0
    let averageSalary = 0
    let averageSalary2 = 0
    let averageSalary3 = 0
    let total = 0
    let total2 = 0
    let total3 = 0
    for (var i = 0; i < arrOfEmployees.length; i++) {

        if ( arrOfEmployees[i].title === 'developer'){
        counter = counter + 1
        total = total + arrOfEmployees[i].salary
        bonus = bonus + arrOfEmployees[i].bonus
        averageSalary = (Math.round(total / counter))
        avgBonus = bonus /  counter
        avtTotalComp = averageSalary + avgBonus

      result[0]['totalEmployees'] = counter 
      result[0]['avgSalary'] = averageSalary
      result[0]['avgBonus'] =  avgBonus
      result[0]['avtTotalComp'] = avtTotalComp

      }
      }

     for (var j = 0; j < arrOfEmployees.length; j++){

      if ( arrOfEmployees[j].title === 'product manager'){
        counter2 = counter2 + 1
        total2 = total2 + arrOfEmployees[j].salary
        bonus2 = bonus2 + arrOfEmployees[j].bonus
        averageSalary2 = total2 / counter2
        avgBonus2 = bonus2 /  counter2
        avtTotalComp2 = averageSalary2 + avgBonus2

      result[1]['totalEmployees'] = counter2 
      result[1]['avgSalary'] = averageSalary2
      result[1]['avgBonus'] =  avgBonus2
      result[1]['avtTotalComp'] = avtTotalComp2

      }
      } for (var k = 0; k < arrOfEmployees.length; k++){

        if ( arrOfEmployees[k].title === 'designer'){
          counter3 = counter3 + 1
          total3 = total3 + arrOfEmployees[k].salary
          bonus3 = bonus3 + arrOfEmployees[k].bonus
          averageSalary3 = total3 / counter3
          avgBonus3 = bonus3 /  counter3
          avtTotalComp3 = averageSalary3 + avgBonus3
  
        result[2]['totalEmployees'] = counter3 
        result[2]['avgSalary'] = averageSalary3
        result[2]['avgBonus'] =  avgBonus3
        result[2]['avtTotalComp'] = avtTotalComp3
  
        }

        }return result 
} 
    
console.log(getEmployeeData(arrOfEmployees))

function hippo(numPellets){
  // your code here
  var total = 0
  
  var myArray2 = [[3, 4, 6, 1],[3, 4, 6, 1],[3, 4, 6, 1]]
  
  for ( var i = 0; i < myArray2.length; i++){
    for ( var j = 0; j < myArray2[i].length; j++){
      
      total = total + myArray2[i][j]
      if (total > numPellets) {
        
        return [i + 1,j]
        
      }
      
    }
  }
  
}
console.log(hippo(1))
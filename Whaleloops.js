let input = 'Geeeovuunny'
var vowels = [ 'a','e','i','o','u']
var resultArray = []

for (var i = 0; i < input.length; i++){
  for (var j =0; j < vowels.length; j++){
    if ( vowels[j]=== input[i]){
      
        if(input[i] === 'e'){
            resultArray.push('ee')
        }
      
        if(input[i] === 'u'){
            resultArray.push('uu')
            }
        }
    }


}

console.log(resultArray.join('').toUpperCase())
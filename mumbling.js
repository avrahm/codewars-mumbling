function accum(s) {
	// your code
  var strUpper = s.toUpperCase();
  var strLower = s.toLowerCase();
  var strPosition = [];
  var str = [];
  
  for (var i=0; i < strUpper.length; i++){
    str.push(strUpper[i]);
    if (strLower[i] === strLower[i]) {
      strPosition.push(i-2);
    }
      for (var j=1; j < strPosition.length; j++){
        str.push(strLower[i]);
      }str.push('-');
  }
  var completeStr = str.join('');
  return completeStr.substring(0, completeStr.length - 1);
}
//compare two arrays
function compareArrays(array1, array2) {
  var a = array1.sort();
  var b = array2.sort();
  for (var i = 0; i < a.length; i++) {
    if (a[i] != b[i]) {
      return false;
    }
  }
  return true;
}

function colorChange() {
  var hex_value = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var hex_number = "";
  for (var i = 0; i < 6; i++) {
    var random_number = Math.floor(Math.random() * hex_value.length);
    hex_number += hex_value[random_number];
  }
  document.getElementsByTagName("body")[0].style.background = "#" + hex_number;
  document.getElementById("hex-code").innerHTML = hex_number;
}

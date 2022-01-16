function generate() {
  var quotes = {
    "- Albert Einstein":
      "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.” ",
    "- Pierce Brown, Red Rising ":
      '"Man cannot be freed by the same injustice that enslaved it."',
    "- Madeline Miller, The Song of Achilles ":
      '"Bury us, and mark our names above. Let us be free."',
    "-  C.S. Lewis ":
      '"I was not born to be free---I was born to adore and obey."',
    "- John Galsworthy": "Life calls the tune, we dance.",
  };
  var keys = Object.keys(quotes);
  var randomKey = Math.floor(Math.random() * keys.length);
  console.log(keys[randomKey]);
}

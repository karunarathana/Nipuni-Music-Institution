function name1() {
  setTimeout(() => {
    document.getElementById("b1").style = "cursor:point";
  }, 2000);
  document.getElementById("b1").style = "cursor:wait";
}

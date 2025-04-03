function stampaParagrafo() {
    const paragrafo = document.getElementById("mioParagrafo").innerText;
    console.log("Testo del paragrafo:", paragrafo);
  }
  
  window.onload = function() {
    stampaParagrafo();
  };
  
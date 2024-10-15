function add() {
    let inputs = document.getElementById("emput");
    let hussain = inputs.value;
    document.getElementById("show").innerHTML += `${hussain}<br>`;
    inputs.value = ''; 
  }
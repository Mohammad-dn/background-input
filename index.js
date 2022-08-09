const changeBtn = document.getElementById("btn");
const changerInput = document.getElementById("changerInput");
changeBtn.addEventListener("click", (e) => {
  switch (changerInput.value) {
    case "red":
      e.target.parentElement.style.backgroundColor = "red";
      break;
    case "blue":
      e.target.parentElement.style.backgroundColor = "blue";
      break;
    case "gray":
      e.target.parentElement.style.backgroundColor = "gray";
      break;
    case "green":
      e.target.parentElement.style.backgroundColor = "green";
      break;
    case "yellow":
      e.target.parentElement.style.backgroundColor = "yellow";
      break;
    case "04FEF0":
      e.target.parentElement.style.backgroundColor = "#04FEF0";
      break;
    case "3E4205":
      e.target.parentElement.style.backgroundColor = "3E4205";

    default:
      break;
  }
  console.log(changerInput.value);
});
export default function printError(error) {
  document.getElementById("result").setAttribute("class", "hidden");
  document.getElementById("errorMessage").removeAttribute("class");
  document.getElementById("errorMessage").innerHTML = error;
}
const input = document.getElementById("infinitif");
const selection = document.getElementById("select");
const resultat = document.getElementById("resultat");
const btn = document.querySelector("button");

let verbeDiviser = "";

function diviseVerbe() {
  const valeurInput = input.value;
  console.log(input.value.endsWith);

  if (valeurInput.endsWith("re")) {
    verbeDiviser = valeurInput.slice(0, -2);
    console.log(verbeDiviser);
  } else if (valeurInput.endsWith("er")) {
    verbeDiviser = valeurInput.slice(0, -2);
  } else if (valeurInput.endsWith("ir")) {
    verbeDiviser = valeurInput.slice(0, -2);
  }
}

function conjuguer() {
  resultat.innerHTML = "";

  let temps;

  switch (selection.value) {
    case "present":
      temps = ["e", "es", "e", "ons", "ez", "ent"];
      break;
    case "futur":
      temps = ["erai", "eras", "era", "erons", "erez", "eront"];
      break;
    case "imparfait":
      temps = ["ais", "ais", "ait", "ions", "iez", "aient"];
      break;
    default:
      return;
  }

  const pronoms = ["Je", "Tu", "Il/Elle", "Nous", "Vous", "Ils/Elles"];

  pronoms.forEach((pronom, index) => {
    const conjuge = `${pronom} ${verbeDiviser} ${temps[index]}`;
    const li = document.createElement("li");
    li.textContent = conjuge;
    resultat.appendChild(li);
  });
}

btn.addEventListener("click", () => {
  diviseVerbe();
  conjuguer();
});

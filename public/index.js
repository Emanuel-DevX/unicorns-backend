async function searchButton() {
  const name = document.getElementById("unicornName");
  const loves = document.getElementById("unicornLoves");
  const weight = document.getElementById("unicornWeight");
  const gender = document.getElementById("unicornGender");
  const vampires = document.getElementById("unicornVampires");
  const vaccinated = document.getElementById("unicornVaccinated").value;
  const vampiresExist = document.getElementById("unicornVampiresExist").value;
  let query = [];
  if (name) query.push(`name=${encodeURIComponent(name.value)}`);
  if (loves) query.push(`loves=${encodeURIComponent(loves.value)}`);
  if (weight) query.push(`weight=${encodeURIComponent(weight.value)}`);
  if (gender) query.push(`gender=${encodeURIComponent(gender.value)}`);
  if (vampires) query.push(`vampires=${encodeURIComponent(vampires.value)}`);
  if (vaccinated) query.push(`vaccinated=${encodeURIComponent(vaccinated)}`);
  if (vampiresExist)
    query.push(`vampiresExist=${encodeURIComponent(vampiresExist)}`);
  const queryString = query.join("&");
  const result = await fetch(`http://localhost:3344/unicorns?${queryString}`);
  console.log(queryString);
  if (!result.ok) {
    throw new Error("whatever");
  }
  const resultJSON = await result.json();
  await renderPage(resultJSON);
}
function renderPage(result) {
  resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = ""; 
  result.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add(
      "my-5",
      "p-8",
      "mx-auto",
      "shadow-xl",
      "rounded-lg",
      "max-h-64",
      "bg-white"
    );
    card.innerHTML = `
      <h1 class="text-3xl font-extrabold mb-2">${element.name}</h1>
      <p data-attr="loves" class="hidden">Loves: ${element.loves}</p>
      <p data-attr="weight" class="hidden">Weight: ${element.weight}</p>
      <p data-attr="gender" class="hidden">Gender: ${element.gender}</p>
      <p data-attr="vampires" class="hidden">Vampires: ${element.vampires}</p>
      <p data-attr="vaccinated" class="hidden">Vaccinated: ${element.vaccinated}</p>
      <p data-attr="vampiresExist" class="hidden">Vampires Exist: ${document.getElementById("unicornVampiresExist").value}</p>
    `;
    resultDiv.appendChild(card);
  });
    updateCheckedValues();

}

function updateCheckedValues() {
  const selectedValues = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);


  const resultDiv = document.getElementById("resultDiv");
  const allElements = resultDiv.querySelectorAll("[data-attr]");

  allElements.forEach((element) => {
    const elementAttribute = element.getAttribute("data-attr");

    if (selectedValues.includes(elementAttribute)) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
}

function setup() {
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener("change", searchButton);
  });
}

document.addEventListener("DOMContentLoaded", setup);

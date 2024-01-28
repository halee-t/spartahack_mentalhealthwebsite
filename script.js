function addCheckList() {
  const checklistInput = document.getElementById("checklistInput");
  const checkList = document.getElementById("checklist");

  const checklistText = checklistInput.value.trim();

  if (checklistText !== "") {
    const checklistEntry = document.createElement("div");
    checklistEntry.className = "checklist-entry";
    const checkboxId = "checkbox_" + checklistText.replace(/\s/g, "_");
    checklistEntry.innerHTML = `<input onchange="handleCheckboxChange('${checkboxId}')" type="checkbox" id="${checkboxId}"><label for="${checkboxId}">${checklistText}</label>`;

    checkList.appendChild(checklistEntry);
    checklistInput.value = "";
  }
}

function handleSubmit() {
  addCheckList(); // You can perform additional actions if needed
}

// Handle Enter key press
document
  .getElementById("checklistInput")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  });

function clearList() {
  var listToClear = document.getElementById("checklist");
  if (listToClear) {
    listToClear.innerHTML = "Congratulations: A clear list is a clear mind :)";
  }
}

function handleCheckboxChange(checkboxId) {
  // Get the current state of the checkbox
  // const checkbox = document.getElementById(checkboxId);

  // Check if the checkbox is now checked and was previously unchecked
  // if (checkbox.checked && !checkbox.hasAttribute("data-checked")) {
  // Show the modal when the checkbox is checked for the first time
  achievementSounds();
  $("#myModal").modal("show");
  // }

  // Store the current state of the checkbox
  checkbox.setAttribute("data-checked", checkbox.checked);
}

function achievementSounds() {
  var audio = document.getElementById("achievementSound");
  audio.play();
}

function toTheVoid() {
  voidSounds();
  setTimeout(changeText, 1500);
}

function changeText() {
  var textarea = document.getElementById("theVoid");
  if (textarea) {
    textarea.value = ":) Don't you feel so much better :)";
  }
}

function voidSounds() {
  var audio = document.getElementById("voidSound");
  audio.play();
}

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

function addCheckList() {
  const checklistInput = document.getElementById("checklistInput");
  const checkList = document.getElementById("checklist");

  const checklistText = checklistInput.value.trim();

  if (checklistText !== "") {
    const checklistEntry = document.createElement("div");
    checklistEntry.className = "checklist-entry";
    checklistEntry.innerHTML = `<input type="checkbox" id="${checklistText}"><label for="${checklistText}">${checklistText}</label>`;

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
    listToClear.innerHTML = "";
  }
}

function toTheVoid() {
  voidSounds();
  setTimeout(toTheVoid, 2000);
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

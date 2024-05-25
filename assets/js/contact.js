
  const form = document.getElementById("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("name");
    const name = nameInput.value.trim();

    if (name.toLowerCase() === "ironhack") {
      alert("You cannot be Ironhack, because I am Ironhack.");
      nameInput.value = ""; 
    } else {
      this.submit();
    }
  });

window.onload = function () {
  const apiData =
    "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

  function getApi() {
    fetch(apiData)
      .then((response) => response.json())
      .then((projects) => {
        // Filter out the first three projects
        const firstThreeProjects = projects.slice(0, 3);

        let apiData = "";
        firstThreeProjects.forEach((project) => {
          apiData += `
                    <article class="box-section">
                        <img class="projects-image" src="assets/images/projects-section/${project.uuid}.jpg" alt="${project.name}">
                        <div class="width">
                            <h3 class="grey">${project.name}</h3>
                            <h5>${project.description}</h5>
                            <a href="project-page.html" class="button-learn blue">Learn More</a>
                        </div>
                    </article>
                    `;
        });
        document.querySelector(".projects").innerHTML = apiData;
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        displayErrorMessage("Error message");
      });
  }

  getApi();

  function displayErrorMessage(message) {
    const messageDiv = document.getElementById("messageError");
    messageDiv.textContent = message;
    messageDiv.style.display = "block"; // Show the message div
  }

  displayErrorMessage("Oppsie an error occurred while fetching data.");
}

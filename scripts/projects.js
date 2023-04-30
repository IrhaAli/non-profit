$(() => {
  // To display all projects
  fetch("../db/projects.json")
    .then(response => response.json())
    .then((projects) => {
      loadProjects(projects)
    })

  // Display add project form option
  let loggedIn = true;
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");


  // When project is added
  $("form").on("submit", submitProject);
});

const loadProjects = (projectsObj) => {
  for (let singleProject in projectsObj) {
    const project = projectsObj[singleProject];
    const $project = createProjectElement(project);
    $(".projects").append($project);
  }
};

const createProjectElement = function(project) {
  const $project = $(`
  <div class="projects--card">
  <img src="${project.image_url}" class="projects--card--img" />
  <div class="projects--card--body">
    <h2 class="projects--card--body--title">${project.title}</h2>
    <div class="projects--card--body--date">
    <p class="projects--card--body--content">${project.description}</p>
    </div>
  </div>`);
  return $project;
};

const submitProject = function(project) {
  // Initial settings
  project.preventDefault();


  // Get the project
  const formData = $(".projectForm").serializeArray();
  const projectDetails = {}
  for (const item of formData) {
    const $value = item.value
    projectDetails[`${item.name}`] = $value;
  }

  // Add project to JSON file
  // addNewProject(projectDetails);

  // Update project list (frontend)
  const $project = createProjectElement(projectDetails);
  $(".projects").append($project);
};

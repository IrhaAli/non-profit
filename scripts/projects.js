// Global Variables
let loggedIn = document.cookie;
let totalProjects;

$(async () => {
  // Display add project form option
  const $showForm = $('form');
  $showForm.css("display", (loggedIn) ? "block" : "none");

  // To display all projects
  await fetch("../db/projects.json")
    .then(response => response.json())
    .then((projects) => {
      totalProjects = projects.length
      for (let id = 0; id < totalProjects; id++) {
        const project = projects[id];
        const $project = createProjectElement(project, id);
        $(".projects").append($project);
      }
    })

  // When project is added
  $("form").on("submit", submitProject);

  // When project is removed
  $(".del-proj").on("click", deleteProject);
});

const createProjectElement = function(project, id) {
  const $project = $(`
  <div class="projects--card" id="${id}">
  <img src="${project.image_url}" class="projects--card--img" />
  <div class="projects--card--body">
    <h2 class="projects--card--body--title">${project.title}</h2>
    <div class="projects--card--body--date">
    <p class="projects--card--body--content">${project.description}</p>
    </div>
    ${(loggedIn) ? '<button class="del-proj"><i class="fa fa-trash-o" style="font-size:48px;color:red"></i></button>' : ''}
  </div>`);
  return $project;
};

const submitProject = function(project) {
  // Initial settings
  project.preventDefault();
  totalProjects++;

  // Get the project
  const formData = $(".projectForm").serializeArray();
  const projectDetails = {}
  for (const item of formData) {
    const $textArea = $(this).find(`textarea[name="${item.name}"`);
    const $value = $textArea.val();
    $textArea.val("");
    projectDetails[`${item.name}`] = $value;
  }

  // Add project to JSON file
  // addNewProject(projectDetails);

  // Update project list (frontend)
  const $project = createProjectElement(projectDetails, totalProjects);
  $(".projects").append($project);
};

const deleteProject = function(event) {
  // Initial settings
  event.preventDefault();
  const projectId = $(this).closest('.projects--card').attr('id');

  // Remove project from JSON file
  // removeProject(projectId);

  // Update project list (frontend)
  $(`#${projectId}`).css("display", 'none');
}
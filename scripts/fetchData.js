$(() => {
  var url = window.location.href;
  
  if(url.indexOf("index")) fetchImages();
  if(url.indexOf("events")) fetchEvents();
  if(url.indexOf("projects")) fetchProjects();
  if(url.indexOf("get-involved")) fetchGetInvolved();
});

const fetchEvents = () => {
  // To display all events
  fetch("../db/events.json")
    .then(response => response.json())
    .then((events) => {
      for (const event of events) {
        const $event = createEventElement(event);
        $('.events').append($event);
      }
    })
};

const fetchProjects = () => {
  // To display all projects
  fetch("../db/projects.json")
    .then(response => response.json())
    .then((projects) => {
      for (const project of projects) {
        const $project = createProjectElement(project);
        $('.projects').append($project);
      }
    })
};

const fetchGetInvolved = () => {
  // To display all GetInvolved
  fetch("../db/get_involved.json")
    .then(response => response.json())
    .then((get_involved) => {
      for (const project of get_involved) {
        const $project = createGetInvolvedElement(project);
        $('.get_involved').append($project);
      }
    })
};

const fetchImages = () => {
  $.getJSON("../db/images.json", (res) => {
    const $carousel = $('.img-gallery-container').addClass('slick-carousel');
    $.each(res.images, (index, imageUrl) => {
      const $img = $("<img>").attr('src', imageUrl).addClass('img-gallery-container-image');
      $carousel.append($img);
    });
    $carousel.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      arrows: true
    });
  })
}

const createEventElement = function (event) {
  const $event = $(`
  <div class="events--card">
  <img src="${event.image_url}" class="events--card--img" />
  <div class="events--card--body">
    <h2 class="events--card--body--title">${event.title}</h2>
    <h3 class="events--card--body--location ">${event.location}</h3>
    <div class="events--card--body--date">
      <div class="events--card--body--date--text">${event.date}</div>
    </div>
    <p class="events--card--body--content">${event.description}</p>
    </div>
  </div>`);
  return $event;
};

const createProjectElement = function (project) {
  const $project = $(`
  <div class="projects--card">
  <img src="${project.image_url}" class="projects--card--img" />
  <div class="projects--card--body">
    <h2 class="projects--card--body--title">${project.title}</h2>
    <h3 class="projects--card--body--location ">${project.location}</h3>
    <div class="projects--card--body--date">
      <div class="projects--card--body--date--text">${project.date}</div>
    </div>
    <p class="projects--card--body--content">${project.description}</p>
    </div>
  </div>`);
  return $project;
};

const createGetInvolvedElement = function (project) {
  const $project = $(`
  <div class="projects--card">
  <img src="${project.image_url}" class="projects--card--img" />
  <div class="projects--card--body">
    <h2 class="projects--card--body--title">${project.title}</h2>
    <h3 class="projects--card--body--location ">${project.location}</h3>
    <div class="projects--card--body--date">
      <div class="projects--card--body--date--text">${project.date}</div>
    </div>
    <p class="projects--card--body--content">${project.description}</p>
    </div>
  </div>`);
  return $project;
};

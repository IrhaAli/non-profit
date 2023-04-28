export const eventsObj = {
  0: {
    title: "Tech Conference",
    date: "2023-05-15 - 7:00pm",
    location: "Toronto, ON, Canada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url:
      "https://unknown.sytes.net/original_images/Food%20&%20Medcine/food%20&%20medicine-02.jpg",
  },
  1: {
    title: "Charity Run",
    date: "2023-06-10 - 11:00am",
    location: "Vancouver, BC, Canada",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image_url:
      "https://unknown.sytes.net/original_images/Food%20&%20Medcine/food%20&%20medicine-02.jpg",
  },
};

export const addNewEvent = (title, date, location, description, image_url) => {
  eventsObj.title = title;
  eventsObj.date = date;
  eventsObj.location = location;
  eventsObj.description = description;
  eventsObj.image_url = image_url;
}
const fs = require('fs');

export const addNewEvent = (eventDetails) => {
  fs.readFile('events.json', 'utf8', (err, data) => {
    if (err){
        console.log(err);
    } else {
    events = JSON.parse(data);
    events.table.push(eventDetails);
    json = JSON.stringify(obj);
    fs.writeFile('events.json', json, 'utf8');
}})};
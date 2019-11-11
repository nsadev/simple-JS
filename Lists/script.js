const list = [
  {
    id: 1,
    task: 'Lorem ipsum dolor sit amet',
    due: new Date('2020-11-05'),
    priority: 3
  },
  {
    id: 2,
    task: 'Ad sit nobis semper praesent',
    due: new Date('2020-01-17'),
    priority: 1
  },
  {
    id: 3,
    task: 'Lorem ipsum dolor sit amet',
    due: new Date('2020-03-26'),
    priority: 2
  },
  {
    id: 4,
    task: 'Ad sit nobis semper praesent',
    due: new Date('2020-09-08'),
    priority: 3
  },
  {
    id: 5,
    task: 'Lorem ipsum dolor sit amet',
    due: new Date('2020-02-12'),
    priority: 2
  },
  {
    id: 6,
    task: 'Ad sit nobis semper praesent',
    due: new Date('2020-01-03'),
    priority: 1
  },
  {
    id: 7,
    task: 'Lorem ipsum dolor sit amet',
    due: new Date('2020-01-01'),
    priority: 1
  },
  {
    id: 8,
    task: 'Ad sit nobis semper praesent',
    due: new Date('2020-04-22'),
    priority: 2
  },
  {
    id: 9,
    task: 'Lorem ipsum dolor sit amet',
    due: new Date('2020-08-10'),
    priority: 3
  },
  {
    id: 10,
    task: 'Ad sit nobis semper praesent',
    due: new Date('2020-01-11'),
    priority: 1
  }
];

let listElem = document.getElementById('task_list');

let taskList = list.map((elem) => { 
  return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join('');

listElem.innerHTML = taskList;

let lowList = () => listElem.innerHTML = (
  list.filter(elem => elem.priority === 3)
  .map((elem) => { 
    return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join(''));

let mediumList = () => listElem.innerHTML = (
  list.filter(elem => elem.priority === 2)
  .map((elem) => { 
    return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join(''));

let highList = () => listElem.innerHTML = (
  list.filter(elem => elem.priority === 1)
  .map((elem) => { 
    return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join(''));

const ascSort = () => listElem.innerHTML = (
  list.slice().sort((a, b) => a.due - b.due))
  .map((elem) => { 
    return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join('');

const descSort = () => listElem.innerHTML = (
  list.slice().sort((a, b) => b.due - a.due))
  .map((elem) => { 
    return `<li>${elem.task}, ${elem.due.toISOString().slice(0, 10)}, ${elem.priority}</li>`;
}).join('');

document.getElementById('low').addEventListener('click', lowList);
document.getElementById('medium').addEventListener('click', mediumList);
document.getElementById('high').addEventListener('click', highList);
document.getElementById('asc').addEventListener('click', ascSort);
document.getElementById('desc').addEventListener('click', descSort);
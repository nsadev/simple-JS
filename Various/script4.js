const list = ['JS Rules', 'React is awesome', 'HTML + CSS = Old School Cool', 'Python is intriguing'];
const searchBar = document.getElementById('searchbar');
const result = document.getElementById('searchlist');

let searchQuery = '';


const displaySearch = () => {
  const match = list.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
  const newList = match.map((item )=> {
    return `<li>${item}</li>`;
  }).join('');
  result.innerHTML = newList;
}

displaySearch();

searchBar.addEventListener('input', e => {
  searchQuery = e.target.value;
  displaySearch();
});
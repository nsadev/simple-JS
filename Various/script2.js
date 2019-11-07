let thumb = document.getElementById('likey');
let counter = 
count = 100;
clicks = 0;

const like = () => { 
  if (clicks === 0) {
    clicks++
    counter++
    document.getElementById('count').innerHTML = counter;
  } else {
    clicks = 0
    counter--
    document.getElementById('count').innerHTML = counter;
  }
};

thumb.addEventListener('click', like);
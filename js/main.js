// jednoduchá data struktura pro články (nahraď reálnými daty)
let posts = [
  { id:1, title:"Načítání", date:"15.8.2025", excerpt:"Probíhá načítání postů", image:"linear-gradient(180deg,#b26f2a,#6b3b2a)"}
];
(async () => {
  try {
    const pisatsnajifetch = await fetch('/getposts');
    const pists = await pisatsnajifetch.json();
    posts = pists;
    renderFeed();
  } catch {
    const reloadyesno = confirm('Nelze načíst posty. Chcete načíst stránku znovu?')
    if (reloadyesno) location.reload();
  }
})();

function createPostCard(post){
  const postEl = document.createElement('article');
  postEl.className = 'post card';

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.background = post.image;
  thumb.style.backgroundPosition = "center";
  postEl.appendChild(thumb);

  const body = document.createElement('div');
  body.className = 'body';
  const h3 = document.createElement('h3');
  h3.textContent = post.title;
  const p = document.createElement('p');
  p.textContent = post.excerpt;
  const meta = document.createElement('div');
  meta.className = 'meta';
  meta.innerHTML = `<span>❤ 0</span><span>${post.date}</span>`;

  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(meta);

  postEl.appendChild(body);
  return postEl;
}

function renderFeed(){
  if (window.location.pathname !== '/') return;
  const feed = document.getElementById('feed');
  feed.innerHTML = '';
  posts.forEach(p => {
    const card = createPostCard(p);
    feed.appendChild(card);
  });
}

// simulovaný stav serveru
function renderStatus(){
  const online = document.getElementById('online-count');
  const members = document.getElementById('member-count');

  // náhodná čísla pro demo
  online.textContent = '0';
  members.textContent = '0';
}

// inicializace
//document.addEventListener('DOMContentLoaded', () => {
  renderStatus();

  // aktualizuj status každých 10s (demo)
  setInterval(renderStatus, 10000);

  document.querySelectorAll('[data-name]').forEach(el => {
    const rank = el.textContent;
    // Add transition for smooth font-size change
    el.style.transition = 'font-size 0.3s';

    el.addEventListener('mouseover', function() {
      el.textContent = el.getAttribute('data-name');
      el.style.fontSize = '1.2em';
    });
    el.addEventListener('mouseout', function() {
      el.textContent = rank;
      el.style.fontSize = '';
    });
  });
  document.querySelectorAll('[data-dcid]').forEach(async el => {
    const cacheBuster = Date.now();
    const resp = await fetch('https://api.allorigins.win/raw?url=http://46.247.108.145:2503/getstatus?who=' + el.getAttribute('data-dcid')+"&buster="+cacheBuster, {
      method: 'GET',
      headers: {
        'Host': 'primuscraft.fun'
      }
    });
    const status = await resp.text();
    let statusCZ;
    if (status === 'online') {
      statusCZ = 'Online';
    } else if (status === 'offline') {
      statusCZ = 'Offline';
    } else if (status === 'dnd') {
      statusCZ = 'Nerušit';
    } else if (status === 'idle') {
      statusCZ = 'Pryč';
    } else {
      alert('Chyba při načítání stavu: ' + status);
    }
      

    el.innerHTML = statusCZ;
    el.classList.add(status);
  });

//});


// jednoduchá data struktura pro články (nahraď reálnými daty)
const posts = [
  { id:1, title:"SERVER SE PŘIPRAVUJE", date:"15.8.2025", excerpt:"Připravujeme pro vás server Primus - Next Level Minecraftu", image:"linear-gradient(180deg,#b26f2a,#6b3b2a)"}
];

function createPostCard(post){
  const postEl = document.createElement('article');
  postEl.className = 'post card';

  const thumb = document.createElement('div');
  thumb.className = 'thumb';
  thumb.style.background = post.image;
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
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  renderStatus();

  // aktualizuj status každých 10s (demo)
  setInterval(renderStatus, 10000);

  document.querySelectorAll('[data-name]').forEach(el => {
    const rank = el.textContent;
    // Add transition style for smooth effect
    el.style.transition = 'all 0.3s ease';

    el.addEventListener('mouseover', function() {
      el.textContent = el.getAttribute('data-name');
    });
    el.addEventListener('mouseout', function() {
      el.textContent = rank;
    });
  });
});
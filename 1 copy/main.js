// jednoduchá data struktura pro články (nahraď reálnými daty)
const posts = [
  { id:1, title:"VYHLÁŠENÍ - Squid Game", date:"8.8.2025", excerpt:"Ve středu proběhl SquidGame event S2...", image:"linear-gradient(180deg,#8a3b2e,#5a2a20)"},
  { id:2, title:"SQUID GAME S2", date:"4.8.2025", excerpt:"SQUID GAME SEZÓNA 2... milionový jackpot", image:"linear-gradient(180deg,#b26f2a,#6b3b2a)"},
  { id:3, title:"RESOURCE PACK", date:"26.7.2025", excerpt:"Nový systém craftingových bloků a nábytku...", image:"linear-gradient(180deg,#274b3b,#143527)"},
  { id:4, title:"AQUARYON", date:"14.7.2025", excerpt:"Summer draK Aquaryon obsadil End arénu...", image:"linear-gradient(180deg,#3b2a5a,#1a0f2a)"},
  { id:5, title:"BATTLE PASS", date:"30.6.2025", excerpt:"BattlePass 4. sezóna od 17.7.2025...", image:"linear-gradient(180deg,#6b2a2a,#3b1a1a)"},
  { id:6, title:"Novinky & Eventy", date:"29.7.2025", excerpt:"Nová GACHA sezóna - SUMMER", image:"linear-gradient(180deg,#3b5a2a,#1a2b18)"},
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
  meta.innerHTML = `<span>❤ ${Math.floor(Math.random()*40)+1}</span><span>${post.date}</span>`;

  body.appendChild(h3);
  body.appendChild(p);
  body.appendChild(meta);

  postEl.appendChild(body);
  return postEl;
}

function renderFeed(){
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
  online.textContent = (Math.floor(Math.random()*25)+3) + '';
  members.textContent = (Math.floor(Math.random()*7000)+300) + '';
}

// inicializace
document.addEventListener('DOMContentLoaded', () => {
  renderFeed();
  renderStatus();

  // aktualizuj status každých 10s (demo)
  setInterval(renderStatus, 10000);
});

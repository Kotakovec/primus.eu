document.querySelector('.sidebar').innerHTML = `
      <div class="logo-row">
        <!--<div class="logo">PM</div>-->
        <img src="/images/favicon.png" alt="logo" />
        <div class="brand">Primus</div>
      </div>

      <nav class="menu">
        <a class="menu-item" href="/">Hlavní Stránka</a>
        <a class="menu-item" href="/at">AdminTeam</a>
        <a class="menu-item" href="#">Store</a>
        <a class="menu-item" href="/rules">Pravidla</a>
        <a class="menu-item" href="#">Wiki</a>
        <a class="menu-item" href="#">Spolupráce</a>
        <a class="menu-item" href="#">Nábory</a>
        <a class="menu-item" href="#">Statistiky</a>
      </nav>

      <div class="card status-card">
        <h4>STATUS</h4>
        <div class="status-line">
          <div class="dot online"></div>
          <div>
            <div class="muted">Online:</div>
            <div id="online-count">—</div>
            <div class="muted small">mc.primuscraft.fun</div>
          </div>
        </div>
        <hr>
        <div class="status-line">
          <div class="icon">👥</div>
          <div>
            <div class="muted">Členů:</div>
            <div id="member-count">—</div>
            <a class="small link" href="#">Klikni pro připojení</a>
          </div>
        </div>
      </div>

      <div class="sidebar-footer">
        <small>© 2025 primuscraft.fun</small>
        <small>Created by Koťák & MrTomiCZ</small>
      </div>
`;
/*document.querySelector('.topbar').innerHTML = `
        <div class="user">Nepřihlášen</div>
`;*/
document.querySelector('.rightbar').innerHTML = `
      <div class="card socials-card">
        <h4>SOCIÁLNÍ SÍTĚ</h4>
        <div class="socials">
          <button class="sbtn instagram">IG</button>
          <button class="sbtn tiktok">TT</button>
          <button class="sbtn dc">DC</button>
        </div>
      </div>
`;

document.querySelectorAll('.menu-item').forEach(el => {
  const linkPath = el.getAttribute('href');
  const currentPath = window.location.pathname;

  // If the link matches the current path, add 'active', else remove it
  if (linkPath === currentPath) {
    el.classList.add('active');
  } else {
    el.classList.remove('active');
  }
});

let link = document.querySelector("link[rel~='icon']");
if (!link) {
  link = document.createElement('link');
  link.rel = 'icon';
  document.head.appendChild(link);
}
link.href = "/images/favicon.png";
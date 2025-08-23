const staffData = {
  "Vedení": [
    {
      "status": "on",
      "avatar": "/images/tenyx.png",
      "alt": "Tenyx",
      "name": "Tenyx",
      "realname": "Tomáš",
      "role": "Majitel",
      "social": "bude pridano",
      "badge": null
    },
    {
      "status": "on",
      "avatar": "/images/kotak.png",
      "alt": "kotak logo",
      "name": "Koťák",
      "realname": "Jakub",
      "role": "Šéf Projektu",
      "social": "bude pridano",
      "badge": "Přes den spí"
    }
  ],
  "Developeři": [
    {
      "status": "off",
      "avatar": "/images/juuaann74.png",
      "alt": "juuaann74 logo",
      "name": "Juuaann74",
      "realname": "???",
      "role": "Server Developer",
      "social": "bude pridano",
      "badge": null
    },
    {
      "status": "off",
      "avatar": "https://frdomains.eu/images/mrtomi.png",
      "alt": "mrtomicz logo",
      "name": "MrTomiCZ",
      "realname": "Tomáš",
      "role": "Web developer",
      "social": "bude pridano",
      "badge": "Dovolená"
    }
  ],
  "Technici": [
    {
      "status": "off",
      "avatar": "/images/kajinaa.png",
      "alt": "kajina logo",
      "name": "kajinaa.",
      "realname": "Karolína",
      "role": "Technička",
      "social": "bude pridano",
      "badge": null
    }
  ],
  "Podpora": [
    {
      "status": "off",
      "avatar": "/images/skyminercz.png",
      "alt": "skyminercz logo",
      "name": "SkyMinerCz",
      "realname": "???",
      "role": "Helper",
      "social": "bude pridano",
      "badge": null
    },
    {
      "status": "off",
      "avatar": "/images/skyminercz.png",
      "alt": "s8z3 logo",
      "name": "s8z3",
      "realname": "???",
      "role": "Zkušební helper",
      "social": "bude pridano",
      "badge": null
    }
  ]
};

function renderStaff(data, querySelector) {
  const container = document.querySelector(querySelector);
  container.innerHTML = ""; // clear previous render

  for (const [section, members] of Object.entries(data)) {
    // section title
    const title = document.createElement("div");
    title.className = "at-title";
    title.textContent = section;
    container.appendChild(document.createElement("br"));
    container.appendChild(title);
    container.appendChild(document.createElement("br"));

    // member cards
    members.forEach(member => {
      const card = document.createElement("div");
      card.className = "at-card";

      const status = document.createElement("div");
      status.className = "status " + member.status;
      card.appendChild(status);

      const img = document.createElement("img");
      img.src = member.avatar;
      img.alt = member.alt;
      img.className = "at-avatar";
      card.appendChild(img);

      const name = document.createElement("div");
      name.className = "at-name";
      name.textContent = member.name;
      card.appendChild(name);

      const role = document.createElement("div");
      role.className = "at-role";
      role.dataset.name = member.realname;
      role.textContent = member.role;
      card.appendChild(role);

      const soc = document.createElement("div");
      soc.className = "at-soc";
      soc.textContent = member.social;
      card.appendChild(soc);

      if (member.badge) {
        const badge = document.createElement("div");
        badge.className = "odznacek";
        badge.innerHTML = `<span>${member.badge}</span>`;
        card.appendChild(badge);
      }

      container.appendChild(card);
    });
  }
}

// render into #staff-container
renderStaff(staffData, ".at-list");
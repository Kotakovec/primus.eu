async function buildStaffData() {
    const s8z3avatar = await getAvatar("557583720727576579");
    const mrtomicz = await getAvatar("818109259048157226");
    const kajina = await getAvatar("818109259048157226");


    return {
      "Vedení": [
        {
          "status": "on",
          "avatar": "/images/tenyx.png",
          "name": "Tenyx",
          "realname": "Tomáš",
          "role": "Majitel",
          "social": "bude pridano",
          "badge": null
        },
        {
          "status": "on",
          "avatar": "/images/kotak.png",
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
          "name": "Juuaann74",
          "realname": "???",
          "role": "Server Developer",
          "social": "bude pridano",
          "badge": null
        },
        {
          "status": "off",
          "avatar": mrtomicz,
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
          "name": "SkyMinerCz",
          "realname": "???",
          "role": "Helper",
          "social": "bude pridano",
          "badge": null
        },
        {
          "status": "off",
          "avatar": s8z3avatar,
          "name": "s8z3",
          "realname": "Dominik",
          "role": "Zkušební helper",
          "social": "bude pridano",
          "badge": null
        }
      ]
    };
}

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

    // create a single row per section
    const row = document.createElement("div");
    row.className = "at-row";

    members.forEach(member => {
      const card = document.createElement("div");
      card.className = "at-card";

      const status = document.createElement("div");
      status.className = "status " + member.status;
      card.appendChild(status);

      const img = document.createElement("img");
      img.src = member.avatar;
      img.alt = member.name + " logo";
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

      row.appendChild(card);
    });

    container.appendChild(row);
  }
}

async function getAvatar(memberId) {
    const cacheBuster = Date.now();
    try {
        const resp = await fetch('/api/getavatar?who=' + memberId+"&buster="+cacheBuster, {
          method: 'GET'
        });
        if (!resp.ok) return "/images/404img.jpg";
        return await resp.text();
    } catch {
        console.error("Failed to fetch avatar:", memberId, err);
        return "/images/404img.jpg";
    }
}


// render into #staff-container
(async () => {
  const staffData = await buildStaffData();
  renderStaff(staffData, ".at-list");
})();
// Tab switching logic
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active from all
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    // Hide/show tab sections
    const tabId = btn.dataset.tab;
    document.querySelectorAll('.tab-section').forEach(sec=>{
      sec.classList.remove('show');
    });
    document.getElementById('tab-' + tabId).classList.add('show');
    window.scrollTo({top:0, behavior:'smooth'});
  });
});

// Info cards data
const infoCards = [
  {
    icon: 'info',
    title: "Getting Started",
    description: "New to Syntax Leaks? Start by exploring our sources section and joining our Discord community. All downloads are verified and tested for security and functionality.",
    colorClass: "info"
  },
  {
    icon: 'clock',
    title: "Weekly Updates",
    description: "We update our sources weekly to ensure you always have access to the latest versions. Check back regularly or join our Discord for update notifications.",
    colorClass: "clock"
  },
  {
    icon: 'lock',
    title: "Security First",
    description: "All sources undergo rigorous security testing before being made available. We prioritize your safety and privacy above all else.",
    colorClass: "lock"
  },
  {
    icon: 'message-circle',
    title: "Community Support",
    description: "Having issues? Our community is here to help. Join our Discord server for immediate assistance and troubleshooting guidance.",
    colorClass: "message-circle"
  }
];

const infoCardsEl = document.querySelector('.info-cards');
if (infoCardsEl) {
  infoCards.forEach(card => {
    const el = document.createElement('div');
    el.className = 'info-card';
    el.innerHTML = `
      <div class="info-card-header">
        <span class="icon ${card.icon}"></span>
        <span class="info-card-title">${card.title}</span>
      </div>
      <div class="info-card-desc">${card.description}</div>
    `;
    infoCardsEl.appendChild(el);
  });
}

// Sources data
const sources = [
  {
    id: "wave",
    title: "Wave Source",
    description: "Wave UI Trail Source, this source do not behaviour the full features of the official Wave executor.",
    downloads: "2.3k",
    image: "wave.png",
    downloadUrl: "https://fileupdown.com/88255bf7aea5944e",
  },
  {
    id: "atlantis",
    title: "Atlantis",
    description: "Atlantis full source, key system Editor and scripthub! The red designed UI above is Atlantis.",
    downloads: "5.7k",
    image: "atlantis.png",
    downloadUrl: "https://fileupdown.com/1f11b77638280989",
  },
  {
    id: "jjsploit",
    title: "JJSploit",
    description: "JJSploit v8.10.14 by wearedevs.net - Fully working Lua executor with reliable script execution and user-friendly interface.",
    downloads: "2k",
    image: "jjsploit.png",
    downloadUrl: "https://fileupdown.com/358fd23725e51944",
  },
  {
    id: "cloudy",
    title: "Cloudy",
    description: "Cloudy v3.0.0 - Advanced script hub with verified GUI collection, search functionality, and extensive script repository for enhanced gameplay.",
    downloads: "8.9k",
    image: "cloudy.png",
    downloadUrl: "https://fileupdown.com/1fe12579739da37b",
  },
];

const sourcesListEl = document.querySelector('.sources-list');
if (sourcesListEl) {
  sources.forEach(source => {
    const el = document.createElement('div');
    el.className = 'source-card';
    el.innerHTML = `
      <div class="source-img-side">
        <img class="source-img" src="${source.image}" alt="${source.title}">
      </div>
      <div class="source-content-side">
        <div>
          <div class="source-title">${source.title}</div>
          <div class="source-desc">${source.description}</div>
        </div>
        <div class="source-bottom">
          <div class="source-downloads"><span class="icon download"></span> <span>${source.downloads} downloads</span></div>
          <button class="source-download-btn" onclick="window.open('${source.downloadUrl}', '_blank')">Download</button>
        </div>
      </div>
    `;
    sourcesListEl.appendChild(el);
  });
}

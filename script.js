const monuments = {
  eiffel: {
    name: "Tour Eiffel",
    city: "Paris",
    country: "France",
    description: "La tour Eiffel a été construite <strong>le 28 janvier 1887</strong> c’est une construction métallique réalisée pour l'Exposition Universelle de 1889 à Paris. Elle a été conçue par <strong>Gustave Eiffel</strong> et ses collaborateurs pour démontrer la puissance industrielle de la France et célébrer le centenaire de la Révolution française. Elle devait être démontée après 20 ans, mais elle a été conservée et est devenue le symbole de Paris et de la France. ",
    lat: 48.8584,
    lng: 2.2945,
  },
  arc: {
    name: "L’Arc de Triomphe de l'Etoile",
    city: "Paris",
    country: "France",
    description: "L’Arc de Triomphe de l'Etoile, a été commandé <strong>en 1806 par Napoléon Ier</strong> après sa victoire à Austerlitz. Il voulait en faire un hommage aux armées françaises. L’arc a été achevé <strong>en 1836</strong> sous le règne de Louis-Philippe. Monument emblématique du style néo-classique, il célèbre les soldats morts pour la France, notamment pendant les guerres napoléoniennes. Depuis 1921, il abrite la tombe du Soldat inconnu, avec une flamme qui y brûle en continu en hommage aux morts de la Première Guerre mondiale.",
    lat: 48.8738,
    lng: 2.295,
  },
  msm: {
    name: "Mont-Saint-Michel",
    city: "Le Mont-Saint-Michel",
    country: "France",
    description: "Le Mont-Saint-Michel a une longue histoire qui remonte à l'Antiquité. <strong>En 708,</strong> l'évêque Aubert fait construire un sanctuaire en l'honneur de l'archange saint Michel sur le mont Tombe. Des moines bénédictins s'y installent en 966 et construisent une abbaye pour accueillir des pèlerins. Au XIVe siècle, il devient une forteresse contre les Anglais. Aujourd'hui, c'est un site classé à l'Unesco.",
    lat: 48.636,
    lng: -1.5115,
  },
  dame: {
    name: "Notre-Dame de Paris",
    city: "Paris",
    country: "France",
    description: "Notre-Dame de Paris est une cathédrale gothique emblématique. Sa construction <strong>a débuté en 1163</strong> et s’est <strong>achevée au XIVe siècle.</strong> Elle a été le théâtre de nombreux événements historiques, comme le sacre de Napoléon et la canonisation de Jeanne d’Arc. Rendue célèbre par le roman de Victor Hugo, elle a été restaurée au XIXe siècle. En 2019, un incendie a gravement endommagé l’édifice, aujourd’hui en cours de restauration.",
    lat: 48.8566,
    lng: 2.3522,
  },
  coeur: {
    name: "La Basilique du Sacré-Cœur de Montmartre",
    city: "Paris",
    country: "France",
    description: "La Basilique du Sacré-Cœur de Montmartre, à Paris, a été construite entre <strong>1875 et 1914</strong> en réponse à la défaite française lors de la guerre franco-prussienne et à la Commune de Paris. Elle est dédiée au Sacré-Cœur de Jésus en tant que symbole de rédemption et de prière pour la France. Le projet a été lancé après la défaite de 1870 et les bouleversements sociaux et politiques de l’époque. Depuis son achèvement, elle est un lieu de pèlerinage et une icône de Paris.",
    lat: 48.8867,
    lng: 2.3431,
  },
  versailles: {
    name: "Château de Versailles",
    city: "Versailles",
    country: "France",
    description: "Le Château de Versailles a été transformé en résidence royale <strong>sous le règne de Louis XIV à partir de 1661.</strong> Initialement un pavillon de chasse, il devient le symbole du pouvoir absolu du roi. Le château, avec ses jardins et son parc, est agrandi et embelli au fil des années pour devenir un centre de la cour et du gouvernement. Versailles devient la résidence principale de la royauté <strong>en 1682,</strong> jusqu'à la Révolution française. Après la chute de la monarchie, le château est ouvert au public et est aujourd'hui un site touristique majeur, classé au patrimoine mondial de l'UNESCO.",
    lat: 48.8049,
    lng: 2.1204,
  },
  chambord: {
    name: "Le château de Chambord",
    city: "Chambord",
    country: "France",
    description: "Le château de Chambord, a été construit entre 1519 et 1547 à la demande de François Ier, qui souhaitait créer un symbole de sa puissance et de son amour pour les arts. Ce château est devenu l'emblème de la Renaissance française, célèbre pour son architecture unique et ses vastes jardins. Chambord a également été un lieu de rencontre pour de nombreuses personnalités historiques, renforçant son importance dans l'histoire de France.",
    lat: 47.6167,
    lng: 1.5167,
  }
};

const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll(".monument-gallery img");
const infoSection = document.getElementById("info");

function showMonumentInfo(id) {
  const monument = monuments[id];

  infoSection.innerHTML = `
    <div class="monument-info-content">
      <h2>${monument.name}</h2>
      <p><strong>Ville :</strong> ${monument.city}</p>
      <p><strong>Pays :</strong> ${monument.country}</p>
      <p><strong>Histoire : </strong>${monument.description}</p>
      <img src="maps/${id}-map.png" alt="Carte de ${monument.name}" class="map-screenshot" />
    </div>
  `;
  infoSection.classList.add("visible");

  setTimeout(() => {
    initMap(monument.lat, monument.lng);
  }, 100);

  updateImageSelection(id);
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    showMonumentInfo(btn.dataset.id);
  });
});

images.forEach(img => {
  img.addEventListener("click", () => {
    showMonumentInfo(img.dataset.id);
  });
});

function initMap(lat, lng) {
  const mapContainer = document.getElementById("map");
  mapContainer.innerHTML = "";

  const map = L.map(mapContainer).setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  L.marker([lat, lng]).addTo(map);
}

function updateImageSelection(selectedId) {
  images.forEach(img => {
    img.classList.toggle("selected", img.dataset.id !== selectedId); 
  });
}




 




let conf = null;
let currentPage = 0;
let loading = false;
const itemsPerPage = 20;

const ALL_GAMES_CONF = [
  {
    name: "2048-remastered",
    icon: "webp/2048-remastered.webp",
    url: "/games/2048-remastered/index.html",
  },
  {
    name: "alien-attack",
    icon: "webp/alien_attack.webp",
    url: "/games/alien-attack/index.html",
  },
  {
    name: "Amazing-bubble-breaker",
    icon: "webp/Amazing-bubble-breaker.webp",
    url: "/games/Amazing-bubble-breaker/index.html",
  },
  {
    name: "american-football-challenge",
    icon: "webp/american-football-challenge.webp",
    url: "/games/american-football-challenge/index.html",
  },
  {
    name: "zero21-solitaire",
    icon: "webp/zero21-solitaire.webp",
    url: "/games/zero21-solitaire/index.html",
  },
  {
    name: "awaken-the-ocean",
    icon: "webp/awaken-the-ocean.webp",
    url: "/games/awaken-the-ocean/index.html",
  },
  {
    name: "BallSortMaster",
    icon: "webp/BallSortMaster.webp",
    url: "/games/BallSortMaster/index.html",
  },
  {
    name: "BallSortPuzzle",
    icon: "webp/BallSortPuzzle.webp",
    url: "/games/BallSortPuzzle/index.html",
  },
  {
    name: "Basketball_Crazy",
    icon: "webp/Basketball_Crazy.webp",
    url: "/games/Basketball_Crazy/index.html",
  },
  {
    name: "basketball-legends-2020",
    icon: "webp/basketball-legends-2020.webp",
    url: "/games/basketball-legends-2020/index.html",
  },
  {
    name: "Basketball_REAL",
    icon: "webp/Basketball_REAL.webp",
    url: "/games/Basketball_REAL/index.html",
  },
  {
    name: "basket-slide",
    icon: "webp/basket-slide.webp",
    url: "/games/basket-slide/index.html",
  },
  {
    name: "basket-swooshes",
    icon: "webp/basket-swooshes.webp",
    url: "/games/basket-swooshes/index.html",
  },
  {
    name: "Bear_Boom",
    icon: "webp/Bear_Boom.webp",
    url: "/games/Bear_Boom/index.html",
  },
  {
    name: "Bird_Sort-main",
    icon: "webp/Bird_Sort-main.webp",
    url: "/games/Bird_Sort-main/index.html",
  },
  {
    name: "blastify2",
    icon: "webp/blastify2.webp",
    url: "/games/blastify2/index.html",
  },
  {
    name: "blend-fruits",
    icon: "webp/blend-fruits.webp",
    url: "/games/blend-fruits/index.html",
  },
  {
    name: "BlobOpera",
    icon: "webp/BlobOpera.webp",
    url: "/games/BlobOpera/index.html",
  },
  { name: "blocks8", icon: "webp/blocks8.webp", url: "/games/blocks8/index.html" },
  {
    name: "blockup-puzzle",
    icon: "webp/blockup-puzzle.webp",
    url: "/games/blockup-puzzle/index.html",
  },
  { name: "Blocky", icon: "webp/Blocky.webp", url: "/games/Blocky/index.html" },
  {
    name: "Blumgi_ball",
    icon: "webp/Blumgi_ball.webp",
    url: "/games/Blumgi_ball/index.html",
  },
  { name: "bridges", icon: "webp/bridges.webp", url: "/games/bridges/index.html" },
  {
    name: "bubble-up",
    icon: "webp/bubble-up.webp",
    url: "/games/bubble-up/index.html",
  },
  {
    name: "bubble-up-endless",
    icon: "webp/bubble-up-endless.webp",
    url: "/games/bubble-up-endless/index.html",
  },
  {
    name: "BuildingAHouse",
    icon: "webp/BuildingAHouse.webp",
    url: "/games/BuildingAHouse/index.html",
  },
  {
    name: "Bus_Driving",
    icon: "webp/Bus_Driving.webp",
    url: "/games/Bus_Driving/index.html",
  },
  {
    name: "Bus_Parking_King",
    icon: "webp/Bus_Parking_King.webp",
    url: "/games/Bus_Parking_King/index.html",
  },
  {
    name: "butterfly-shimai",
    icon: "webp/butterfly-shimai.webp",
    url: "/games/butterfly-shimai/index.html",
  },
  {
    name: "CandyBlast",
    icon: "webp/CandyBlast.webp",
    url: "/games/CandyBlast/index.html",
  },
  {
    name: "candyCrush",
    icon: "webp/candyCrush.webp",
    url: "/games/candyCrush/index.html",
  },
  { name: "car-out", icon: "webp/car-out.webp", url: "/games/car-out/index.html" },
  {
    name: "Christmas_Connect",
    icon: "webp/Christmas_Connect.webp",
    url: "/games/Christmas_Connect/index.html",
  },
  { name: "Circles", icon: "webp/Circles.webp", url: "/games/Circles/index.html" },
  {
    name: "CocktailSort",
    icon: "webp/CocktailSort.webp",
    url: "/games/CocktailSort/index.html",
  },
  {
    name: "colored-bricks",
    icon: "webp/colored-bricks.webp",
    url: "/games/colored-bricks/index.html",
  },
  {
    name: "color-strings",
    icon: "webp/color-strings.webp",
    url: "/games/color-strings/index.html",
  },
  {
    name: "color-tunnel",
    icon: "webp/color-tunnel.webp",
    url: "/games/color-tunnel/index.html",
  },
  {
    name: "connect-me",
    icon: "webp/connect-me.webp",
    url: "/games/connect-me/index.html",
  },
  {
    name: "connect-merge",
    icon: "webp/connect-merge.webp",
    url: "/games/connect-merge/index.html",
  },
  {
    name: "crazy_parking",
    icon: "webp/crazy_parking.webp",
    url: "/games/crazy_parking/index.html",
  },
  {
    name: "CubeJump",
    icon: "webp/CubeJump.webp",
    url: "/games/CubeJump/index.html",
  },
  {
    name: "Cube_Tower",
    icon: "webp/Cube_Tower.webp",
    url: "/games/Cube_Tower/index.html",
  },
  { name: "cubito", icon: "webp/cubito.webp", url: "/games/cubito/index.html" },
  {
    name: "Dance_Battle",
    icon: "webp/Dance_Battle.webp",
    url: "/games/Dance_Battle/index.html",
  },
  {
    name: "DD-2K-Shoot",
    icon: "webp/DD-2K-Shoot.webp",
    url: "/games/DD-2K-Shoot/index.html",
  },
  {
    name: "dd-alpha-balls",
    icon: "webp/dd-alpha-balls.webp",
    url: "/games/dd-alpha-balls/index.html",
  },
  {
    name: "dd-blastify",
    icon: "webp/dd-blastify.webp",
    url: "/games/dd-blastify/index.html",
  },
  {
    name: "dd-bottle-flip",
    icon: "webp/dd-bottle-flip.webp",
    url: "/games/dd-bottle-flip/index.html",
  },
  {
    name: "dd-knots",
    icon: "webp/dd-knots.webp",
    url: "/games/dd-knots/index.html",
  },
  {
    name: "dd-pick-it",
    icon: "webp/dd-pick-it.webp",
    url: "/games/dd-pick-it/index.html",
  },
  {
    name: "dd-pizza-pickup",
    icon: "webp/dd-pizza-pickup.webp",
    url: "/games/dd-pizza-pickup/index.html",
  },
  {
    name: "dd-sand-sort-puzzle",
    icon: "webp/dd-sand-sort-puzzle.webp",
    url: "/games/dd-sand-sort-puzzle/index.html",
  },
  {
    name: "DefenderMaster1",
    icon: "webp/DefenderMaster1.webp",
    url: "/games/DefenderMaster1/index.html",
  },
  {
    name: "DiamondDungeon",
    icon: "webp/DiamondDungeon.webp",
    url: "/games/DiamondDungeon/index.html",
  },
  {
    name: "Difference_Fun",
    icon: "webp/Difference_Fun.webp",
    url: "/games/Difference_Fun/index.html",
  },
  {
    name: "Differences_Find",
    icon: "webp/Differences_Find.webp",
    url: "/games/Differences_Find/index.html",
  },
  {
    name: "Dinosaurs",
    icon: "webp/Dinosaurs.webp",
    url: "/games/Dinosaurs/index.html",
  },
  {
    name: "disk-rush",
    icon: "webp/disk-rush.webp",
    url: "/games/disk-rush/index.html",
  },
  {
    name: "donut-box",
    icon: "webp/donut-box.webp",
    url: "/games/donut-box/index.html",
  },
  {
    name: "dotted-fill",
    icon: "webp/dotted-fill.webp",
    url: "/games/dotted-fill/index.html",
  },
  { name: "DrawIn", icon: "webp/DrawIn.webp", url: "/games/DrawIn/index.html" },
  {
    name: "DrawTheDefense",
    icon: "webp/DrawTheDefense.webp",
    url: "/games/DrawTheDefense/index.html",
  },
  {
    name: "Dream_Home_Merge_Design",
    icon: "webp/Dream_Home_Merge_Design.webp",
    url: "/games/Dream_Home_Merge_Design/index.html",
  },
  {
    name: "drift-dudes",
    icon: "webp/drift-dudes.webp",
    url: "/games/drift-dudes/index.html",
  },
  {
    name: "dummies-world-cup",
    icon: "webp/dummies-world-cup.webp",
    url: "/games/dummies-world-cup/index.html",
  },
  {
    name: "DunkLine",
    icon: "webp/DunkLine.webp",
    url: "/games/DunkLine/index.html",
  },
  {
    name: "dunk-shot",
    icon: "webp/dunk-shot.webp",
    url: "/games/dunk-shot/index.html",
  },
  {
    name: "emoji-flow",
    icon: "webp/emoji-flow.webp",
    url: "/games/emoji-flow/index.html",
  },
  {
    name: "endlessseige",
    icon: "webp/endlessseige.webp",
    url: "/games/endlessseige/index.html",
  },
  {
    name: "Epic_Blocollapse",
    icon: "webp/Epic_Blocollapse.webp",
    url: "/games/Epic_Blocollapse/index.html",
  },
  { name: "equalz", icon: "webp/equalz.webp", url: "/games/equalz/index.html" },
  { name: "fill", icon: "webp/fill.webp", url: "/games/fill/index.html" },
  {
    name: "filling-lines",
    icon: "webp/filling-lines.webp",
    url: "/games/filling-lines/index.html",
  },
];

function applyHomeSeo() {
  const c = window.SITE_CONFIG;
  const url = c.domain + '/';
  const host = new URL(c.domain).hostname;
  const setMeta = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };

  document.title = c.siteName + ' - ' + host;
  setMeta('meta[name="description"]',       'content', c.description);
  setMeta('meta[name="keywords"]',          'content', c.keywords);
  setMeta('link[rel="canonical"]',          'href',    url);
  setMeta('meta[property="og:title"]',      'content', c.siteName);
  setMeta('meta[property="og:description"]','content', c.description);
  setMeta('meta[property="og:url"]',        'content', url);
  setMeta('meta[property="og:image"]',      'content', c.ogImage);
  setMeta('meta[name="twitter:title"]',     'content', c.siteName);
  setMeta('meta[name="twitter:description"]','content', c.description);
}

async function fetchGames() {
  try {
    applyHomeSeo();
    conf = shuffleArray([...ALL_GAMES_CONF]);
    renderMultiItems("multi-games", 12, 16, 4);
    renderStarsItems("stars-games", 20, 40, 4);
    renderNamesItems("names-games", 50, 70, 4);

    //setUpScrollListener(baseUrl);
  } catch (error) {
    console.error("load game config failed:", error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderMultiItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  gamesToDisplay.forEach((game) => {
    const item = appendMultiItems(game, itemsPerRow);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendMultiItems(game, itemsPerRow) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-multi-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  link.appendChild(img);
  wrapper.appendChild(link);
  return wrapper;
}

function renderStarsItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  gamesToDisplay.forEach((game) => {
    const item = appendStarsItems(game, itemsPerRow);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendStarsItems(game, itemsPerRow) {
  const randomRating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const fullStars = Math.floor(randomRating);
  const emptyStars = 5 - fullStars;
  const stars = "★".repeat(fullStars) + "☆".repeat(emptyStars);

  const wrapper = document.createElement("div");
  wrapper.className = "game-stars-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  let fontSize = 10;
  if (itemsPerRow <= 3) {
    fontSize = 15;
  } else if (itemsPerRow <= 5) {
    fontSize = 12;
  }

  const starsDiv = document.createElement("div");
  starsDiv.className = "game-stars-star";
  starsDiv.textContent = stars;
  starsDiv.style.fontSize = `${fontSize}px`;

  link.appendChild(img);
  link.appendChild(starsDiv);
  wrapper.appendChild(link);
  return wrapper;
}

function renderLikesItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  gamesToDisplay.forEach((game) => {
    const item = appendLikesItems(game, itemsPerRow);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendLikesItems(game, itemsPerRow) {
  const randomLikes = (Math.random() * (8 - 1) + 1).toFixed(1);
  const likes = `${randomLikes}K`;
  const likesWithPlay = `${likes} play`;

  const wrapper = document.createElement("div");
  wrapper.className = "game-likes-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  let fontSize = 10;
  if (itemsPerRow <= 3) {
    fontSize = 15;
  } else if (itemsPerRow <= 5) {
    fontSize = 12;
  }

  const likesDiv = document.createElement("div");
  likesDiv.className = "game-likes-play";
  likesDiv.textContent = likesWithPlay;
  likesDiv.style.fontSize = `${fontSize}px`;

  link.appendChild(img);
  link.appendChild(likesDiv);
  wrapper.appendChild(link);
  return wrapper;
}

function renderNamesItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.style.gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  gamesToDisplay.forEach((game) => {
    const item = appendNamesItems(game, itemsPerRow);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendNamesItems(game, itemsPerRow) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-names-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  let fontSize = 10;
  let name = game.name;
  if (itemsPerRow <= 3) {
    fontSize = 13;
    if (name.length > 10) {
      name = name.substring(0, 10) + "...";
    }
  } else if (itemsPerRow <= 4) {
    fontSize = 10;
    if (name.length > 8) {
      name = name.substring(0, 8) + "...";
    }
  } else if (itemsPerRow <= 5) {
    fontSize = 9;
    if (name.length > 6) {
      name = name.substring(0, 6) + "...";
    }
  } else {
    fontSize = 8;
    if (name.length > 3) {
      name = name.substring(0, 3) + "...";
    }
  }

  const namesDiv = document.createElement("div");
  namesDiv.className = "game-names-name";
  namesDiv.textContent = name;
  namesDiv.style.fontSize = `${fontSize}px`;

  link.appendChild(img);
  link.appendChild(namesDiv);
  wrapper.appendChild(link);
  return wrapper;
}

const CTA_TEXTS = [
  "\u{1F525} Play Now and Enjoy",
  "\u{1F680} Start Playing Today",
  "\u{1F3AF} Discover Your Next Adventure",
  "\u{1F3AE} Find Your Next Favorite Game",
  "\u{1F44D} Explore New Challenges",
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderHclksItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  let ctaQueue = shuffle(CTA_TEXTS);
  let ctaIndex = 0;

  gamesToDisplay.forEach((game) => {
    const ctaText = ctaQueue[ctaIndex];
    ctaIndex++;
    if (ctaIndex >= ctaQueue.length) {
      ctaQueue = shuffle(CTA_TEXTS);
      ctaIndex = 0;
    }

    const item = appendHclksItems(game, ctaText);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendHclksItems(game, ctaText) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-hclks-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;
  link.className = "game-hclks-link";

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  const cardDesc = document.createElement("div");
  cardDesc.className = "game-hclks-desc";

  const nameDiv = document.createElement("div");
  nameDiv.className = "game-hclks-desc-name breathing";
  nameDiv.textContent = ctaText;
  cardDesc.appendChild(nameDiv);

  link.appendChild(img);
  link.appendChild(cardDesc);
  wrapper.appendChild(link);
  return wrapper;
}

function renderCardsItems(containerId, startIndex, endIndex, itemsPerRow) {
  if (!conf) return;

  const gameList = document.getElementById(containerId);
  if (!gameList) return;

  gameList.innerHTML = "";

  const gamesToDisplay = conf.slice(startIndex, endIndex);
  const fragment = document.createDocumentFragment();

  gamesToDisplay.forEach((game) => {
    const item = appendCardsItems(game, itemsPerRow);
    fragment.appendChild(item);
  });
  gameList.appendChild(fragment);
}

function appendCardsItems(game, itemsPerRow) {
  const wrapper = document.createElement("div");
  wrapper.className = "game-cards-item";

  const link = document.createElement("a");
  link.href = `detail/index.html?name=${encodeURIComponent(game.name)}&icon=${encodeURIComponent(game.icon)}&path=${encodeURIComponent(window.location.origin + game.url)}`;
  link.className = "game-cards-link";

  const img = document.createElement("img");
  img.loading = "lazy";
  img.src = game.icon;

  const cardDesc = document.createElement("div");
  cardDesc.className = "game-cards-desc";

  const nameDiv = document.createElement("div");
  nameDiv.className = "game-cards-desc-name";
  nameDiv.textContent = game.name;
  cardDesc.appendChild(nameDiv);

  const minLikes = 1000;
  const maxLikes = 8000;
  const randomLikes = Math.floor(Math.random() * (maxLikes - minLikes + 1)) + minLikes;
  const likesPlayer = (randomLikes / 1000).toFixed(1) + "K";

  const likesDiv = document.createElement("div");
  likesDiv.className = "game-cards-desc-likes";
  likesDiv.textContent = `${likesPlayer} Likes Player`;
  cardDesc.appendChild(likesDiv);

  link.appendChild(img);
  link.appendChild(cardDesc);
  wrapper.appendChild(link);
  return wrapper;
}

function setUpScrollListener(baseUrl) {
  window.addEventListener("scroll", () => {
    if (loading) return;
    if (currentPage * itemsPerPage >= conf.length) return;

    if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 300) {
      loading = true;
      currentPage++;
      const startIndex = currentPage * itemsPerPage;
      const endIndex = (currentPage + 1) * itemsPerPage;
      renderNamesItems("names-games", startIndex, endIndex, 4, baseUrl);
      loading = false;
    }
  });
}

fetchGames();

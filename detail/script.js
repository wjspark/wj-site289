function getParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}

window.addEventListener('DOMContentLoaded', () => {
  const gameName = getParam('name');
  const iconUrl = decodeURIComponent(getParam('icon'));
  let gamePath = decodeURIComponent(getParam('path'));

  if (gamePath) {
    try {
      gamePath = decodeURIComponent(gamePath);
    } catch (e) {
      console.warn('Invalid encoded URL in path param:', gamePath);
    }
  }

  document.getElementById('game-name').textContent = gameName;
  const resolvedIcon = iconUrl && !iconUrl.startsWith('http') ? '../' + iconUrl : iconUrl;
  document.getElementById('game-icon').src = resolvedIcon;

  // SEO
  const c = window.SITE_CONFIG;
  const host = new URL(c.domain).hostname;
  const canonicalUrl = c.domain + '/detail/index.html' + window.location.search;
  const gameTitle = gameName + ' | ' + c.siteName + ' - ' + host;
  const gameDesc = 'Play ' + gameName + ' free online. ' + c.description;
  const ogImg = resolvedIcon.startsWith('http') ? resolvedIcon : c.domain + '/' + iconUrl;
  const setMeta = (sel, attr, val) => { const el = document.querySelector(sel); if (el) el.setAttribute(attr, val); };

  document.title = gameTitle;
  setMeta('meta[name="description"]',        'content', gameDesc);
  setMeta('meta[name="keywords"]',           'content', gameName + ', ' + c.keywords);
  setMeta('link[rel="canonical"]',           'href',    canonicalUrl);
  setMeta('meta[property="og:title"]',       'content', gameTitle);
  setMeta('meta[property="og:description"]', 'content', gameDesc);
  setMeta('meta[property="og:url"]',         'content', canonicalUrl);
  setMeta('meta[property="og:image"]',       'content', ogImg);
  setMeta('meta[name="twitter:title"]',      'content', gameTitle);
  setMeta('meta[name="twitter:description"]','content', gameDesc);

  const progress = document.querySelector('.play-progress');
  const playButton = document.querySelector('.play-button');

  let percent = 0;
  let isReady = false;
  let nextGameUrl = null;

  // 预加载下一个随机游戏
  fetch('../games.json')
    .then(r => r.json())
    .then(games => {
      const others = games.filter(g => g.name !== gameName);
      const pick = others[Math.floor(Math.random() * others.length)];
      nextGameUrl = `index.html?name=${encodeURIComponent(pick.name)}&icon=${encodeURIComponent(pick.icon)}&path=${encodeURIComponent(window.location.origin + pick.url)}`;
    })
    .catch(() => {});

  const interval = setInterval(() => {
    percent += 2;
    if (percent <= 100) {
      progress.style.width = `${percent}%`;
      progress.textContent = `${percent}%`;
    }
    if (percent >= 100) {
      clearInterval(interval);
      progress.style.width = '100%';
      progress.textContent = 'Play';
      isReady = true;
      playButton.style.cursor = 'pointer';
    }
  }, 60);

  playButton.addEventListener('click', () => {
    if (!isReady) return;
    window.location.href = nextGameUrl || gamePath;
  });

});


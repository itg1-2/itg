// ============================================================
// HOW TO ADD A NEW ARTICLE — READ THIS FIRST!
// ============================================================
// 1. Open this file (script.js) on GitHub.
//    - Go to your repo on github.com
//    - Click on "script.js" in the file list
//    - Click the pencil (edit) icon in the top-right corner
//
// 2. Find the "articles" array below. It starts with:
//       const articles = [
//    and ends with
//       ];
//
// 3. To add a new article, paste a new block like this
//    INSIDE the brackets, before the final ];
//    Make sure there's a comma after the previous article.
//
//    TEMPLATE — copy and fill in your details:
//
//    {
//      title: "Your Headline Goes Here",
//      tag: "news",
//      excerpt: "Short 1-2 sentence preview shown on the card.",
//      date: "May 9, 2026",
//      author: "Andrew Vincenti",
//      content: `
//        <p>First paragraph of your article.</p>
//        <p>Second paragraph.</p>
//        <p>Keep adding as many paragraphs as you need.</p>
//      `
//    },
//
// 4. RULES (important!):
//    - Title, tag, excerpt, date, author go inside "double quotes"
//    - The content field uses BACKTICKS (`) not quotes — that's the
//      key to the left of the 1 on your keyboard
//    - Wrap each paragraph in <p> and </p> tags
//    - Put a comma after every closing } of an article block
//    - Do NOT delete the opening [ or closing ];
//
// 5. When done, scroll to the bottom of the GitHub page,
//    type a short description like "Add Raptors article",
//    and click "Commit changes". The site updates automatically!
//
// ============================================================

const articles = [

  // ── ARTICLE 1 ───────────────────────────────────────────
  // To add more articles, copy the block below and paste it
  // right after this one (still inside the [ ] brackets).
  {
    title: "Why the Raptors Are a Better Franchise Than the Knicks",
    tag: "opinion",
    excerpt: "From Kawhi Leonard's iconic shot to their 2019 championship, Toronto has built something New York hasn't come close to matching.",
    date: "May 9, 2026",
    author: "Inside The Garden Staff",
    content: `
      <p>It is a painful truth that Knicks fans have long refused to accept: the Toronto Raptors, a franchise that did not even exist until 1995, have already lapped the New York Knicks in terms of organizational success, championship hardware, and all-time talent. While Madison Square Garden has hosted some of the most passionate fans in basketball history, passion alone does not win championships — and Toronto has proven that ruthless efficiency, smart drafting, and one transcendent acquisition can do what decades of Knicks mismanagement never could.</p>
      <p>Start with Kawhi Leonard, a player who in two seasons as a Raptor accomplished more than any Knick has managed across the franchise's entire existence. His buzzer-beater against Philadelphia in the 2019 playoffs — a four-bounce moment that felt ripped from a movie script — remains the single most iconic shot in the last two decades of the sport. No Knick, from Patrick Ewing to Carmelo Anthony to Jalen Brunson, has delivered a moment that comes close. Leonard is simply the best player to ever suit up for a Canadian franchise, and it is not a debate.</p>
      <p>The 2019 championship run itself was a masterclass in organizational excellence. General Manager Masai Ujiri made a bold, high-risk trade to acquire Leonard, paired him with a quietly elite supporting cast, and watched the Raptors defeat Golden State's dynasty when it mattered most. The Knicks, meanwhile, spent that same era cycling through head coaches, wasting cap space on aging veterans, and missing the playoffs entirely. Toronto won a title. New York won the lottery — and still couldn't get it right.</p>
      <p>Beyond the championship, the Raptors have cultivated a franchise culture that produces results year after year. They developed Kyle Lowry into an All-Star, turned second-round picks into contributors, and established an identity that did not depend on landing a superstar in free agency. The Knicks have spent thirty years dangling the bright lights of New York in hopes that stars would come, and when they finally did — Carmelo Anthony, for instance — the results were playoff exits and broken promises. Toronto built; New York wished.</p>
      <p>None of this is meant to dismiss what the Knicks are becoming. The current core, led by Brunson, is exciting and the Garden is electric again. But franchises are judged by their history, their trophies, and their defining moments — and on all three counts, the Raptors have the Knicks beat. A banner hangs in Scotiabank Arena that no amount of fan passion or media market size can erase. Until one hangs in Madison Square Garden, the argument is Toronto's to win.</p>
    `
  },

  // ── ADD YOUR NEXT ARTICLE HERE ──────────────────────────
  // Paste a new article block below this comment.
  // Don't forget the comma after the last article above!

];

// ============================================================
// EVERYTHING BELOW THIS LINE RUNS THE SITE.
// DO NOT EDIT UNLESS YOU KNOW WHAT YOU ARE DOING.
// ============================================================

let currentArticle = null;

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

function openArticle(index) {
  currentArticle = articles[index];
  const page = document.getElementById('page-article');

  document.getElementById('article-tag').textContent = currentArticle.tag;
  document.getElementById('article-title').textContent = currentArticle.title;
  document.getElementById('article-meta').textContent = currentArticle.date + ' · ' + currentArticle.author;
  document.getElementById('article-body').innerHTML = currentArticle.content || '<p>' + currentArticle.excerpt + '</p>';

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  page.classList.add('active');
  window.scrollTo(0, 0);
}

function renderArticles(list, containerId) {
  const el = document.getElementById(containerId);
  if (!list.length) {
    el.innerHTML = '<div class="empty-state">No stories yet. Check back soon.</div>';
    return;
  }
  el.innerHTML = '<div class="articles-grid">' + list.map((a, i) => `
    <div class="article-card" onclick="openArticle(${articles.indexOf(a)})">
      <div class="article-img">New York Knicks</div>
      <div class="article-body">
        <span class="article-tag">${a.tag}</span>
        <h3>${a.title}</h3>
        <p>${a.excerpt}</p>
        <div class="article-meta">
          <span>${a.date}</span>
          <span>·</span>
          <span>${a.author}</span>
        </div>
      </div>
    </div>`).join('') + '</div>';
}

// Initial render
renderArticles(articles, 'home-articles');
renderArticles(articles, 'news-articles');

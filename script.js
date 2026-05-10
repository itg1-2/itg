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
      title: "Knicks are the best NBA team",
      tag: "news",
      excerpt: "Knicks are the best.",
      date: "May 9, 2026",
      author: "Andrew Vincenti",
      content: `
        <p>This is the first paragraph. You can add as many sentences as you want.</p>
        <p>Second paragraph.</p>
        <p>Keep adding as many paragraphs as you need.</p>
        <p>I accidentally deleted my first screen recording attempt.</p>
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
      <div class="article-img">Inside the Garden</div>
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

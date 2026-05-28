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
      title: "Eastern Conference Finals Preview: Are the Knicks destined for the NBA Finals?",
      tag: "news",
      excerpt: "Can the red-hot Knicks avenge the disappointment of last season?",
      date: "May 18, 2026",
      author: "Andrew Vincenti",
      content: `
        <p>Following Cleveland’s 125-94 dismantling of the Detroit Pistons last night, the stage is set for a rematch of the 2023 first round series between Knicks and the Cavaliers, only this time they are fighting for a spot in the NBA Finals.</p>
        <p>Prediction markets currently give the Knicks upward of a 70% chance to win the series and honestly it's not hard to see why.</p>
        <p>The Knicks were preseason favorites to come out of the East, and while their regular season campaign was disappointing, the team has found its stride in the postseason, winning its last seven games in dominant fashion. The Orange and Blue have been the hottest team in the East all postseason, behind elite production and marksmanship from Jalen Brunson, the emergence of Karl Anthony Towns as a viable playmaking threat, and a strong team defense that has allowed the fewest points per game of any team these playoffs.</p>
        <p>While the Knicks have boasted the largest point differential of the postseason so far, their sweep of the Philadelphia 76ers have them entering the conference finals nine days removed from game time action. The team will have to shake off some rust while also looking to reintegrate its two-way star in OG Anunoby, who missed the back half of the 76ers series with a hamstring strain.</p>
        <p>On the other hand, the Cavaliers are riding into Game 1 in full stride, having survived another game seven to take down the No.1 seed, while also winning four of their last five games. While the Knicks are their toughest challenge yet, the Cavs have the Big 4 of Donovan Mitchell, James Harden, Evan Mobley, and Jarrett Allen to match their opponent’s star talent. The team is battle tested after two hard fought series, and has posted the fourth highest offensive rating in the postseason thus far, but inconsistency plagues The Land.</p>
        <p>Harden has been incredibly erratic, as while his heroics in overtime of Game 3 against the Pistons saved the season, he has also been a turnover machine, having five games with more turnovers than field goals made. Combine that with Mobley’s unreliable offensive game, streaky shooting form Max Strus, and a defense that ranks 12th of the 16 teams in the postseason and the Cavs look vulnerable entering the Eastern Conference Finals.</p>
        <p>Ultimately, in the battle between a Cavaliers team trying to make its first Finals appearance without Lebron and a Knicks team hungry to avenge the shortcomings of last season, I have the Knicks comfortably winning in six games.</p>
        <p>The Knicks have been the better team so far this postseason, they have the best player in the series in Brunson, they have strong point of attack defenders in Anunoby and Mikal Bridges to throw at the Cavs guard tandem, while the Cavs lack anyone to slow down Brunson one-on-one and their inconsistencies on offense will be exploited by the hounding Knicks defense. I think this series goes to six because the Cavs have strong defensive bigs in Allen and last season’s DPOY in Mobley, who can make things hard for Towns, which is only made worse by the uncertainty of what Anunby’s production will look like post-injury.</p>
        <p>Ultimately, this series feels like the Knicks’ to lose and last season’s heart-crushing loss to the Pacers should fuel them to finally make it over the hump and to the NBA Finals.</p> 

      `
    },

  // ── ADD YOUR NEXT ARTICLE HERE ──────────────────────────
  // Paste a new article block below this comment.
  // Don't forget the comma after the last article above!
{
      title: "Welcome to New York: Knicks sweep the Cavaliers to clinch their first NBA Finals berth since 1999",
      tag: "news",
      excerpt: "After a historic collapse in game 1, the Cavs ultimately couldn’t survive the concrete jungle.",
      date: "May 28, 2026",
      author: "Andrew Vincenti",
      content: `
      <p>The New York Knicks are heading to the NBA Finals for the first time since 1999. While the news is exciting enough on its own, the most promising part is how the Knicks have arrived here.</p>
      <p>The Orange and Blue haven’t just been winning games - they have been absolutely dominating their opponents. 11 straight wins, back-to-back sweeps, the best net rating in NBA postseason history by a comfortable margin, and the largest playoff point differential in NBA history doesn’t even tell the full story. The Knicks have proven to be killers these playoffs, whether it has been coming back in historic fashion in Game 1 of the Eastern Conference Finals or winning by an average margin of 40 points in elimination games.</p> 
      <p>The Cavs were not spared from the Orange and Blue barrage. After their historic collapse in Game 1, the Cavaliers simply looked defeated. No game for the rest of the series was particularly close, with the Knicks winning comfortably by double digits every game, including a 37-point demolition in game 4 where the Cavs looked like they had already quit. But at least The Land can take solace in the fact that, analytically, they won two out of the first three games.</p>
      <p>With Game 1 of the NBA Finals a mere week away, it is important to look at not just the fact that the Knicks are winning, but how they are winning. The Knicks’ lethality comes from a far more diversified offense compared to last season, combined with a suffocating defense.</p> 
      <p>A Revamped Offense:</p>
      <p>While last postseason, the Knicks offense often looked stagnant and reliant on tough shots and “Brunson ball” to bail them out, this season the offense looks entirely revamped. The Knicks lead the league in assists this postseason, which comes in no small part due to Karl Anthony Towns emerging as a legitimate playmaking threat. The big man has averaged 6 assists these playoffs, a major step up from the 1.3 that he averaged last season. With the ball moving around, OG Anunoby, Mikal Bridges, Landry Shamet, and even Josh Hart have all been able to find their roles in the offense and step up when needed, which was crucial in the Eastern Conference Finals.</p>
      <p>Defense Fueling The Break:</p>
      <p>The Knicks defense has helped fuel their offense. The team employs an aggressive style of defense that prioritizes switching and allows their wing duo of Bridges and All-Defensive 2nd Teamer OG to roam like free safeties to disrupt opposing offenses. Behind their elite defensive wing duo, the Knicks have wreaked havoc, posting a +16 turnover differential in the Eastern Conference Finals, including a Game 4 where the Cavs recorded 22 turnovers that the Knicks turned into 34 points on the other end.</p>
      <p>The Ultimate Test Awaits:</p>
      <p>With their diverse offense and hounding defense delivering the most dominant 10-game stretch in the league’s history against some of the best opponents in the East, the Knicks enter the NBA Finals scorching hot. Knicks fans once again have hope, hope for a team that has run through the Eastern Conference in historic fashion and is led by “Captain Clutch,” who always seems to meet the moment when the lights shine the brightest.</p>
      <p>While the Knicks are yet to face their toughest challenge yet, awaiting the winners of the Thunder-Spurs series, the Orange and Blue have clinched their first NBA Finals this century, as fans await to see if the Concrete Jungle is truly where dreams are made of.</p>
    
      `  

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

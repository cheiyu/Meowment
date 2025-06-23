const newsData = [
  {
    date: "2025-06-18",
    category: "found",
    title: "肉丸被領養啦！準備展開新貓生",
    text: "圓滾滾的肉丸被認養啦～雖然我們不捨，但更多的是替牠開心！祝福肉丸在新家吃飽睡好，過著被寵愛的每一天！",
    img: "img/news_cat_meatball.svg",
  },
  {
    date: "2025-06-15",
    category: "found",
    title: "圈圈找到家囉！開心啟程去幸福",
    text: "圈圈終於找到牠的幸福歸屬了！感謝領養家庭的接納，讓這隻親人又撒嬌的小貓能展開新生活，一起邁向溫暖未來。",
    img: "img/news_cat_quan.svg",
  },
  {
    date: "2025-06-14",
    category: "found",
    title: "旺萊被領養啦！開心出發～",
    text: "可愛的旺萊展開新生活囉！感謝新家庭的溫暖接納，願牠每天都能幸福快樂地成長！",
    img: "img/news_cat_wanglai.png",
  },
  {
    date: "2025-06-10",
    category: "activity",
    title: "貓貓的下午茶日記",
    text: "來喵啡館喝下午茶吧！這個月推出「貓貓下午茶日記」主題活動，有主題甜點、限定拍照牆，還有貓咪陪你喝茶唷～",
    img: "img/news/newscat-meowtea.png",
  },
  {
    date: "2025-06-01",
    category: "activity",
    title: "認養幸福季・送你一份溫暖",
    text: "配合「認養幸福季」，領養即贈專屬迎新小禮物，還有免費健康諮詢。",
    img: "img/news/newscat-adoption.png",
  },
  {
    date: "2025-05-30",
    category: "activity",
    title: "貓星人寫真月・票選你最愛的貓臉！",
    text: "快來參加貓星人寫真月活動！票選你最愛的貓臉，還有機會獲得小禮物～",
    img: "img/news/newscat-pic.jpg",
  },
  {
    date: "2025-06-08",
    category: "daily",
    title: "喵店長偷吃點心現場直擊！",
    text: "喵店長被抓包啦～讓你看到牠最真實（也最貪吃）的一面，笑翻全場！",
    img: "img/news/food.png",
  },
  {
    date: "2025-05-28",
    category: "daily",
    title: "客人來訪・貓貓們的撒嬌日常公開",
    text: "貓貓們個個超會撒嬌，歡迎來體驗這療癒的一天。",
    img: "img/news/meow.jpg",
  },
  {
    date: "2025-05-25",
    category: "daily",
    title: "貓咪午睡集錦・萌翻全場",
    text: "喵星人們的午睡時間來啦～各種睡姿超萌！",
    img: "img/news/sleep.jpg",
  },
  {
    date: "2025-06-05",
    category: "arrival",
    title: "新成員報到・「麻吉」加入大家庭",
    text: "帥氣又溫馴的「麻吉」是我們的新夥伴！",
    img: "img/meow-adoption/cat_machi.svg",
  },
  {
    date: "2025-05-20",
    category: "arrival",
    title: "毛茸茸的驚喜・迎接「小花」的到來",
    text: "超軟綿的「小花」來啦～牠的撒嬌功力滿點！",
    img: "img/meow-adoption/cat_hua.svg",
  },
  {
    date: "2025-05-18",
    category: "arrival",
    title: "可愛爆擊・「小胖」正式入住！",
    text: "牠的圓滾滾身形和呆萌臉蛋讓大家都尖叫啦～",
    img: "img/meow-adoption/cat_chubby.svg",
  },
];
const categoryNames = {
  found: "找到家啦",
  activity: "最新活動",
  daily: "咖啡廳日常",
  arrival: "貓咪來報到",
};
const newsList = document.getElementById("news-list");
const prevBtn = document.getElementById("prev-page");
const nextBtn = document.getElementById("next-page");
const pageNumbersContainer = document.getElementById("page-numbers");
let currentPage = 1;
const itemsPerPage = 4;
let currentCategory = "all";

function renderNews() {
  newsList.innerHTML = "";
  const filtered =
    currentCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category === currentCategory);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const visible = filtered.slice(start, start + itemsPerPage);

  visible.forEach((item) => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
          <div class="news-img"><img src="${item.img}" /></div>
          <div class="news-content">
            <p class="news-date">${item.date}｜${
      categoryNames[item.category]
    }</p>
            <p class="news-subtitle">${item.title}</p>
            <p class="news-txt">${item.text}</p>
          </div>
        `;
    newsList.appendChild(card);
  });

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;

  prevBtn.classList.toggle("disabled", currentPage === 1);
  nextBtn.classList.toggle("disabled", currentPage === totalPages);

  // render page numbers
  pageNumbersContainer.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.style.fontWeight = "bold";
    btn.addEventListener("click", () => {
      currentPage = i;
      renderNews();
    });
    pageNumbersContainer.appendChild(btn);
  }
}

document.querySelectorAll(".category-nav button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".category-nav button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    currentPage = 1;
    renderNews();
  });
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderNews();
  }
});

nextBtn.addEventListener("click", () => {
  const filtered =
    currentCategory === "all"
      ? newsData
      : newsData.filter((item) => item.category === currentCategory);
  if (currentPage < Math.ceil(filtered.length / itemsPerPage)) {
    currentPage++;
    renderNews();
  }
});

renderNews();

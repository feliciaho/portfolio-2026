// 側選單
const App = {
  data() {
    return {
      // services: [
      //   {
      //     type: "網頁開發",
      //     name: "Website development",
      //     price: "$5,000~$15,000TWD 細節請詳談",
      //     company: ["Landing Page 一頁式網頁", "網站設計", "官網建置", "WordPress", "Webflow", "Vue.js", "Api串接", "Figma UIUX設計"],
      //     list: [
      //       "Landing Page 一頁式網頁： 專為行銷轉換設計，結合動態效果與高質感視覺，精準抓住客戶目光。",
      //       "企業官網建置： 從資訊架構規劃、Figma UI 介面設計到前端程式實作，提供完整解決方案。",
      //       "WordPress / Webflow 多樣化平台架站解決方案： 能根據維護能力與預算，為您在系統生態與高度設計感之間，量身打造美感與效能兼具的網站。",
      //       "前端框架與API 串接： 依專案需求彈性切換技術方案，不論是使用 Vue.js 現代化框架、或是以 JavaScript/jQuery 進行 RESTful API 串接實現動態資料展示，皆能精準完成。"
      //     ],
      //   },
      //   {
      //     type: "視覺設計",
      //     name: "Graphic Design",
      //     price: "$2,000~$10,000TWD 細節請詳談",
      //     company: [
      //       "Banner設計",
      //       "插畫設計",
      //       "logo設計",
      //       "遊戲UIUX設計",
      //     ],
      //     list: [
      //       "高點擊率 Banner 設計： 擅長運用精緻合成與強烈視覺張力，打造吸睛且具高轉化率的活動廣告素材。",
      //       "品牌視覺與 Logo 設計： 為品牌量身打造具辨識度且符合核心精神的視覺標誌與識別系統。",
      //       "手繪與插畫設計： 具備靈活的插畫風格，能針對專案需求提供客製化手繪素材，提升品牌視覺的獨特性與溫度。",
      //       "遊戲 UI/UX 視覺設計： 提供充滿沉浸感的遊戲介面規劃，包含元件庫建立（Buttons, Icons）、階層資訊排版及風格提案。",
      //     ],
      //   },
      // ],
      bannerDesign: [
        {
          name: "GALLEON 100 SD",
          img: [
            "images/galleon_banner/01.jpg",
            "images/galleon_banner/02.jpg",
            "images/galleon_banner/03.jpg",
            "images/galleon_banner/04.jpg",
          ],
          company: "Corsair",
          concept: "Modern & Futuristic",
        },
        {
          name: "NIGHTSWORD v2 WIRELESS SD",
          img: [
            "images/nightsword_banner/01.jpg",
            "images/nightsword_banner/02.jpg",
            "images/nightsword_banner/03.jpg",
          ],
          company: "Corsair",
          concept: "Modern & Futuristic",
        },
        // {
        //   name: "HS80 v2 MAX WIRELSS",
        //   img: [
        //     "images/hs80_banner/01.jpg",
        //     "images/hs80_banner/02.jpg",
        //     "images/hs80_banner/03.jpg",
        //     "images/hs80_banner/04.jpg",
        //   ],
        //   company: "Corsair",
        //   concept: "Modern & Futuristic",
        // },
        {
          name: "Gumayusi Collection",
          img: [
            "images/gumayusi_banner/02.jpg",
            "images/gumayusi_banner/01.jpg",
          ],
          company: "Corsair",
          concept: "Modern & Futuristic",
        },
        {
          name: "MapleStory",
          img: [
            "images/mapleStory/01.jpg",
            "images/mapleStory/02.jpg",
          ],
          company: "Gamania",
          concept: "Modern & Futuristic",
        },
        {
          name: "Arena of Valor",
          img: [
            "images/aovYue/01.jpg",
            "images/aovYue/02.jpg",
            "images/aovYue/03.jpg",
            "images/aovYue/04.jpg",
            "images/aovYue/05.jpg",
            "images/aovYue/06.jpg",
          ],
          company: "Garena",
          concept: "Modern & Futuristic",
        },
        {
          name: "Lost Ark",
          img: [
            "images/lostark/04.jpg",
            "images/lostark/03.jpg",
            "images/lostark/01.jpg",
          ],
          company: "Happytuk",
          concept: "Modern & Futuristic",
        },
        // {
        //   name: "A.V.A",
        //   img: [
        //     "images/avaBanner/01.png",
        //     "images/avaBanner/02.jpg",
        //     "images/avaBanner/04.png",
        //   ],
        //   company: "Happytuk",
        //   concept: "Modern & Futuristic",
        // },
        {
          name: "New Winter Collection Launch",
          img: [
            "images/clothes/01.jpg",
            "images/clothes/02.jpg",
          ],
          concept: "Modern & Futuristic",
          company: "Fashion E-commerce",
        },
      ],
      amzDesign: [
        {
          name: "VOID v2 WIRELSSS MAX",
          img: [
            "images/void_amz/01.jpg",
            "images/void_amz/02.jpg",
            "images/void_amz/03.jpg",
            "images/void_amz/04.jpg",
            "images/void_amz/05.jpg",
            "images/void_amz/06.jpg",
            "images/void_amz/07.jpg",
            "images/void_amz/08.jpg",
            "images/void_amz/09.jpg",
          ],
          company: "Corsair",
        },
        {
          name: "CLIPPER PRO 60",
          img: [
            "images/clipper_amz/01.jpg",
            "images/clipper_amz/02.jpg",
            "images/clipper_amz/03.jpg",
            "images/clipper_amz/04.jpg",
            "images/clipper_amz/05.jpg",
            "images/clipper_amz/06.jpg",
            "images/clipper_amz/07.jpg",
            "images/clipper_amz/08.jpg",
            "images/clipper_amz/09.jpg",
            "images/clipper_amz/10.jpg",
            "images/clipper_amz/11.jpg",
          ],
          company: "Corsair",
        },
        {
          name: "SABRE v2 WIRELSSS CF Gumayusi Edition",
          img: [
            "images/sabre_amz/01.jpg",
            "images/sabre_amz/02.jpg",
            "images/sabre_amz/03.jpg",
            "images/sabre_amz/04.jpg",
            "images/sabre_amz/05.jpg",
            "images/sabre_amz/06.jpg",
            "images/sabre_amz/07.jpg",
            "images/sabre_amz/08.jpg",
            "images/sabre_amz/09.jpg",
            "images/sabre_amz/10.jpg",
            "images/sabre_amz/11.jpg",
            "images/sabre_amz/12.jpg",
            "images/sabre_amz/13.jpg",
          ],
          company: "Corsair",
        },
        // {
        //   name: "VANGUARD PRO 90 Gumayusi Edition",
        //   img: [
        //     "images/vanguard_amz/01.jpg",
        //     "images/vanguard_amz/02.jpg",
        //     "images/vanguard_amz/03.jpg",
        //     "images/vanguard_amz/04.jpg",
        //     "images/vanguard_amz/05.jpg",
        //     "images/vanguard_amz/06.jpg",
        //     "images/vanguard_amz/07.jpg",
        //     "images/vanguard_amz/08.jpg",
        //     "images/vanguard_amz/09.jpg",
        //     "images/vanguard_amz/10.jpg",
        //     "images/vanguard_amz/11.jpg",
        //     "images/vanguard_amz/12.jpg",
        //     "images/vanguard_amz/13.jpg",
        //     "images/vanguard_amz/14.jpg",
        //     "images/vanguard_amz/15.jpg",
        //     "images/vanguard_amz/16.jpg",
        //   ],
        //   company: "Corsair",
        // },
      ],
      printDesign: [
        // {
        //   name: "A.V.A Offline Tournament: Print & Digital Media Design",
        //   img: [
        //     "images/avaPrint/01.jpg",
        //     "images/avaPrint/02.jpg",
        //     "images/avaPrint/03.jpg",
        //     "images/avaPrint/04.jpg",
        //     "images/avaPrint/05.jpg",
        //   ],
        //   company: "Happytuk",
        //   concept: "Modern & Futuristic",
        // },
        {
          name: "Gumayusi Collection",
          img: [
            // "images/gumayusi_pkg/01.jpg",
            "images/gumayusi_pkg/02.jpg",
            "images/gumayusi_pkg/03.jpg",
            "images/gumayusi_pkg/04.jpg",
            "images/gumayusi_pkg/05.jpg",
            "images/gumayusi_pkg/06.jpg",
          ],
          company: "Corsair",
          concept: "Modern & Futuristic",
        },
        // {
        //   name: "GALLEON 100 SD white",
        //   img: [
        //     "images/pkg/01.jpg",
        //   ],
        //   company: "Corsair",
        //   concept: "Modern & Futuristic",
        // },
        {
          name: "SABRE v3 PureVector ULTRALIGHT",
          img: [
            "images/pkg/02.jpg",
            "images/pkg/03.jpg",
          ],
          company: "Corsair",
          concept: "Modern & Futuristic",
        },
      ],
      officialWebsites: [
        {
          name: "Hostel Booking Website",
          skill: [
            "Figma",
            "Figma MCP to Crusor",
            "HTML",
            "SASS",
            "Javascript",
            "RESTful API",
            "Vue",
            "Vite",
          ],
          company: "Felicia Ho's studio",
          concept: "Modern & Futuristic",
          webUrl: "https://feliciaho.github.io/bookingWeb/#/homeView",
          githubUrl: "https://github.com/feliciaho/bookingWeb",
          figmaUrl: "https://www.figma.com/design/IWVbELJiG1oS9CLWX8PUBx/Hotel-Booking-Web?node-id=0-1&p=f",
          seeMore: true,
          github: true,
          figma: true,
          img: [
            "images/booking_web/01.jpg",
            "images/booking_web/02.png",
          ],
        },
        {
          name: "Recipe Website",
          skill: ["HTML", "SASS", "Javascript", "RESTful API", "Vue", "Vite"],
          company: "Felicia Ho's studio",
          concept: "Modern & Futuristic",
          webUrl: "https://feliciaho.github.io/recipeWeb_new/#/homeView",
          githubUrl: "https://github.com/feliciaho/recipeWeb_new",
          seeMore: true,
          github: true,
          figma: false,
          img: [
            "images/recipe_web/01.jpg",
            "images/recipe_web/02.png",
          ],
        },
        {
          name: "Cabel: Official Website",
          company: "Digeam",
          concept: "Modern & Futuristic",
          skill: ["PhotoShop", "Illustrator", "HTML", "SASS", "Javascript"],
          webUrl: "https://cbo.digeam.com/index",
          seeMore: true,
          github: false,
          figma: false,
          img: [
            "images/cabel_web/01.png",
            "images/cabel_web/02.png",
          ],
        },
        {
          name: "Twinkle Star Kinights: Landing Page",
          company: "Aurer",
          concept: "Modern & Futuristic",
          skill: ["PhotoShop", "Illustrator"],
          seeMore: false,
          github: false,
          img: [
            "images/aurer_web/01.png",
            "images/aurer_web/02.png",
          ],
        },
      ],
      // landingPage: [
      //   {
      //     name: "LostArk: Landing Page Website Development",
      //     // name: "LostArk: Landing Page Website Development",
      //     company: ["Pug", "SASS", "jQuery", "Vue", "Gulp", "CICD"],
      //     webUrl:
      //       "https://landing.mangot5.com/template/lostark/event/250327_pletze/index.html",
      //     githubUrl: "https://github.com/feliciaho/250327_pletze",
      //     img: "images/lostarkBanner.jpg",
      //   },
      //   // {
      //   //   name: "巨商活動頁",
      //   //   name: "Gersang: Landing Page Website Development",
      //   //   company: ["Pug", "SASS", "JQuery", "Gulp", "CICD"],
      //   //   webUrl:
      //   //     "https://landing.mangot5.com/template/gs/event/240712_thunderroar/index.html",
      //   //   githubUrl: "https://github.com/feliciaho/240712_thunderroar",
      //   //   img: "images/gersangBanner.jpg",
      //   // },
      //   {
      //     name: "XA: Landing Page Website Development",
      //     // name: "XA: Landing Page Website Development",
      //     company: ["Pug", "SASS", "jQuery", "Gulp", "CICD"],
      //     webUrl: "https://landing.mangot5.com/template/xa/event/250113_anniversary/index.html",
      //     githubUrl: "https://github.com/feliciaho/250113_anniversary",
      //     img: "images/xaBanner.jpg",
      //   },
      //   {
      //     name: "Sharpe: Landing Page Website Development",
      //     // name: "Sharpe: Landing Page Website Development",
      //     company: ["HTML", "CSS", "JQuery"],
      //     webUrl: "https://tw.sharp/refrigerator/2511event_dualdoor/index.html",
      //     githubUrl: "https://github.com/feliciaho/202511_refrigerator_SP",
      //     img: "images/sharpBanner.jpg",
      //   },
      //   // {
      //   //   name: "黑色契約活動頁",
      //   //   name: "Cabel Landing Page",
      //   //   company: ["HTML", "SASS", "javascript", "Vue", "RESTful API"],
      //   //   webUrl: "https://feliciaho.github.io/cbo_20240129",
      //   //   githubUrl: "https://github.com/feliciaho/cbo_20240129",
      //   //   img: "images/cboBanner.png",
      //   // },
      // ],
      // websiteDesign: [
      //   {
      //     name: "Cabel: Official Website UIUX Design",
      //     // name: "Cabel: Official Website UIUX Design",
      //     webUrl: "https://cbo.digeam.com/index",
      //     img: [
      //       "images/cabelOfficial/1.jpg",
      //       "images/cabelOfficial/2.jpg",
      //       "images/cabelOfficial/3.jpg",
      //     ],
      //   },
      //   {
      //     name: "Cabel: Landing Page Website Design",
      //     // name: "Cabel: Landing Page Website Design",
      //     webUrl: "https://cbo.digeam.com/OBT",
      //     img: ["images/cabelActivity/1.jpg"],
      //   },
      //   {
      //     name: "Ghost: Landing Page  Website Design",
      //     // name: "Ghost: Landing Page  Website Design",
      //     webUrl: "https://feliciaho.github.io/ghost_20231220",
      //     img: ["images/ghost/1.jpg", "images/ghost/2.jpg"],
      //   },
      //   // {
      //   //   name: "仙俠活動頁",
      //   //   name: "XX2: Landing Page Website Design",
      //   //   img: ["images/xx2/1.jpg", "images/xx2/2.jpg"],
      //   // },
      //   {
      //     name: "夢想飛飛兩周年慶活動頁",
      //     name: "Flyff: Landing Page Website Design",
      //     img: [
      //       "images/flyff/1.jpg",
      //       "images/flyff/2.jpg",
      //       "images/flyff/3.jpg",
      //     ],
      //   },
      // ],
      // industrialDesign: [
      //   {
      //     name: "PANRADISE 眼睛舒緩套組：產品開發與視覺設計",
      //     name: "PANRADISE: Eye Relief Set Product Design & Visualization",
      //     img: [
      //       "images/industrial/01.jpg",
      //       "images/industrial/02.jpg",
      //       "images/industrial/03.jpg",
      //       "images/industrial/04.jpg",
      //       "images/industrial/05.jpg",
      //       "images/industrial/06.jpeg",
      //     ],
      //     company: [
      //       "Photoshop",
      //       "Illustrator",
      //       "Keyshot",
      //       "Solidworks",
      //     ],
      //   },
      // ],
    };
  },
  methods: {
    scrollToTop(page) {
      // 滾動到指定的頁面
      const element = document.querySelector(page);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.querySelectorAll(".mySwiper1").forEach((element) => {
      new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          768: {
            spaceBetween: 30,
          },
        },
        loop: true,
        pagination: {
          el: element.querySelector(".swiper-pagination"),
          clickable: true,
        },
        navigation: {
          nextEl: element.querySelector(".swiper-button-next"),
          prevEl: element.querySelector(".swiper-button-prev"),
        },
      });
    });
    document.querySelectorAll(".mySwiper2").forEach((element) => {
      new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        },
        pagination: {
          el: element.querySelector(".swiper-pagination"),
          clickable: true,
        },
        // autoplay: {
        //   delay: 1500,
        //   disableOnInteraction: false,
        // },
        loop: true,
      });
    });
  },
};
Vue.createApp(App).mount("#app");

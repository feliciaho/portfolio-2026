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
          concept: [
            "Campaign Goal: Announce a special promotional bundle where purchasing the keyboard grants instant access to free, custom-tailored game profiles.",
            "Design Strategy: Created three immersive thematic directions inspired by Cyberpunk, Arc Raiders, and Diablo, leveraging AI generation to build custom background environments unique to each universe.",
            "Visual Execution: Arranged dynamic, floating profile icons around the keyboard to instantly hook fans of specific titles and highlight the product's versatile ecosystem.",
            "Impact: Boosted user engagement and drove the CTR to 2.13% for the Galleon 100 SD campaign by designing customized, multi-style banners and leveraging AI tools to target diverse gaming audiences."
          ],
        },
        {
          name: "NIGHTSWORD v2 WIRELESS SD",
          img: [
            "images/nightsword_banner/02.jpg",
            "images/nightsword_banner/03.jpg",
            "images/nightsword_banner/01.jpg",
          ],
          company: "Corsair",
          concept: [
            "Campaign Goal: Align with the headline \"SPAWN INFINITE COMMANDS\" to highlight unlimited macro and profile customization.",
            "Design Strategy: Highlight the NIGHTSWORD v2 WIRELESS SD as the pioneer gaming mouse integrated with Virtual Stream Deck functionality.",
            "Visual Execution: Densely layer the background with Virtual Stream Deck profiles to visually reinforce the mouse's powerful multitasking and control capabilities."
          ],
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
          concept: [
            "Campaign Goal: Partner with renowned esports star Gumayusi to launch an exclusive co-branded collection, building massive star power and community hype.",
            "Design Strategy: Position Gumayusi as the dominant visual anchor—intentionally scaling him larger than the products—to instantly grab fans' attention and drive emotional resonance.",
            "Visual Execution: Structure the two-part banner series logically: the first highlights his star power with a signature aesthetic, while the second seamlessly transitions to showcasing the full product ecosystem under a cohesive starry gold theme.",
            "Brand Impact: Delivered a high-converting, fan-centric visual campaign that successfully maximized audience engagement and brand desire."
          ],
        },
        {
          name: "MapleStory",
          img: [
            "images/mapleStory/01.jpg",
            "images/mapleStory/02.jpg",
          ],
          company: "Gamania",
          concept: [
            "Campaign Goal: Drive daily check-ins and user engagement by offering fans personalized player certificates and a chance to win exclusive raffle prizes.",
            "Design Strategy: Developed two distinct visual directions to maximize appeal—a nostalgic, vintage paper style for official certification and a vibrant, playful universe for community celebration.",
            "Visual Execution: Designed the first banner as a textured \"Classic Certificate\" notice and the second around MapleStory’s iconic character Pink Bean to create a fun, friendly festive atmosphere.",
            "Engagement Focus: Included dynamic call-outs (\"Share to Print\") and reward previews to encourage active fan participation and social sharing."
          ],
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
          concept: [
            "Campaign Goal: Announce the new skin \"Yue: Crown of the Fallen\" by starting with a mysterious teaser and then showing full gameplay and skills.",
            "Design Strategy: Used purple and gold colors, elegant fonts, and classical borders to show the character's mysterious, graceful, and dangerous vibe.",
            "Visual Execution: Designed a mystery letter with a silhouette at first, followed by clear skill guides and pro-player gear tips.",
            "Targeted Engagement: Added a bold, magazine-style banner to bring in different types of players and make the campaign more fun."
          ],
        },
        {
          name: "Lost Ark",
          img: [
            "images/lostark/04.jpg",
            "images/lostark/03.jpg",
            "images/lostark/01.jpg",
          ],
          company: "Happytuk",
          concept: [
            "Campaign Goal: Announce new game characters or skin releases to keep fans engaged and excited.",
            "Design Strategy: Customized the banner designs based on the unique style of each character or skin.",
            "Visual Execution: Designed a camera-film style for the first banner to showcase multiple new outfits at once, a school uniform style for the second, and a high-tech sci-fi style to highlight the new character in the third.",
            "Targeted Engagement: Tailored the visuals for each update to instantly capture fans' attention and match the theme of the new content."
          ],
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
        // {
        //   name: "New Winter Collection Launch",
        //   img: [
        //     "images/clothes/01.jpg",
        //     "images/clothes/02.jpg",
        //   ],
        //   // concept: ["Modern & Futuristic"],
        //   // company: "Fashion E-commerce",
        // },
      ],
      motionDesign: [
        {
          name: "Gumayusi LCD Gif",
          img: [
            "images/gumayusi_gif/gumayusi_gif01.gif",
            "images/gumayusi_gif/gumayusi_gif02.gif",
            "images/gumayusi_gif/gumayusi_gif03.gif",
            "images/gumayusi_gif/gumayusi_gif04.gif",
          ],
          company: "Corsair",
          concept: [
            "Campaign Goal: Boost keyboard sales and excite fans by offering exclusive, custom-animated pixel art GIFs on the LCD screen with every purchase.",
            "Design Strategy: Designed a series of charming, retro-style pixel visuals featuring the renowned esports star Gumayusi to create a cute yet immersive gaming atmosphere.",
            "Motion Execution: Created four diverse pixel-style animations, including his signature archery move as an in-game hero, an adorable scene of him playing games in his gaming room, and other themed concepts.",
          ],
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
          concept: [
            "Campaign Goal: Design and package an exclusive gaming peripherals collaboration with esports star Gumayusi, delivering a high-value collector's item to fans.",
            "Design Strategy: Adopted a signature black and gold aesthetic, transforming the main visual's shooting star into a dynamic bullet trail over a starry night sky to reflect his precision.",
            "Visual Execution: Designed comprehensive packaging details including side panels featuring his career championship milestones and bio, a dedicated purple-themed box for the matching mouse-pad, and an exclusive gold-toned fan photo card complete with his autograph and a handwritten note.",
            "Business Impact: Designed packaging, banners, and photo cards that supported a product launch generating over US$337K in revenue opportunities within just one month."
          ],
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
          concept: [
            "Campaign Goal: Design an official, standard packaging box for the Sabre V3 Pro wireless gaming mouse, establishing a strong and recognizable retail presence.",
            "Design Strategy: Adopted CORSAIR’s iconic signature yellow and black color scheme to maintain brand consistency and create maximum shelf impact.",
            "Visual Execution: Placed clear feature icons directly on the front panel to instantly highlight key performance specs, including its ultralight 37g weight, high polling rate, and PureVector technology.",
          ],
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
          concept: [
            "Campaign Goal: Design and develop a comprehensive hostel booking website and admin dashboard to deliver a seamless reservation and management experience.",
            "Design Strategy: Adopted a tropical resort visual style inspired by Bali, utilizing a rich palette of green tones and light hues to create an immersive, relaxing rainforest atmosphere.",
            "Visual & Technical Execution: Streamlined the design-to-code workflow by combining Cursor with the latest MCP technology, reducing manual HTML/CSS coding costs, while building a robust frontend with Vue.js, Vite, and RESTful APIs for complete room browsing, date selection, and order submission flows.",
            "Impact: Integrated GitHub CI/CD for automated deployment and version control, while delivering a fully functional admin backend to ensure efficient property and order management."
          ],
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
          concept: [
            "Campaign Goal: Design and develop a comprehensive recipe platform, featuring a user-friendly frontend recipe browser for food lovers.",
            "Design Strategy: Adopted a resort-inspired tropical rainforest visual style, utilizing a vibrant orange color palette to stimulate appetite, combined with soft rounded corners to create a warm and cozy atmosphere.",
            "Visual & Technical Execution: Built the frontend using Vue.js and Vite, integrating RESTful APIs to implement seamless recipe browsing, search, and bookmarking functions, while ensuring an efficient design-to-code workflow.",
            "Project Impact: Integrated GitHub Actions CI/CD for automated deployment and version management, boosting development efficiency, platform stability, and overall user experience."
          ],
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
          concept: [
            "Campaign Goal: Designed key pages including the homepage, announcement page, download, and event pages to build a complete user journey and interface flow for the PC-only game.",
            "Design Strategy: Collaborated closely with PMs and front-end engineers from initial drafts to final implementation, ensuring visual consistency and usability without the need for RWD due to timeline constraints.",
            "Visual Execution: Adopted a retro fantasy style inspired by the game's universe, utilizing heavy silver and metallic textures to build an immersive atmosphere.",
            "Impact: Successfully bridged design and front-end development, delivering a polished, high-fidelity gaming portal that matches the original game aesthetics."
          ],
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
          concept: [
            "Campaign Goal: Design and develop a clean, engaging landing page (web version) to announce the launch of the new game and introduce its core gameplay.",
            "Design Strategy: Adopted a bright Japanese aesthetic that strictly follows the game's brand guidelines, using a lively and cute visual approach with rounded typography and a dominant blue color palette.",
            "Visual Execution: Built an immersive product presentation featuring a smooth game image carousel, creating a cheerful and welcoming atmosphere that highlights the game's unique charm to incoming players."
          ],
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
    document.querySelectorAll(".mySwiperMotion").forEach((element) => {
      new Swiper(element, {
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        },
        pagination: {
          el: element.querySelector(".swiper-pagination"),
          clickable: true,
        },
        loop: false,
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

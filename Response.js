export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "7320000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "0e83e7e2fd6862e8c",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "7320000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "0e83e7e2fd6862e8c",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.551913,
    formattedSearchTime: "0.55",
    totalResults: "7320000",
    formattedTotalResults: "7,320,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "<b>Hello World</b>",
      link: "https://www.google.com/uds/samples/apidocs/helloworld.html",
      displayLink: "www.google.com",
      formattedUrl:
        "https://www.google.com/uds/samples/apidocs/helloworld.html",
      htmlFormattedUrl:
        "https://www.google.com/uds/samples/apidocs/<b>helloworld</b>.html",
    },
    {
      kind: "customsearch#result",
      title: "Hello World Shopping",
      htmlTitle: "<b>Hello World</b> Shopping",
      link: "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it",
      displayLink: "www.google.com",
      snippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...",
      htmlSnippet:
        "Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...",
      cacheId: "q0-peCHq4tIJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            name: "Hello World Shopping",
            description: "Hello World Shopping",
            url: "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World Shopping",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World Shopping",
            "og:title": "Hello World Shopping",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
            "og:description": "Hello World Shopping",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World! Processing",
      htmlTitle: "<b>Hello World</b>! Processing",
      link: "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
      displayLink: "www.google.com",
      snippet:
        "Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      htmlSnippet:
        "<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.",
      cacheId: "LkrfSTqN6ZAJ",
      formattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      htmlFormattedUrl:
        "https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            name: "Hello World! Processing",
            description: "Hello World! Processing",
            url: "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World! Processing",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description": "Hello World! Processing",
            "og:title": "Hello World! Processing",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
            "og:description": "Hello World! Processing",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Street View – Google Earth Education",
      htmlTitle: "Street View – Google <b>Earth</b> Education",
      link: "https://www.google.com/earth/education/tools/street-view/",
      displayLink: "www.google.com",
      snippet:
        "Hello World. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that ...",
      htmlSnippet:
        "<b>Hello World</b>. Google collects Street View imagery by driving, pedaling, sailing and walking around and capturing imagery with special cameras that&nbsp;...",
      cacheId: "3JVjy8mTuWQJ",
      formattedUrl: "https://www.google.com/earth/education/tools/street-view/",
      htmlFormattedUrl:
        "https://www.google.com/<b>earth</b>/education/tools/street-view/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRPZfrHx-q2hW2XybZmW_HVHjH9SjxMpXPG1eFgrSP4_lPw7fScrssNPSg",
            width: "259",
            height: "194",
          },
        ],
        metatags: [
          {
            viewport: "width=device-width, initial-scale=1.0",
            "og:title": "Street View",
            "og:url":
              "https://www.google.com/earth/education/tools/street-view/",
          },
        ],
        cse_image: [
          {
            src: "https://i1.ytimg.com/vi/UrS9AVPUMFQ/hqdefault.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "The World of Hello World - Google マイマップ",
      htmlTitle: "The World of <b>Hello World</b> - Google マイマップ",
      link: "https://www.google.com/maps/d/edit?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&ie=UTF8&oe=UTF-8&hl=ja&q&om=1&z=1&ll=15.284185,96.328125&spn=174.260301,360&msa=0",
      displayLink: "www.google.com",
      snippet:
        "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, ...",
      htmlSnippet:
        "A map of programming languages and rough locations in the <b>world</b> where they were created. Colors correspond to four major epochs: blue - first languages,&nbsp;...",
      cacheId: "O9Rk61WDXfcJ",
      formattedUrl: "https://www.google.com/maps/d/edit?mid...",
      htmlFormattedUrl: "https://www.google.com/maps/d/edit?mid...",
      pagemap: {
        website: [
          {
            image:
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            name: "The World of Hello World - Google マイマップ",
            description:
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs: blue - first languages, green - establishing paradigms, yellow...",
            url: "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "apple-itunes-app":
              "app-id=585027354, app-argument=comgooglemaps://?mapsurl=https://www.google.com/mymaps/viewer?mid%3D1j9wMaiQ12jiqpEFD1HgZ3QPuPDk%26hl%3Dja",
            "og:type": "website",
            "twitter:card": "summary_large_image",
            "twitter:title": "The World of Hello World - Google マイマップ",
            "og:site_name": "Google My Maps",
            viewport:
              "initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width",
            "twitter:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "og:title": "The World of Hello World - Google マイマップ",
            "og:url":
              "https://www.google.com/maps/d/viewer?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
            "og:description":
              "A map of programming languages and rough locations in the world where they were created. Colors correspond to four major epochs:\n blue - first languages,\n  green - establishing paradigms,\n  yellow - consolidation and modules,\n  pink - the Internet age.",
            "twitter:image:src":
              "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/maps/d/thumbnail?mid=1j9wMaiQ12jiqpEFD1HgZ3QPuPDk&hl=ja",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
      htmlTitle:
        "<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance",
      link: "https://www.google.com/finance/quote/HLO:ASX",
      displayLink: "www.google.com",
      snippet:
        "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...",
      htmlSnippet:
        "Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...",
      cacheId: "24Jok8mq6O4J",
      formattedUrl: "https://www.google.com/finance/quote/HLO:ASX",
      htmlFormattedUrl: "https://www.google.com/finance/quote/HLO:ASX",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8",
            width: "311",
            height: "162",
          },
        ],
        metatags: [
          {
            "application-name": "Google Finance",
            "og:image":
              "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
            "theme-color": "#ffffff",
            "og:type": "website",
            "og:image:width": "770",
            "twitter:card": "summary",
            "twitter:title":
              "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
            "apple-mobile-web-app-title": "Google Finance",
            "og:title":
              "Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance",
            "og:image:height": "402",
            "og:description":
              "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
            "twitter:image":
              "https://ssl.gstatic.com/finance/favicon/finance_496x496.png",
            referrer: "origin",
            "apple-mobile-web-app-status-bar-style": "default",
            "msapplication-tap-highlight": "no",
            "twitter:site": "@google",
            viewport:
              "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui",
            "apple-mobile-web-app-capable": "yes",
            "twitter:description":
              "Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.",
            "mobile-web-app-capable": "yes",
            "og:url": "https://www.google.com/finance/quote/HLO:ASX",
          },
        ],
        cse_image: [
          {
            src: "https://ssl.gstatic.com/finance/favicon/finance_770x402.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Earth",
      htmlTitle: "Google <b>Earth</b>",
      link: "https://www.google.com/earth/index.html",
      displayLink: "www.google.com",
      snippet:
        "Create stories and maps. With creation tools, you can draw on the map, add your photos and videos, customize your view, and share and collaborate with ...",
      htmlSnippet:
        "Create stories and maps. With creation tools, you can draw on the map, add your photos and videos, customize your view, and share and collaborate with&nbsp;...",
      cacheId: "hG4K3PHoZqAJ",
      formattedUrl: "https://www.google.com/earth/index.html",
      htmlFormattedUrl: "https://www.google.com/<b>earth</b>/index.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2iTbFc46zcN_-4vw73SSiOqqud55-3a81RiHCSkbw7pyXozBNG-RUggxs",
            width: "282",
            height: "179",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://gweb-earth.storage.googleapis.com/assets/google_earth_banner.jpg",
            "og:type": "website",
            "og:site_name": "Google Earth",
            viewport:
              "width=device-width, initial-scale=1.0, maximum-scale=2.0, height=device-height",
            "og:title": "Overview – Google Earth",
            "og:url": "https://www.google.com/earth/",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/intl/en_us/earth/assets/static/images/studio_video_mobile_poster.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Search - Discover How Google Search Works",
      htmlTitle: "Google Search - Discover How Google Search Works",
      link: "https://www.google.com/search/howsearchworks/",
      displayLink: "www.google.com",
      snippet:
        "Our mission is to organize the world's information and make it universally accessible and useful. It starts with Google Search.",
      htmlSnippet:
        "Our mission is to organize the <b>world&#39;s</b> information and make it universally accessible and useful. It starts with Google Search.",
      cacheId: "QaaN9KCyEasJ",
      formattedUrl: "https://www.google.com/search/howsearchworks/",
      htmlFormattedUrl: "https://www.google.com/search/howsearchworks/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGS3cygt5kGAiZY-7hO8fSAHJHy5cC3mlOzc5Dbg3h6qghrry_RtnEAEo",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "og:type": "website",
            "twitter:card": "summary",
            "twitter:title": "Google Search - Discover How Google Search Works",
            "og:site_name": "Google Search - Discover How Google Search Works",
            "og:title": "Google Search - Discover How Google Search Works",
            "og:description":
              "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
            "og:image:secure_url":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            "twitter:image":
              "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
            referrer: "no-referrer",
            viewport: "width=device-width, initial-scale=1.0",
            "twitter:description":
              "Wondering how Google Search works? Learn how Google looks through and organizes all the information on the internet to give you the most useful and relevant Search results in a fraction of a second.",
            "og:locale": "en",
            "og:url": "https://www.google.com/search/howsearchworks/",
          },
        ],
        cse_image: [
          {
            src: "https://lh3.googleusercontent.com/dnpoiu9aopdadx61b_R8SlKyCHQIBNSTlYKOqUdZ1J8RPl3dGu1i57tmb7KzVEgpjdD_wc-CFirNtxU3wDiS9b1ZNAYxqq4tyojt5X4Q",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "World Bank, World Development Indicators - Google Public Data ...",
      htmlTitle:
        "<b>World</b> Bank, <b>World</b> Development Indicators - Google Public Data ...",
      link: "https://www.google.com/publicdata/explore?ds=wb-wdi",
      displayLink: "www.google.com",
      snippet:
        "World Bank, World Development Indicators. Data from World Bank, World Development Indicators. World Bank, subset of World Development Indicators (WDI).",
      htmlSnippet:
        "<b>World</b> Bank, <b>World</b> Development Indicators. Data from <b>World</b> Bank, <b>World</b> Development Indicators. <b>World</b> Bank, subset of <b>World</b> Development Indicators (WDI).",
      cacheId: "GbiWdxcilOcJ",
      formattedUrl: "https://www.google.com/publicdata/explore?ds=wb-wdi",
      htmlFormattedUrl: "https://www.google.com/publicdata/explore?ds=wb-wdi",
      pagemap: {
        metatags: [
          {
            fragment: "!",
            "com.google.dataspaces.frontend.publicview.client.explorepageprodmodule_i18n::gwt:property":
              "baseUrl=/publicdata/gwt/",
          },
        ],
        thing: [
          {
            name: "World Bank, World Development Indicators",
            description:
              "World Bank, subset of World Development Indicators (WDI) Data from World Bank, World Development Indicators Powered by Google",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Google Chrome Privacy Whitepaper",
      htmlTitle: "Google Chrome Privacy Whitepaper",
      link: "https://www.google.com/chrome/privacy/whitepaper.html",
      displayLink: "www.google.com",
      snippet:
        "Feb 4, 2021 ... This document also describes the controls available to you regarding how your data is used by Chrome. Here we're focusing on the desktop version ...",
      htmlSnippet:
        "Feb 4, 2021 <b>...</b> This document also describes the controls available to you regarding how your data is used by Chrome. Here we&#39;re focusing on the desktop version&nbsp;...",
      cacheId: "t67Y-xu-jmsJ",
      formattedUrl: "https://www.google.com/chrome/privacy/whitepaper.html",
      htmlFormattedUrl: "https://www.google.com/chrome/privacy/whitepaper.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKOXFpJVF_Xz2cq8bSojiNKHJUoBzHsj8n3Sdsy1dQnCNO135b0qOVTw",
            width: "48",
            height: "48",
          },
        ],
        metatags: [
          {
            "msapplication-config":
              "/chrome/static/images/favicons/browserconfig.xml",
            "og:image":
              "https://www.google.com/chrome/static/images/chrome-logo.svg",
            "twitter:card": "summary_large_image",
            "twitter:title": "Google Chrome Privacy Whitepaper",
            "og:type": "website",
            "twitter:url":
              "https://www.google.com/chrome/privacy/whitepaper.html",
            "og:title": "Google Chrome Privacy Whitepaper",
            "og:description": "Google Chrome Privacy Whitepaper",
            "twitter:image":
              "https://www.google.com/chrome/static/images/chrome-logo.svg",
            viewport: "width=device-width, initial-scale=1",
            "twitter:description": "Google Chrome Privacy Whitepaper",
            "og:locale": "en_US",
            "og:url": "https://www.google.com/chrome/privacy/whitepaper.html",
          },
        ],
        cse_image: [
          {
            src: "https://www.google.com/chrome/static/images/chrome-logo.svg",
          },
        ],
      },
    },
  ],
};

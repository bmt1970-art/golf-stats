// Scorecards oficials dels camps de P&P
// Font: quimriera.cat + dades manuals
// Par: tots 3 (Pitch & Putt)
// SI: Stroke Index (1=mes difícil, 18=mes fácil)
// dist: distancia oficial en metres
// dist2: distancia sortida alternativa (9 forats doble sortida)

const SCORECARDS = {

  // ===== CAMPS JUGATS =====

  "Roc 3 Pitch & Putt": {
    web: "www.roc3.es", phone: "936 562 590",
    holes: [
      { h:1,  par:3, dist:101, si:8  },
      { h:2,  par:3, dist:120, si:3  },
      { h:3,  par:3, dist:71,  si:16 },
      { h:4,  par:3, dist:66,  si:17 },
      { h:5,  par:3, dist:84,  si:9  },
      { h:6,  par:3, dist:67,  si:2  },
      { h:7,  par:3, dist:69,  si:1  },
      { h:8,  par:3, dist:82,  si:7  },
      { h:9,  par:3, dist:94,  si:11 },
      { h:10, par:3, dist:52,  si:4  },
      { h:11, par:3, dist:115, si:6  },
      { h:12, par:3, dist:70,  si:5  },
      { h:13, par:3, dist:71,  si:14 },
      { h:14, par:3, dist:91,  si:10 },
      { h:15, par:3, dist:60,  si:18 },
      { h:16, par:3, dist:89,  si:13 },
      { h:17, par:3, dist:95,  si:12 },
      { h:18, par:3, dist:94,  si:15 },
    ]
  },

  "Par 3 Gualta": {
    web: "www.gualta.com", phone: "972 760 338",
    // Dues sortides: dist = sortida llarga / dist2 = sortida curta
    holes: [
      { h:1,  par:3, dist:96,  dist2:81, si:18 },
      { h:2,  par:3, dist:73,  dist2:61, si:8  },
      { h:3,  par:3, dist:95,  dist2:71, si:10 },
      { h:4,  par:3, dist:99,  dist2:57, si:4  },
      { h:5,  par:3, dist:95,  dist2:68, si:12 },
      { h:6,  par:3, dist:108, dist2:74, si:2  },
      { h:7,  par:3, dist:104, dist2:81, si:6  },
      { h:8,  par:3, dist:74,  dist2:56, si:16 },
      { h:9,  par:3, dist:84,  dist2:62, si:14 },
      { h:10, par:3, dist:74,  dist2:46, si:17 },
      { h:11, par:3, dist:117, dist2:46, si:11 },
      { h:12, par:3, dist:81,  dist2:68, si:9  },
      { h:13, par:3, dist:101, dist2:79, si:15 },
      { h:14, par:3, dist:115, dist2:82, si:7  },
      { h:15, par:3, dist:101, dist2:80, si:3  },
      { h:16, par:3, dist:105, dist2:68, si:1  },
      { h:17, par:3, dist:96,  dist2:46, si:13 },
      { h:18, par:3, dist:92,  dist2:70, si:5  },
    ]
  },

  "Pitch & Putt Platja d'Aro": {
    web: null, phone: null,
    // SI pendent - tots apareixien com "00" a quimriera.cat
    holes: [
      { h:1,  par:3, dist:97,  si:null },
      { h:2,  par:3, dist:76,  si:null },
      { h:3,  par:3, dist:72,  si:null },
      { h:4,  par:3, dist:56,  si:null },
      { h:5,  par:3, dist:42,  si:null },
      { h:6,  par:3, dist:86,  si:null },
      { h:7,  par:3, dist:76,  si:null },
      { h:8,  par:3, dist:75,  si:null },
      { h:9,  par:3, dist:115, si:null },
      { h:10, par:3, dist:48,  si:null },
      { h:11, par:3, dist:60,  si:null },
      { h:12, par:3, dist:86,  si:null },
      { h:13, par:3, dist:60,  si:null },
      { h:14, par:3, dist:76,  si:null },
      { h:15, par:3, dist:61,  si:null },
      { h:16, par:3, dist:62,  si:null },
      { h:17, par:3, dist:74,  si:null },
      { h:18, par:3, dist:105, si:null },
    ]
  },

  "Castello Golf P&P": {
    web: "www.golfcastello.com", phone: "972 156 210",
    holes: [
      { h:1,  par:3, dist:76,  si:18 },
      { h:2,  par:3, dist:76,  si:12 },
      { h:3,  par:3, dist:111, si:1  },
      { h:4,  par:3, dist:96,  si:6  },
      { h:5,  par:3, dist:83,  si:9  },
      { h:6,  par:3, dist:90,  si:3  },
      { h:7,  par:3, dist:103, si:2  },
      { h:8,  par:3, dist:93,  si:7  },
      { h:9,  par:3, dist:79,  si:14 },
      { h:10, par:3, dist:85,  si:11 },
      { h:11, par:3, dist:91,  si:13 },
      { h:12, par:3, dist:77,  si:15 },
      { h:13, par:3, dist:71,  si:16 },
      { h:14, par:3, dist:80,  si:5  },
      { h:15, par:3, dist:62,  si:17 },
      { h:16, par:3, dist:77,  si:8  },
      { h:17, par:3, dist:77,  si:10 },
      { h:18, par:3, dist:104, si:4  },
    ]
  },

  "Teia Golf P&P": {
    web: "www.ctbteia.com", phone: "935 553 700",
    holes: [
      { h:1,  par:3, dist:73,  si:14 },
      { h:2,  par:3, dist:78,  si:2  },
      { h:3,  par:3, dist:80,  si:12 },
      { h:4,  par:3, dist:120, si:1  },
      { h:5,  par:3, dist:95,  si:3  },
      { h:6,  par:3, dist:80,  si:9  },
      { h:7,  par:3, dist:67,  si:10 },
      { h:8,  par:3, dist:74,  si:7  },
      { h:9,  par:3, dist:79,  si:8  },
      { h:10, par:3, dist:81,  si:11 },
      { h:11, par:3, dist:87,  si:17 },
      { h:12, par:3, dist:57,  si:16 },
      { h:13, par:3, dist:102, si:5  },
      { h:14, par:3, dist:72,  si:13 },
      { h:15, par:3, dist:59,  si:15 },
      { h:16, par:3, dist:62,  si:18 },
      { h:17, par:3, dist:56,  si:6  },
      { h:18, par:3, dist:91,  si:4  },
    ]
  },

  "Sant Cebria Golf P&P": {
    web: "www.santcebriapitchandputt.cat", phone: "937 631 277",
    holes: [
      { h:1,  par:3, dist:53,  si:18 },
      { h:2,  par:3, dist:105, si:1  },
      { h:3,  par:3, dist:77,  si:10 },
      { h:4,  par:3, dist:82,  si:5  },
      { h:5,  par:3, dist:72,  si:9  },
      { h:6,  par:3, dist:80,  si:11 },
      { h:7,  par:3, dist:74,  si:3  },
      { h:8,  par:3, dist:120, si:2  },
      { h:9,  par:3, dist:87,  si:6  },
      { h:10, par:3, dist:66,  si:13 },
      { h:11, par:3, dist:76,  si:4  },
      { h:12, par:3, dist:88,  si:7  },
      { h:13, par:3, dist:72,  si:15 },
      { h:14, par:3, dist:79,  si:8  },
      { h:15, par:3, dist:64,  si:14 },
      { h:16, par:3, dist:77,  si:17 },
      { h:17, par:3, dist:58,  si:16 },
      { h:18, par:3, dist:84,  si:12 },
    ]
  },

  "Montseny Golf P&P": {
    web: null, phone: null,
    holes: [
      { h:1,  par:3, dist:87,   si:8    },
      { h:2,  par:3, dist:103,  si:6    },
      { h:3,  par:3, dist:78,   si:5    },
      { h:4,  par:3, dist:93,   si:9    },
      { h:5,  par:3, dist:92,   si:12   },
      { h:6,  par:3, dist:73,   si:13   },
      { h:7,  par:3, dist:64,   si:16   },
      { h:8,  par:3, dist:61,   si:17   },
      { h:9,  par:3, dist:103,  si:4    },
      { h:10, par:3, dist:120,  si:3    },
      { h:11, par:3, dist:120,  si:1    },
      { h:12, par:3, dist:68,   si:15   },
      { h:13, par:3, dist:64,   si:18   },
      { h:14, par:3, dist:76,   si:11   },
      { h:15, par:3, dist:80,   si:10   },
      { h:16, par:3, dist:80,   si:7    },
      { h:17, par:3, dist:86,   si:14   },
      { h:18, par:3, dist:92,   si:2    },
    ]
  },

  "Golf Hcp1 P&P": {
    web: null, phone: null,
    holes: [
      { h:1,  par:3, dist:62,   si:18   },
      { h:2,  par:3, dist:66,   si:17   },
      { h:3,  par:3, dist:71,   si:4    },
      { h:4,  par:3, dist:83,   si:10   },
      { h:5,  par:3, dist:70,   si:9    },
      { h:6,  par:3, dist:90,   si:15   },
      { h:7,  par:3, dist:71,   si:6    },
      { h:8,  par:3, dist:69,   si:12   },
      { h:9,  par:3, dist:67,   si:14   },
      { h:10, par:3, dist:63,   si:5    },
      { h:11, par:3, dist:72,   si:16   },
      { h:12, par:3, dist:94,   si:11   },
      { h:13, par:3, dist:73,   si:8    },
      { h:14, par:3, dist:83,   si:3    },
      { h:15, par:3, dist:91,   si:13   },
      { h:16, par:3, dist:106,  si:2    },
      { h:17, par:3, dist:115,  si:7    },
      { h:18, par:3, dist:119,  si:1    },
    ]
  },

  "Vallromanes - Par 3": {
    web: "www.pitchandputtvallromanes.com", phone: "938 456 163",
    holes: [
      { h:1,  par:3, dist:51,  si:18 },
      { h:2,  par:3, dist:113, si:7  },
      { h:3,  par:3, dist:80,  si:16 },
      { h:4,  par:3, dist:59,  si:15 },
      { h:5,  par:3, dist:68,  si:17 },
      { h:6,  par:3, dist:82,  si:10 },
      { h:7,  par:3, dist:74,  si:13 },
      { h:8,  par:3, dist:62,  si:6  },
      { h:9,  par:3, dist:45,  si:9  },
      { h:10, par:3, dist:81,  si:5  },
      { h:11, par:3, dist:72,  si:12 },
      { h:12, par:3, dist:79,  si:14 },
      { h:13, par:3, dist:65,  si:8  },
      { h:14, par:3, dist:120, si:2  },
      { h:15, par:3, dist:74,  si:1  },
      { h:16, par:3, dist:80,  si:3  },
      { h:17, par:3, dist:86,  si:11 },
      { h:18, par:3, dist:118, si:4  },
    ]
  },

  "Franciac P&P": {
    web: "www.golffranciac.com", phone: "972 471 028",
    holes: [
      { h:1,  par:3, dist:65,  si:17 },
      { h:2,  par:3, dist:69,  si:18 },
      { h:3,  par:3, dist:85,  si:11 },
      { h:4,  par:3, dist:106, si:4  },
      { h:5,  par:3, dist:68,  si:14 },
      { h:6,  par:3, dist:85,  si:13 },
      { h:7,  par:3, dist:82,  si:10 },
      { h:8,  par:3, dist:113, si:2  },
      { h:9,  par:3, dist:90,  si:8  },
      { h:10, par:3, dist:71,  si:15 },
      { h:11, par:3, dist:84,  si:7  },
      { h:12, par:3, dist:103, si:6  },
      { h:13, par:3, dist:90,  si:9  },
      { h:14, par:3, dist:104, si:5  },
      { h:15, par:3, dist:70,  si:12 },
      { h:16, par:3, dist:120, si:1  },
      { h:17, par:3, dist:113, si:3  },
      { h:18, par:3, dist:79,  si:16 },
    ]
  },

  "Mas Tapioles P&P": {
    web: "www.hotelmaspioles.com", phone: "972 837 017",
    // PENDENT: no hi ha SI a quimriera.cat
    holes: [
      { h:1,  par:3, dist:81, si:null },
      { h:2,  par:3, dist:84, si:null },
      { h:3,  par:3, dist:51, si:null },
      { h:4,  par:3, dist:98, si:null },
      { h:5,  par:3, dist:74, si:null },
      { h:6,  par:3, dist:58, si:null },
      { h:7,  par:3, dist:82, si:null },
      { h:8,  par:3, dist:70, si:null },
      { h:9,  par:3, dist:62, si:null },
      { h:10, par:3, dist:51, si:null },
      { h:11, par:3, dist:90, si:null },
      { h:12, par:3, dist:62, si:null },
      { h:13, par:3, dist:59, si:null },
      { h:14, par:3, dist:74, si:null },
      { h:15, par:3, dist:81, si:null },
      { h:16, par:3, dist:69, si:null },
      { h:17, par:3, dist:75, si:null },
      { h:18, par:3, dist:70, si:null },
    ]
  },

  "Golf d'Aro - P&P": {
    web: "www.golfdaro.com", phone: "972 816 227",
    // 9 forats doble sortida (Mas Nou). Scorecard oficial confirmat.
    holes: [
      { h:1,  par:3, dist:102, si:3  },
      { h:2,  par:3, dist:55,  si:5  },
      { h:3,  par:3, dist:90,  si:17 },
      { h:4,  par:3, dist:54,  si:11 },
      { h:5,  par:3, dist:83,  si:9  },
      { h:6,  par:3, dist:116, si:13 },
      { h:7,  par:3, dist:101, si:15 },
      { h:8,  par:3, dist:108, si:1  },
      { h:9,  par:3, dist:116, si:7  },
      { h:10, par:3, dist:102, si:4  },
      { h:11, par:3, dist:55,  si:6  },
      { h:12, par:3, dist:90,  si:18 },
      { h:13, par:3, dist:54,  si:12 },
      { h:14, par:3, dist:74,  si:10 },
      { h:15, par:3, dist:116, si:14 },
      { h:16, par:3, dist:89,  si:16 },
      { h:17, par:3, dist:67,  si:2  },
      { h:18, par:3, dist:116, si:8  },
    ]
  },

  // ===== ALTRES CAMPS DE P&P =====

  "Pitch & Putt Lloret": {
    web: "www.golflloret.com", phone: "972 360 216",
    holes: [
      { h:1,  par:3, dist:96,  si:3  },
      { h:2,  par:3, dist:108, si:1  },
      { h:3,  par:3, dist:70,  si:10 },
      { h:4,  par:3, dist:76,  si:9  },
      { h:5,  par:3, dist:80,  si:5  },
      { h:6,  par:3, dist:97,  si:11 },
      { h:7,  par:3, dist:73,  si:4  },
      { h:8,  par:3, dist:69,  si:17 },
      { h:9,  par:3, dist:87,  si:8  },
      { h:10, par:3, dist:90,  si:13 },
      { h:11, par:3, dist:74,  si:7  },
      { h:12, par:3, dist:56,  si:16 },
      { h:13, par:3, dist:78,  si:6  },
      { h:14, par:3, dist:81,  si:14 },
      { h:15, par:3, dist:68,  si:18 },
      { h:16, par:3, dist:66,  si:15 },
      { h:17, par:3, dist:88,  si:2  },
      { h:18, par:3, dist:82,  si:12 },
    ]
  },

  "Portal del Roc": {
    web: "www.portaldelrocpitchandputt.com", phone: "938 147 383",
    holes: [
      { h:1,  par:3, dist:63,  si:18 },
      { h:2,  par:3, dist:71,  si:16 },
      { h:3,  par:3, dist:120, si:2  },
      { h:4,  par:3, dist:81,  si:4  },
      { h:5,  par:3, dist:90,  si:6  },
      { h:6,  par:3, dist:66,  si:14 },
      { h:7,  par:3, dist:85,  si:12 },
      { h:8,  par:3, dist:97,  si:8  },
      { h:9,  par:3, dist:79,  si:10 },
      { h:10, par:3, dist:68,  si:17 },
      { h:11, par:3, dist:66,  si:15 },
      { h:12, par:3, dist:73,  si:9  },
      { h:13, par:3, dist:62,  si:13 },
      { h:14, par:3, dist:120, si:5  },
      { h:15, par:3, dist:85,  si:7  },
      { h:16, par:3, dist:120, si:1  },
      { h:17, par:3, dist:79,  si:11 },
      { h:18, par:3, dist:82,  si:3  },
    ]
  },

  "Pitch & Putt Peralada": {
    web: "www.golfperalada.com", phone: "972 538 287",
    holes: [
      { h:1,  par:3, dist:79,  si:3  },
      { h:2,  par:3, dist:80,  si:8  },
      { h:3,  par:3, dist:55,  si:18 },
      { h:4,  par:3, dist:87,  si:6  },
      { h:5,  par:3, dist:53,  si:14 },
      { h:6,  par:3, dist:71,  si:10 },
      { h:7,  par:3, dist:85,  si:12 },
      { h:8,  par:3, dist:54,  si:17 },
      { h:9,  par:3, dist:86,  si:2  },
      { h:10, par:3, dist:89,  si:4  },
      { h:11, par:3, dist:73,  si:9  },
      { h:12, par:3, dist:64,  si:15 },
      { h:13, par:3, dist:108, si:1  },
      { h:14, par:3, dist:67,  si:7  },
      { h:15, par:3, dist:65,  si:13 },
      { h:16, par:3, dist:78,  si:11 },
      { h:17, par:3, dist:44,  si:16 },
      { h:18, par:3, dist:77,  si:5  },
    ]
  },

  "Pitch & Putt Can Rafel": {
    web: "www.canrafel.net", phone: "936 501 911",
    holes: [
      { h:1,  par:3, dist:59,  si:13 },
      { h:2,  par:3, dist:82,  si:8  },
      { h:3,  par:3, dist:88,  si:15 },
      { h:4,  par:3, dist:69,  si:18 },
      { h:5,  par:3, dist:111, si:3  },
      { h:6,  par:3, dist:75,  si:7  },
      { h:7,  par:3, dist:84,  si:10 },
      { h:8,  par:3, dist:73,  si:6  },
      { h:9,  par:3, dist:63,  si:16 },
      { h:10, par:3, dist:70,  si:9  },
      { h:11, par:3, dist:75,  si:12 },
      { h:12, par:3, dist:97,  si:11 },
      { h:13, par:3, dist:67,  si:4  },
      { h:14, par:3, dist:120, si:2  },
      { h:15, par:3, dist:61,  si:14 },
      { h:16, par:3, dist:105, si:1  },
      { h:17, par:3, dist:50,  si:5  },
      { h:18, par:3, dist:57,  si:17 },
    ]
  },

  "Pitch & Putt El Valles": {
    web: "www.vallesgolf.com", phone: "937 259 998",
    // 9 forats doble sortida: dist=1a sortida curta / dist2=2a sortida llarga
    holes: [
      { h:1,  par:3, dist:47,  dist2:85,  si:16, si2:9  },
      { h:2,  par:3, dist:72,  dist2:64,  si:13, si2:17 },
      { h:3,  par:3, dist:61,  dist2:54,  si:7,  si2:15 },
      { h:4,  par:3, dist:77,  dist2:69,  si:5,  si2:11 },
      { h:5,  par:3, dist:90,  dist2:78,  si:1,  si2:12 },
      { h:6,  par:3, dist:79,  dist2:59,  si:14, si2:18 },
      { h:7,  par:3, dist:80,  dist2:106, si:10, si2:2  },
      { h:8,  par:3, dist:75,  dist2:86,  si:6,  si2:3  },
      { h:9,  par:3, dist:87,  dist2:100, si:8,  si2:4  },
    ]
  },

  "Pitch & Putt Bonarea": {
    web: "www.bonarea-sport.com", phone: "973 294 212",
    holes: [
      { h:1,  par:3, dist:73,  si:16 },
      { h:2,  par:3, dist:73,  si:18 },
      { h:3,  par:3, dist:92,  si:4  },
      { h:4,  par:3, dist:80,  si:15 },
      { h:5,  par:3, dist:72,  si:17 },
      { h:6,  par:3, dist:90,  si:9  },
      { h:7,  par:3, dist:82,  si:7  },
      { h:8,  par:3, dist:90,  si:8  },
      { h:9,  par:3, dist:94,  si:11 },
      { h:10, par:3, dist:72,  si:6  },
      { h:11, par:3, dist:92,  si:10 },
      { h:12, par:3, dist:82,  si:14 },
      { h:13, par:3, dist:108, si:3  },
      { h:14, par:3, dist:74,  si:12 },
      { h:15, par:3, dist:97,  si:13 },
      { h:16, par:3, dist:99,  si:5  },
      { h:17, par:3, dist:120, si:1  },
      { h:18, par:3, dist:110, si:2  },
    ]
  },

  "Pitch & Putt Badalona": {
    web: "www.pitchandputt-badalona.com", phone: "933 952 779",
    // 9 forats doble sortida
    holes: [
      { h:1,  par:3, dist:82,  si:13 },
      { h:2,  par:3, dist:59,  si:2  },
      { h:3,  par:3, dist:100, si:3  },
      { h:4,  par:3, dist:64,  si:9  },
      { h:5,  par:3, dist:49,  si:17 },
      { h:6,  par:3, dist:66,  si:15 },
      { h:7,  par:3, dist:120, si:1  },
      { h:8,  par:3, dist:64,  si:7  },
      { h:9,  par:3, dist:87,  si:11 },
      { h:10, par:3, dist:82,  si:14 },
      { h:11, par:3, dist:59,  si:5  },
      { h:12, par:3, dist:69,  si:4  },
      { h:13, par:3, dist:64,  si:12 },
      { h:14, par:3, dist:49,  si:18 },
      { h:15, par:3, dist:66,  si:16 },
      { h:16, par:3, dist:52,  si:6  },
      { h:17, par:3, dist:64,  si:8  },
      { h:18, par:3, dist:67,  si:10 },
    ]
  },

  "Pitch & Putt Bonmont": {
    web: "www.bonmont.es/pitch-putt", phone: "977 818 140",
    holes: [
      { h:1,  par:3, dist:45,  si:16 },
      { h:2,  par:3, dist:71,  si:7  },
      { h:3,  par:3, dist:74,  si:8  },
      { h:4,  par:3, dist:61,  si:12 },
      { h:5,  par:3, dist:62,  si:10 },
      { h:6,  par:3, dist:49,  si:17 },
      { h:7,  par:3, dist:62,  si:9  },
      { h:8,  par:3, dist:87,  si:4  },
      { h:9,  par:3, dist:100, si:1  },
      { h:10, par:3, dist:57,  si:15 },
      { h:11, par:3, dist:81,  si:2  },
      { h:12, par:3, dist:65,  si:13 },
      { h:13, par:3, dist:57,  si:14 },
      { h:14, par:3, dist:57,  si:11 },
      { h:15, par:3, dist:46,  si:18 },
      { h:16, par:3, dist:68,  si:5  },
      { h:17, par:3, dist:80,  si:6  },
      { h:18, par:3, dist:90,  si:3  },
    ]
  },

  "Pitch & Putt Cambrils": {
    web: "www.golfcambrils.com", phone: "977 360 588",
    // 9 forats doble sortida: dist=1a sortida llarga / dist2=2a sortida curta. SI pendent.
    holes: [
      { h:1, par:3, dist:111, dist2:78, si:null },
      { h:2, par:3, dist:82,  dist2:55, si:null },
      { h:3, par:3, dist:69,  dist2:52, si:null },
      { h:4, par:3, dist:61,  dist2:40, si:null },
      { h:5, par:3, dist:68,  dist2:57, si:null },
      { h:6, par:3, dist:88,  dist2:56, si:null },
      { h:7, par:3, dist:69,  dist2:42, si:null },
      { h:8, par:3, dist:90,  dist2:75, si:null },
      { h:9, par:3, dist:86,  dist2:76, si:null },
    ]
  },

  "Pitch & Putt Canal Olympic": {
    web: "www.canalolimpic.cat", phone: "936 362 896",
    // 9 forats
    holes: [
      { h:1, par:3, dist:47,  si:17 },
      { h:2, par:3, dist:67,  si:15 },
      { h:3, par:3, dist:105, si:3  },
      { h:4, par:3, dist:60,  si:5  },
      { h:5, par:3, dist:48,  si:9  },
      { h:6, par:3, dist:82,  si:7  },
      { h:7, par:3, dist:53,  si:13 },
      { h:8, par:3, dist:63,  si:11 },
      { h:9, par:3, dist:91,  si:1  },
    ]
  },

  "Pitch & Putt Can Cuyas": {
    web: "www.cancuyasgolf.com", phone: "936 855 566",
    // ATENCIO: SI duplicats a quimriera.cat (h13/h14=12, h16/h17=7)
    holes: [
      { h:1,  par:3, dist:111, si:1  },
      { h:2,  par:3, dist:88,  si:8  },
      { h:3,  par:3, dist:79,  si:18 },
      { h:4,  par:3, dist:52,  si:16 },
      { h:5,  par:3, dist:107, si:10 },
      { h:6,  par:3, dist:99,  si:9  },
      { h:7,  par:3, dist:77,  si:17 },
      { h:8,  par:3, dist:104, si:3  },
      { h:9,  par:3, dist:100, si:4  },
      { h:10, par:3, dist:104, si:2  },
      { h:11, par:3, dist:106, si:5  },
      { h:12, par:3, dist:83,  si:14 },
      { h:13, par:3, dist:64,  si:12 },
      { h:14, par:3, dist:83,  si:null },
      { h:15, par:3, dist:76,  si:11 },
      { h:16, par:3, dist:81,  si:7  },
      { h:17, par:3, dist:89,  si:null },
      { h:18, par:3, dist:88,  si:6  },
    ]
  },

  "Pitch & Putt Can Mascaro": {
    web: "www.facebook.com/pitchandputtcanmascaro", phone: "935 970 184",
    // PENDENT: sense dades de forats a quimriera.cat
    holes: []
  },

  "Pitch & Putt Can Pascual": {
    web: "www.pitchandputtcanpascual.com", phone: "628 094 406",
    // 9 forats
    holes: [
      { h:1, par:3, dist:76,  si:7 },
      { h:2, par:3, dist:67,  si:5 },
      { h:3, par:3, dist:93,  si:4 },
      { h:4, par:3, dist:63,  si:8 },
      { h:5, par:3, dist:73,  si:6 },
      { h:6, par:3, dist:81,  si:2 },
      { h:7, par:3, dist:98,  si:3 },
      { h:8, par:3, dist:78,  si:9 },
      { h:9, par:3, dist:120, si:1 },
    ]
  },

  "Pitch & Putt Costa Daurada": {
    web: "www.golfcostadaurada.com", phone: "977 653 361",
    holes: [
      { h:1,  par:3, dist:79,  si:2  },
      { h:2,  par:3, dist:72,  si:12 },
      { h:3,  par:3, dist:56,  si:18 },
      { h:4,  par:3, dist:76,  si:10 },
      { h:5,  par:3, dist:57,  si:6  },
      { h:6,  par:3, dist:101, si:4  },
      { h:7,  par:3, dist:56,  si:14 },
      { h:8,  par:3, dist:63,  si:16 },
      { h:9,  par:3, dist:82,  si:8  },
      { h:10, par:3, dist:69,  si:17 },
      { h:11, par:3, dist:80,  si:9  },
      { h:12, par:3, dist:64,  si:15 },
      { h:13, par:3, dist:106, si:1  },
      { h:14, par:3, dist:86,  si:11 },
      { h:15, par:3, dist:53,  si:7  },
      { h:16, par:3, dist:78,  si:5  },
      { h:17, par:3, dist:52,  si:13 },
      { h:18, par:3, dist:96,  si:3  },
    ]
  },

  "Pitch & Putt Fornells": {
    web: "www.pitchandputtfornells.cat", phone: "972 476 672",
    // ATENCIO: forats 1 i 7 amb SI=14 duplicat a quimriera.cat
    holes: [
      { h:1,  par:3, dist:72,  si:14   },
      { h:2,  par:3, dist:76,  si:10   },
      { h:3,  par:3, dist:68,  si:16   },
      { h:4,  par:3, dist:111, si:3    },
      { h:5,  par:3, dist:74,  si:12   },
      { h:6,  par:3, dist:58,  si:18   },
      { h:7,  par:3, dist:72,  si:null },
      { h:8,  par:3, dist:65,  si:13   },
      { h:9,  par:3, dist:81,  si:1    },
      { h:10, par:3, dist:111, si:2    },
      { h:11, par:3, dist:64,  si:17   },
      { h:12, par:3, dist:73,  si:11   },
      { h:13, par:3, dist:82,  si:6    },
      { h:14, par:3, dist:110, si:7    },
      { h:15, par:3, dist:100, si:4    },
      { h:16, par:3, dist:101, si:5    },
      { h:17, par:3, dist:95,  si:9    },
      { h:18, par:3, dist:62,  si:15   },
    ]
  },

  "Pitch & Putt La Garriga": {
    web: "www.golflagarriga.com", phone: "938 718 959",
    // PENDENT: no hi ha SI a quimriera.cat
    holes: [
      { h:1,  par:3, dist:93,  si:null },
      { h:2,  par:3, dist:98,  si:null },
      { h:3,  par:3, dist:78,  si:null },
      { h:4,  par:3, dist:91,  si:null },
      { h:5,  par:3, dist:71,  si:null },
      { h:6,  par:3, dist:111, si:null },
      { h:7,  par:3, dist:79,  si:null },
      { h:8,  par:3, dist:70,  si:null },
      { h:9,  par:3, dist:75,  si:null },
      { h:10, par:3, dist:83,  si:null },
      { h:11, par:3, dist:82,  si:null },
      { h:12, par:3, dist:92,  si:null },
      { h:13, par:3, dist:100, si:null },
      { h:14, par:3, dist:90,  si:null },
      { h:15, par:3, dist:69,  si:null },
      { h:16, par:3, dist:81,  si:null },
      { h:17, par:3, dist:104, si:null },
      { h:18, par:3, dist:82,  si:null },
    ]
  },

  "Pitch & Putt Lleida": {
    web: "www.pitchandputtlleida.com", phone: "666 002 433",
    // ATENCIO: forats 6 i 16 amb SI=6 duplicat a quimriera.cat
    holes: [
      { h:1,  par:3, dist:85,  si:15   },
      { h:2,  par:3, dist:93,  si:9    },
      { h:3,  par:3, dist:101, si:1    },
      { h:4,  par:3, dist:73,  si:7    },
      { h:5,  par:3, dist:112, si:5    },
      { h:6,  par:3, dist:115, si:6    },
      { h:7,  par:3, dist:85,  si:13   },
      { h:8,  par:3, dist:78,  si:17   },
      { h:9,  par:3, dist:93,  si:11   },
      { h:10, par:3, dist:70,  si:18   },
      { h:11, par:3, dist:91,  si:2    },
      { h:12, par:3, dist:73,  si:16   },
      { h:13, par:3, dist:102, si:4    },
      { h:14, par:3, dist:70,  si:14   },
      { h:15, par:3, dist:103, si:10   },
      { h:16, par:3, dist:103, si:null },
      { h:17, par:3, dist:76,  si:12   },
      { h:18, par:3, dist:74,  si:8    },
    ]
  },

  "Pitch & Putt Mas Gurumbau": {
    web: "www.masgurumbau.com", phone: "938 124 146",
    holes: [
      { h:1,  par:3, dist:86,  si:14 },
      { h:2,  par:3, dist:68,  si:18 },
      { h:3,  par:3, dist:111, si:9  },
      { h:4,  par:3, dist:92,  si:7  },
      { h:5,  par:3, dist:83,  si:13 },
      { h:6,  par:3, dist:89,  si:12 },
      { h:7,  par:3, dist:67,  si:17 },
      { h:8,  par:3, dist:90,  si:15 },
      { h:9,  par:3, dist:83,  si:3  },
      { h:10, par:3, dist:83,  si:6  },
      { h:11, par:3, dist:84,  si:5  },
      { h:12, par:3, dist:62,  si:11 },
      { h:13, par:3, dist:73,  si:8  },
      { h:14, par:3, dist:70,  si:2  },
      { h:15, par:3, dist:90,  si:4  },
      { h:16, par:3, dist:61,  si:10 },
      { h:17, par:3, dist:101, si:16 },
      { h:18, par:3, dist:102, si:1  },
    ]
  },

  "Pitch & Putt Mas Pages": {
    web: "www.maspages.com", phone: "972 561 001",
    holes: [
      { h:1,  par:3, dist:66,  si:4  },
      { h:2,  par:3, dist:82,  si:2  },
      { h:3,  par:3, dist:52,  si:14 },
      { h:4,  par:3, dist:57,  si:8  },
      { h:5,  par:3, dist:62,  si:10 },
      { h:6,  par:3, dist:47,  si:18 },
      { h:7,  par:3, dist:53,  si:16 },
      { h:8,  par:3, dist:60,  si:6  },
      { h:9,  par:3, dist:72,  si:12 },
      { h:10, par:3, dist:86,  si:9  },
      { h:11, par:3, dist:82,  si:1  },
      { h:12, par:3, dist:90,  si:5  },
      { h:13, par:3, dist:74,  si:3  },
      { h:14, par:3, dist:69,  si:15 },
      { h:15, par:3, dist:109, si:11 },
      { h:16, par:3, dist:83,  si:17 },
      { h:17, par:3, dist:107, si:7  },
      { h:18, par:3, dist:83,  si:13 },
    ]
  },

  "Pitch & Putt Mas Torrellas": {
    web: "www.pitchmastorrellas.com", phone: "972 836 257",
    // PENDENT: sense dades de forats a quimriera.cat
    holes: []
  },

  "Pitch & Putt Mora": {
    web: "www.mora.cat", phone: "937 928 961",
    // 9 forats
    holes: [
      { h:1, par:3, dist:79,  si:9  },
      { h:2, par:3, dist:87,  si:7  },
      { h:3, par:3, dist:92,  si:3  },
      { h:4, par:3, dist:62,  si:17 },
      { h:5, par:3, dist:99,  si:1  },
      { h:6, par:3, dist:76,  si:13 },
      { h:7, par:3, dist:109, si:5  },
      { h:8, par:3, dist:78,  si:15 },
      { h:9, par:3, dist:84,  si:11 },
    ]
  },

  "Pitch & Putt Oller del Mas": {
    web: "www.ollerdelmas.com/club-innat/golf", phone: "938 352 882",
    // ATENCIO: forats 6 i 10 amb SI=18 duplicat a quimriera.cat
    holes: [
      { h:1,  par:3, dist:73,  si:15   },
      { h:2,  par:3, dist:115, si:2    },
      { h:3,  par:3, dist:87,  si:8    },
      { h:4,  par:3, dist:64,  si:9    },
      { h:5,  par:3, dist:95,  si:13   },
      { h:6,  par:3, dist:65,  si:18   },
      { h:7,  par:3, dist:113, si:12   },
      { h:8,  par:3, dist:78,  si:5    },
      { h:9,  par:3, dist:120, si:3    },
      { h:10, par:3, dist:88,  si:null },
      { h:11, par:3, dist:70,  si:16   },
      { h:12, par:3, dist:94,  si:6    },
      { h:13, par:3, dist:85,  si:14   },
      { h:14, par:3, dist:77,  si:7    },
      { h:15, par:3, dist:120, si:1    },
      { h:16, par:3, dist:104, si:11   },
      { h:17, par:3, dist:75,  si:4    },
      { h:18, par:3, dist:67,  si:10   },
    ]
  },

  "Pitch & Putt Urgell": {
    web: "www.golfurgellpitchandputt.com", phone: "973 320 742",
    holes: [
      { h:1,  par:3, dist:94,  si:8  },
      { h:2,  par:3, dist:116, si:2  },
      { h:3,  par:3, dist:80,  si:17 },
      { h:4,  par:3, dist:84,  si:12 },
      { h:5,  par:3, dist:56,  si:18 },
      { h:6,  par:3, dist:70,  si:7  },
      { h:7,  par:3, dist:56,  si:14 },
      { h:8,  par:3, dist:79,  si:11 },
      { h:9,  par:3, dist:105, si:4  },
      { h:10, par:3, dist:74,  si:13 },
      { h:11, par:3, dist:85,  si:10 },
      { h:12, par:3, dist:57,  si:16 },
      { h:13, par:3, dist:83,  si:1  },
      { h:14, par:3, dist:77,  si:15 },
      { h:15, par:3, dist:90,  si:9  },
      { h:16, par:3, dist:101, si:5  },
      { h:17, par:3, dist:91,  si:6  },
      { h:18, par:3, dist:62,  si:3  },
    ]
  },

  "Pitch & Putt El Vendrell": {
    web: "www.pitchputtvendrell.es", phone: "977 668 031",
    holes: [
      { h:1,  par:3, dist:78,  si:16 },
      { h:2,  par:3, dist:87,  si:14 },
      { h:3,  par:3, dist:86,  si:18 },
      { h:4,  par:3, dist:84,  si:10 },
      { h:5,  par:3, dist:119, si:4  },
      { h:6,  par:3, dist:90,  si:12 },
      { h:7,  par:3, dist:115, si:2  },
      { h:8,  par:3, dist:87,  si:6  },
      { h:9,  par:3, dist:98,  si:8  },
      { h:10, par:3, dist:100, si:9  },
      { h:11, par:3, dist:62,  si:17 },
      { h:12, par:3, dist:70,  si:3  },
      { h:13, par:3, dist:117, si:1  },
      { h:14, par:3, dist:62,  si:7  },
      { h:15, par:3, dist:75,  si:13 },
      { h:16, par:3, dist:74,  si:11 },
      { h:17, par:3, dist:97,  si:15 },
      { h:18, par:3, dist:99,  si:5  },
    ]
  },

  // ===== ANDORRA =====

  "Pitch & Putt Ordino": {
    web: "www.ordinogolfclub.com", phone: "00376 332227",
    holes: [
      { h:1,  par:3, dist:78,  si:3  },
      { h:2,  par:3, dist:70,  si:5  },
      { h:3,  par:3, dist:85,  si:9  },
      { h:4,  par:3, dist:95,  si:7  },
      { h:5,  par:3, dist:75,  si:11 },
      { h:6,  par:3, dist:54,  si:17 },
      { h:7,  par:3, dist:80,  si:13 },
      { h:8,  par:3, dist:63,  si:15 },
      { h:9,  par:3, dist:94,  si:1  },
      { h:10, par:3, dist:71,  si:16 },
      { h:11, par:3, dist:74,  si:10 },
      { h:12, par:3, dist:120, si:2  },
      { h:13, par:3, dist:114, si:4  },
      { h:14, par:3, dist:90,  si:14 },
      { h:15, par:3, dist:42,  si:18 },
      { h:16, par:3, dist:84,  si:8  },
      { h:17, par:3, dist:81,  si:12 },
      { h:18, par:3, dist:109, si:6  },
    ]
  },

  "Pitch & Putt Xixerella": {
    web: "www.xixerellapark.com", phone: "00376 332227",
    // PENDENT: sense dades de forats a quimriera.cat
    holes: []
  },

  "Portal del Roc": {
    web: "", phone: "",
    // PENDENT: sense dades oficials de forats
    holes: []
  },

};

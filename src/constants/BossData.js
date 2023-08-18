  //This array contains the available difficulties for each boss.
  //indexes from left to right: skip(1), easy(2), normal(3), chaos/hard(4), extreme(5).
  //0 = that mode doesn't exist for the boss. 1 = it does

  export const bossData = {
    "Hilla": {
      key: 0,
      img: "assets/hilla.png",
      modes: ["None", null, null, "Hard", null],
      prices: [0, 0, 0, 56250000, 0]
    },
    "PB": {
      key: 1,
      img: "assets/pinkbean.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 64000000, 0]
    },
    "Cygnus": {
      key: 2,
      img: "assets/cygnus.png",
      modes: ["None", "Easy", "Normal", null, null],
      prices: [0, 45562500, 72250000, 0, 0]
    },
    "PNo": {
      key: 3,
      img: "assets/pno.png",
      modes: ["None", null, "Normal", null, null],
      prices: [0, 0, 81000000, 0, 0]
    },
    "Zakum": {
      key: 4,
      img: "assets/zakum.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 81000000, 0]
    },
    "Pierre": {
      key: 5,
      img: "assets/pierre.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 81000000, 0]
    },
    "Von Bon": {
      key: 6,
      img: "assets/vonbon.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 81000000, 0]
    },
    "C Queen": {
      key: 7,
      img: "assets/cqueen.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 81000000, 0]
    },
    "Vellum": {
      key: 8,
      img: "assets/vellum.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 105062600, 0]
    },
    "Magnus": {
      key: 9,
      img: "assets/magnus.png",
      modes: ["None", null, null, "Hard", null],
      prices: [0, 0, 0, 95062500, 0]
    },
    "Papulatus": {
      key: 10,
      img: "assets/papulatus.png",
      modes: ["None", null, null, "Chaos", null],
      prices: [0, 0, 0, 132250000, 0]
    },
    "Akechi": {
      key: 11,
      img: "assets/akechi.png",
      modes: ["None", null, "Normal", null, null],
      prices: [0, 0, 144000000, 0, 0]
    },
    "Lotus": {
      key: 12,
      img: "assets/lotus.png",
      modes: ["None", null, "Normal", "Hard", null],
      prices: [0, 0, 162562500, 370562500, 0]
    },
    "Damien": {
      key: 13,
      img: "assets/damien.png",
      modes: ["None", null, "Normal", "Hard", null],
      prices: [0, 0, 169000000, 351562500, 0]
    },
    "GA Slime": {
      key: 14,
      img: "assets/slime.png",
      modes: ["None", null, "Normal", "Chaos", null],
      prices: [0, 0, 171610000, 451562500, 0]
    },
    "Lucid": {
      key: 15,
      img: "assets/lucid.png",
      modes: ["None", "Easy", "Normal", "Hard", null],
      prices: [0, 175562500, 203062500, 400000000, 0]
    },
    "Will": {
      key: 16,
      img: "assets/will.png",
      modes: ["None", "Easy", "Normal", "Hard", null],
      prices: [0, 191275000, 232562500, 441000000, 0]
    },
    "Gloom": {
      key: 17,
      img: "assets/gloom.png",
      modes: ["None", null, "Normal", "Chaos", null],
      prices: [0, 0, 248062500, 462250000, 0]
    },
    "V Hilla": {
      key: 18,
      img: "assets/vhilla.png",
      modes: ["None", null, "Normal", "Hard", null],
      prices: [0, 0, 447600000, 552250000, 0]
    },
    "Darknell": {
      key: 19,
      img: "assets/darknell.png",
      modes: ["None", null, "Normal", "Hard", null],
      prices: [0, 0, 264062500, 484000000, 0]
    },
    "Seren": {
      key: 20,
      img: "assets/seren.png",
      modes: ["None", null, "Normal", "Hard", "Extreme"],
      prices: [0, 0, 668437500, 756250000, 3025000000]
    },
    "Kalos": {
      key: 21,
      img: "assets/kalos.png",
      modes: ["None", "Easy", "Normal", "Chaos", "Extreme"],
      prices: [0, -1, 1000000000, -1, -1]
    },
    "Kaling": {
      key: 22,
      img: "assets/kaling.png",
      modes: ["None", "Easy", "Normal", "Chaos", "Extreme"],
      prices: [0, -1, -1, -1, -1]
    },
    
  }
const AssetsObject = [
  {
    kanjiName: "ichi",
    kanji: "一",
    romaji: "one",
    illustration: "images/One-finger.png",
    narration: "audio/ichi-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "ni",
    kanji: "二",
    romaji: "two",
    illustration: "images/Two-fingers.png",
    narration: "audio/Ni-narration.wav",
    duration: 475,
  },
  {
    kanjiName: "san",
    kanji: "三",
    romaji: "three",
    illustration: "images/Three-fingers.png",
    narration: "audio/San-narration.wav",
    duration: 425,
  },
  {
    kanjiName: "yon",
    kanji: "四",
    romaji: "four",
    illustration: "images/Three-fingers.png",
    narration: "audio/Yon-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "go",
    kanji: "五",
    romaji: "five",
    illustration: "images/Three-fingers.png",
    narration: "audio/Go-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "roku",
    kanji: "六",
    romaji: "six",
    illustration: "images/Three-fingers.png",
    narration: "audio/Roku-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "shichi",
    kanji: "七",
    romaji: "seven",
    illustration: "images/Three-fingers.png",
    narration: "audio/Shichi-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "hachi",
    kanji: "八",
    romaji: "eight",
    illustration: "images/Three-fingers.png",
    narration: "audio/Hachi-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "kyuu",
    kanji: "九",
    romaji: "nine",
    illustration: "images/Three-fingers.png",
    narration: "audio/Kyuu-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "juu",
    kanji: "十",
    romaji: "ten",
    illustration: "images/Three-fingers.png",
    narration: "audio/Juu-narration.wav",
    duration: 610,
  },
];

const pause = 10;

export const getStart = (index: number) => {
  return AssetsObject.slice(0, index).reduce(
    (total, asset) => total + asset.duration + pause,
    0,
  );
};

export default AssetsObject;

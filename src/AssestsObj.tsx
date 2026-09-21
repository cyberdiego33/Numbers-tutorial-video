const AssetsObject = [
  {
    kanjiName: "ichi",
    kanji: "一",
    romaji: "one",
    illustration1: "images/ichi-illustration-1.png",
    illustration2: "images/ichi-illustration-2.png",
    narration: "audio/ichi-narration.wav",
    duration: 610,
  },
  {
    kanjiName: "ni",
    kanji: "二",
    romaji: "two",
    illustration1: "images/ni-illustration-1.png",
    illustration2: "images/ni-illustration-2.png",
    narration: "audio/Ni-narration.wav",
    duration: 475,
  },
  {
    kanjiName: "san",
    kanji: "三",
    romaji: "three",
    illustration: "images/san-illustration.png",
    narration: "audio/San-narration.wav",
    duration: 425,
  },
  {
    kanjiName: "yon",
    kanji: "四",
    romaji: "four",
    illustration: "images/yon-illustration.png",
    narration: "audio/Yon-narration.wav",
    duration: 565,
  },
  {
    kanjiName: "go",
    kanji: "五",
    romaji: "five",
    illustration: "images/go-illustration.png",
    narration: "audio/Go-narration.wav",
    duration: 815,
  },
  {
    kanjiName: "roku",
    kanji: "六",
    romaji: "six",
    illustration: "images/roku-illustration.png",
    narration: "audio/Roku-narration.wav",
    duration: 770,
  },
  {
    kanjiName: "shichi",
    kanji: "七",
    romaji: "seven",
    illustration: "images/shichi-illustration.png",
    narration: "audio/Shichi-narration.wav",
    duration: 500,
  },
  {
    kanjiName: "hachi",
    kanji: "八",
    romaji: "eight",
    illustration: "images/hachi-illustration.png",
    narration: "audio/Hachi-narration.wav",
    duration: 490,
  },
  {
    kanjiName: "kyuu",
    kanji: "九",
    romaji: "nine",
    illustration: "images/kyuu-illustration.png",
    narration: "audio/Kyuu-narration.wav",
    duration: 535,
  },
  {
    kanjiName: "juu",
    kanji: "十",
    romaji: "ten",
    illustration: "images/juu-illustration.png",
    narration: "audio/Juu-narration.wav",
    duration: 620,
  },
  {
    kanjiName: "afterJuu",
    kanji: "百 - 万",
    romaji: "Hyaku to Man",
    illustration: "images/Three-fingers.png",
    narration: "audio/Afterjuu-narration.wav",
    duration: 330,
  },
  {
    kanjiName: "Hyaku",
    kanji: "百",
    romaji: "Hundred",
    illustration: "images/hyaku-illustration.png",
    narration: "audio/Hyaku-narration.wav",
    duration: 515,
  },
  {
    kanjiName: "sen",
    kanji: "千",
    romaji: "thousand",
    illustration: "images/sen-illustration.png",
    narration: "audio/Sen-narration.wav",
    duration: 650,
  },
  {
    kanjiName: "man",
    kanji: "万",
    romaji: "ten thousand",
    illustration: "images/man-illustration.png",
    narration: "audio/Man-narration.wav",
    duration: 940,
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

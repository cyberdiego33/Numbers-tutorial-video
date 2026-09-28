const LectureAssetsObj = [
  {
    index: 1,
    kanjiName: "ichi",
    kanji: "一",
    romaji: "one",
    illustration1: "images/ichi-illustration-1.png",
    illustration2: "images/ichi-illustration-2.png",
    narration: "audio3/ichi-narration.wav",
    duration: 610,
  },
  {
    index: 2,
    kanjiName: "ni",
    kanji: "二",
    romaji: "two",
    illustration1: "images/ni-illustration-1.png",
    illustration2: "images/ni-illustration-2.png",
    narration: "audio3/Ni-narration.wav",
    duration: 475,
  },
  {
    index: 3,
    kanjiName: "san",
    kanji: "三",
    romaji: "three",
    illustration: "images/san-illustration.png",
    narration: "audio3/San-narration.wav",
    duration: 425,
  },
  {
    index: 4,
    kanjiName: "yon",
    kanji: "四",
    romaji: "four",
    illustration: "images/yon-illustration.png",
    narration: "audio3/Yon-narration.wav",
    duration: 565,
  },
  {
    index: 5,
    kanjiName: "go",
    kanji: "五",
    romaji: "five",
    illustration: "images/go-illustration.png",
    narration: "audio3/Go-narration.wav",
    duration: 815,
  },
  {
    index: 6,
    kanjiName: "roku",
    kanji: "六",
    romaji: "six",
    illustration: "images/roku-illustration.png",
    narration: "audio3/Roku-narration.wav",
    duration: 770,
  },
  {
    index: 7,
    kanjiName: "shichi",
    kanji: "七",
    romaji: "seven",
    illustration: "images/shichi-illustration.png",
    narration: "audio/Shichi-narration.wav",
    duration: 500,
  },
  {
    index: 8,
    kanjiName: "hachi",
    kanji: "八",
    romaji: "eight",
    illustration: "images/hachi-illustration.png",
    narration: "audio/Hachi-narration.wav",
    duration: 490,
  },
  {
    index: 9,
    kanjiName: "kyuu",
    kanji: "九",
    romaji: "nine",
    illustration: "images/kyuu-illustration.png",
    narration: "audio/Kyuu-narration.wav",
    duration: 535,
  },
  {
    index: 10,
    kanjiName: "juu",
    kanji: "十",
    romaji: "ten",
    illustration: "images/juu-illustration.png",
    narration: "audio/Juu-narration.wav",
    duration: 620,
  },
  {
    index: 11,
    kanjiName: "afterJuu",
    kanji: "百 - 万",
    romaji: "Hyaku to Man",
    illustration: "images/Three-fingers.png",
    narration: "audio/Afterjuu-narration.wav",
    duration: 330,
  },
  {
    index: 12,
    kanjiName: "Hyaku",
    kanji: "百",
    romaji: "Hundred",
    illustration: "images/hyaku-illustration.png",
    narration: "audio/Hyaku-narration.wav",
    duration: 515,
  },
  {
    index: 13,
    kanjiName: "sen",
    kanji: "千",
    romaji: "thousand",
    illustration: "images/sen-illustration.png",
    narration: "audio/Sen-narration.wav",
    duration: 650,
  },
  {
    index: 14,
    kanjiName: "man",
    kanji: "万",
    romaji: "ten thousand",
    illustration: "images/man-illustration.png",
    narration: "audio/Man-narration.wav",
    duration: 940,
  },
];

const pause = 10;

export const getLectureDuration = (index: number) => {
  return LectureAssetsObj.slice(0, index).reduce(
    (total, asset) => total + asset.duration + pause,
    0,
  );
};

export const OpeningAssetsObj = {
  title: "Learning Kanji with Mnemonics",
  topic: "Numbers",
  Narration: "audio3/Opening-narration.wav",
  duration: 650,
};

export const ClosingAssetsObj = {
  title: "Learning Kanji with Mnemonics",
  topic: "Numbers",
  Narration: "audio3/Closing-narration.wav",
  duration: 1685,
};

export const TotalDurations = {
  openingSceneDuration: OpeningAssetsObj.duration,
  closingSceneDuration: ClosingAssetsObj.duration,
  lectureSceneDuration: getLectureDuration(14),
  videoTotalduration:
    OpeningAssetsObj.duration +
    ClosingAssetsObj.duration +
    getLectureDuration(14),

  openingSceneStart: 0,
  lectureSceneStart: OpeningAssetsObj.duration,
  closingSceneStart: OpeningAssetsObj.duration + getLectureDuration(14),
};

export default LectureAssetsObj;

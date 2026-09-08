import { AbsoluteFill, Sequence, staticFile } from "remotion";
import Ichi from "./KanjiComponents/Ichi";
import Ni from "./KanjiComponents/Ni";
import AssetsObject, { getStart } from "./AssestsObj";
import San from "./KanjiComponents/San";

const LectureBackground = function () {
  const [ichiAssets, niAssets, sanAssets] = AssetsObject;

  return (
    <AbsoluteFill
      style={{
        // Industry Standard: Load background image via staticFile from public folder
        backgroundImage: `url(${staticFile("images/Lecture-Background.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#e5e8ee",
      }}
    >
      <Sequence from={getStart(0)} durationInFrames={ichiAssets.duration}>
        <Ichi />
      </Sequence>

      <Sequence from={getStart(1)} durationInFrames={niAssets.duration}>
        <Ni />
      </Sequence>

      <Sequence from={getStart(2)} durationInFrames={sanAssets.duration}>
        <San />
      </Sequence>
    </AbsoluteFill>
  );
};

export default LectureBackground;

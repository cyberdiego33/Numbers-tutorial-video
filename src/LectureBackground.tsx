import { AbsoluteFill, Sequence, staticFile } from "remotion";
import Ichi from "./KanjiComponents/Ichi";
import Ni from "./KanjiComponents/Ni";
import AssetsObject, { getStart } from "./AssestsObj";
import San from "./KanjiComponents/San";
import Yon from "./KanjiComponents/Yon";
import Go from "./KanjiComponents/Go";
import Roku from "./KanjiComponents/Roku";
import Shichi from "./KanjiComponents/Shichi";
import Hachi from "./KanjiComponents/Hachi";
import Kyuu from "./KanjiComponents/Kyuu";
import Juu from "./KanjiComponents/Juu";
import AfterJuu from "./KanjiComponents/AfterJuu";
import Hyaku from "./KanjiComponents/Hyaku";
import Sen from "./KanjiComponents/Sen";
import Man from "./KanjiComponents/Man";

const KanjiSequence = function () {
  const [
    ichiAssets,
    niAssets,
    sanAssets,
    yonAssets,
    goAssets,
    rokuAssets,
    shichiAssets,
    hachiAssets,
    kyuuAssets,
    JuuAssets,
    AfterJuuAssets,
    HyakuAssets,
    SenAssets,
    ManAssets,
  ] = AssetsObject;

  return (
    <>
      <Sequence from={getStart(0)} durationInFrames={ichiAssets.duration}>
        <Ichi />
      </Sequence>

      <Sequence from={getStart(1)} durationInFrames={niAssets.duration}>
        <Ni />
      </Sequence>

      <Sequence from={getStart(2)} durationInFrames={sanAssets.duration}>
        <San />
      </Sequence>

      <Sequence from={getStart(3)} durationInFrames={yonAssets.duration}>
        <Yon />
      </Sequence>

      <Sequence from={getStart(4)} durationInFrames={goAssets.duration}>
        <Go />
      </Sequence>

      <Sequence from={getStart(5)} durationInFrames={rokuAssets.duration}>
        <Roku />
      </Sequence>

      <Sequence from={getStart(6)} durationInFrames={shichiAssets.duration}>
        <Shichi />
      </Sequence>

      <Sequence from={getStart(7)} durationInFrames={hachiAssets.duration}>
        <Hachi />
      </Sequence>

      <Sequence from={getStart(8)} durationInFrames={kyuuAssets.duration}>
        <Kyuu />
      </Sequence>

      <Sequence from={getStart(9)} durationInFrames={JuuAssets.duration}>
        <Juu />
      </Sequence>

      <Sequence from={getStart(10)} durationInFrames={AfterJuuAssets.duration}>
        <AfterJuu />
      </Sequence>

      <Sequence from={getStart(11)} durationInFrames={HyakuAssets.duration}>
        <Hyaku />
      </Sequence>

      <Sequence from={getStart(12)} durationInFrames={SenAssets.duration}>
        <Sen />
      </Sequence>

      <Sequence from={getStart(13)} durationInFrames={ManAssets.duration}>
        <Man />
      </Sequence>
    </>
  );
};

const LectureBackground = function () {
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
      {/* <Man /> */}
      <KanjiSequence />
    </AbsoluteFill>
  );
};

export default LectureBackground;

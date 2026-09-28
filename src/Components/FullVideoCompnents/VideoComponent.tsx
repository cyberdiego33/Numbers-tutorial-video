import { Sequence } from "remotion";
import FloatingKanji from "../OpeningComponent/FloatingKanji";
import LectureBackground from "../LectureComponents/LectureBackground";
import { TotalDurations } from "../../assets/AssestsObj";
import ClosingComponent from "../ClosingComponent/ClosingComponent";

const VideoComponent = function () {
  const {
    openingSceneDuration,
    lectureSceneStart,
    lectureSceneDuration,
    closingSceneStart,
  } = TotalDurations;

  return (
    <>
      <Sequence durationInFrames={openingSceneDuration}>
        <FloatingKanji />
      </Sequence>
      <Sequence
        from={lectureSceneStart}
        durationInFrames={lectureSceneDuration}
      >
        <LectureBackground />
      </Sequence>
      <Sequence from={closingSceneStart}>
        <ClosingComponent />
      </Sequence>
    </>
  );
};

export default VideoComponent;

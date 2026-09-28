import { CalculateMetadataFunction, Composition } from "remotion";
import { TotalDurations } from "./assets/AssestsObj";
import VideoComponent from "./Components/FullVideoCompnents/VideoComponent";

// import FloatingKanji from "./Components/OpeningComponent/FloatingKanji";
// import LectureBackground from "./Components/LectureComponents/LectureBackground";
// import ClosingComponent from "./Components/ClosingComponent/ClosingComponent";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  const { videoTotalduration } = TotalDurations;

  return (
    <Composition
      id="MyComp"
      component={VideoComponent}
      // component={ClosingComponent}
      durationInFrames={videoTotalduration}
      fps={30}
      width={1920}
      height={1080}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = () => {
  return null;
};

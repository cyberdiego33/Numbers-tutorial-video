import { CalculateMetadataFunction, Composition } from "remotion";
import LectureBackground from "./LectureBackground";
import { getStart } from "./AssestsObj";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  const calTotalDuration = getStart(3);

  return (
    <Composition
      id="MyComp"
      component={LectureBackground}
      durationInFrames={calTotalDuration}
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

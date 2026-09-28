import {
  AbsoluteFill,
  Easing,
  Html5Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import styled from "styled-components";
import LectureAssetsObj from "../../../assets/AssestsObj";

const Container = styled(AbsoluteFill)`
  position: relative;
`;

const MnemonicsContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const InfoContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MainKanji = styled.p``;

const Kyuu = function () {
  const frame = useCurrentFrame();
  const kanjiAssets = LectureAssetsObj[8];

  const MainKanjiOpacity = interpolate(frame, [0, 10], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const MainRomajiOpacity = interpolate(frame, [35, 45], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const MainEnglishTransOpacity = interpolate(frame, [75, 85], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const MnemonicsMoveRight = interpolate(frame, [130, 140], [-100, 30], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const InfoMoveRight = interpolate(frame, [130, 140], [50, 70], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Container>
        <MnemonicsContent style={{ left: `${MnemonicsMoveRight}%` }}>
          <Img
            src={staticFile(kanjiAssets.illustration)}
            style={{ width: 700, height: 400 }}
          />
        </MnemonicsContent>
        <InfoContent style={{ left: `${InfoMoveRight}%` }}>
          <MainKanji
            className="rubik-font"
            style={{ opacity: `${MainKanjiOpacity}` }}
          >
            {kanjiAssets.kanji}
          </MainKanji>
          <div>
            <p style={{ fontSize: "4rem" }}>
              <span
                style={{
                  color: "oklch(27.5% 0.011 216.9)",
                  opacity: `${MainRomajiOpacity}`,
                }}
              >
                {kanjiAssets.kanjiName}
              </span>
              <span
                style={{
                  color: "oklch(37.8% 0.015 216)",
                  opacity: `${MainEnglishTransOpacity}`,
                }}
              >
                {" "}
                - {kanjiAssets.romaji}
              </span>
            </p>
          </div>
        </InfoContent>
      </Container>
      <Html5Audio src={staticFile(kanjiAssets.narration)} />
    </>
  );
};

export default Kyuu;

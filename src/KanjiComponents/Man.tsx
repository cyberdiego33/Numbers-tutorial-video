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
import AssetsObject from "../AssestsObj";

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

const Man = function () {
  const frame = useCurrentFrame();
  const kanjiAssets = AssetsObject[13];

  const MainKanjiOpacity = interpolate(frame, [0, 10], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mainKanjiScale = interpolate(frame, [190, 195, 200], [1, 1.1, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const MainRomajiOpacity = interpolate(frame, [35, 45], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const MainEnglishTransOpacity = interpolate(frame, [100, 110], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const MnemonicsMoveRight = interpolate(frame, [430, 440], [-100, 30], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const InfoMoveRight = interpolate(frame, [430, 440], [50, 70], {
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
            style={{
              opacity: `${MainKanjiOpacity}`,
              transform: `scale(${mainKanjiScale})`,
            }}
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

export default Man;

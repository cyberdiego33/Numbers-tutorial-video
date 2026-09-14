import {
  AbsoluteFill,
  Easing,
  Html5Audio,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import styled from "styled-components";
import AssetsObject from "../AssestsObj";

const Container = styled(AbsoluteFill)`
  position: relative;
`;
const InfoContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MainKanji = styled.p``;

const AfterJuu = function () {
  const frame = useCurrentFrame();
  const kanjiAssets = AssetsObject[10];

  const MainKanjiOpacity = interpolate(frame, [0, 10], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Container>
        <InfoContent>
          <p style={{ marginBottom: "20px", fontSize: "4rem" }}>
            Let's Learn bigger numbers
          </p>
          <MainKanji
            className="rubik-font"
            style={{
              opacity: `${MainKanjiOpacity}`,
            }}
          >
            {kanjiAssets.kanji}
          </MainKanji>
        </InfoContent>
      </Container>
      <Html5Audio src={staticFile(kanjiAssets.narration)} />
    </>
  );
};

export default AfterJuu;

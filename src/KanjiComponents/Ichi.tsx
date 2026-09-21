import {
  AbsoluteFill,
  Html5Audio,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import styled from "styled-components";
import AssetsObject from "../AssestsObj";

// Static Styles remain in Styled Components (no heavy frame-recalculations)
const Container = styled(AbsoluteFill)`
  position: relative;
`;

const MnemonicsContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 16px; /* Added spacing between illustrations */
`;

const InfoContent = styled.div`
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const MainKanji = styled.p``;

export const Ichi = () => {
  const frame = useCurrentFrame();
  const KanjiAssets = AssetsObject[0];

  // 1. Text Opacities & Scale Animations
  const mainKanjiOpacity = interpolate(frame, [0, 30], [0, 1], {
    easing: Easing.out(Easing.ease),
    extrapolateRight: "clamp",
  });
  const mainKanjiScale = interpolate(frame, [215, 230, 250], [1, 1.1, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mainRomajiOpacity = interpolate(frame, [45, 50], [0, 1], {
    easing: Easing.out(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mainEnglishTransOpacity = interpolate(frame, [110, 130], [0, 1], {
    easing: Easing.out(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 2. Structural Transitions (Frames 320-330)
  const mnemonicsMoveRight = interpolate(frame, [320, 330], [-100, 30], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const infoMoveRight = interpolate(frame, [320, 330], [50, 70], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // 3. Illustration Tweaks
  const illustrationOpacity = interpolate(frame, [410, 425], [0, 1], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Container>
        {/* Animated values mapped cleanly via native inline styling */}
        <MnemonicsContent style={{ left: `${mnemonicsMoveRight}%` }}>
          <Img
            style={{ width: 700, height: 400 }}
            src={staticFile(KanjiAssets.illustration1)}
          />
          <Img
            style={{ width: 700, height: 400, opacity: illustrationOpacity }}
            src={staticFile(KanjiAssets.illustration2)}
          />
        </MnemonicsContent>

        <InfoContent style={{ left: `${infoMoveRight}%` }}>
          <MainKanji
            className="rubik-font"
            style={{
              opacity: mainKanjiOpacity,
              transform: `scale(${mainKanjiScale})`, // This doesn't work properly again, when ever it reaches the frame it doesn't scale up and down abit
              transformOrigin:
                "center center" /* Ensures the pop scales out from the middle */,
            }}
          >
            {KanjiAssets.kanji}
          </MainKanji>
          <div>
            <p style={{ fontSize: "4rem", margin: 0 }}>
              <span
                style={{
                  opacity: mainRomajiOpacity,
                  color: "oklch(27.5% 0.011 216.9)",
                }}
              >
                {KanjiAssets.kanjiName}
              </span>
              <span
                style={{
                  opacity: mainEnglishTransOpacity,
                  color: "oklch(37.8% 0.015 216)",
                }}
              >
                {" "}
                - {KanjiAssets.romaji}
              </span>
            </p>
          </div>
        </InfoContent>
      </Container>
      <Html5Audio src={staticFile(KanjiAssets.narration)} />
    </>
  );
};

export default Ichi;

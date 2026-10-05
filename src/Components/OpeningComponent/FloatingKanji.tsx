import {
  AbsoluteFill,
  Easing,
  Html5Audio,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
} from "remotion";
import styled from "styled-components";
import "../../index.css";
import { OpeningAssetsObj } from "../../assets/AssestsObj";

const kanjis = [
  {
    text: "一",
    styles: {
      top: "20%",
      left: "10%",
      fontSize: "7rem",
    },
    opacity: 0.95,
  },
  {
    text: "二",
    styles: {
      top: "60%",
      left: "7%",
    },
    opacity: 0.85,
  },
  {
    text: "三",
    styles: {
      bottom: "7%",
      left: "40%",
      fontSize: "7rem",
    },
    opacity: 0.95,
  },
  {
    text: "四",
    styles: {
      bottom: "40%",
      right: "10%",
      fontSize: "5rem",
    },
    opacity: 1,
  },
  {
    text: "五",
    styles: {
      top: "15%",
      right: "17%",
      fontSize: "6rem",
    },
    opacity: 0.95,
  },
];

const GlowingLights = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 100%;
  position: absolute;
  opacity: 0.5;
  filter: blur(60px);
  pointer-events: none;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const MainTitle = styled.p`
  font-size: 5rem;
  text-align: center;
  color: #5b2cd3;
  -webkit-text-stroke: 15px #fff7e8;
  paint-order: stroke fill;
`;

const MainTopic = styled.p`
  font-size: 5rem;
  text-align: center;
  color: #fff7e8;
`;

const Floatingkanjis = styled.div`
  font-family: "Zen Maru Gothic", sans-serif;
  font-weight: 800;
  font-style: bold;
  color: oklch(83.3% 0.145 321.434);
  font-size: 6rem;
  opacity: 0.6;
  position: absolute;
`;

const FloatingKanji = function () {
  const frame = useCurrentFrame();
  const { title, topic, Narration, BackgroundMusic, volume } = OpeningAssetsObj;

  const glowLocalFrame1 = (frame - 60) % 60;
  const glowAnimation1 = interpolate(
    glowLocalFrame1,
    [0, 30, 59],
    [0, 0.7, 0],
    { easing: Easing.out(Easing.ease) },
  );

  const glowLocalFrame2 = (frame - 90) % 60;
  const glowAnimation2 = interpolate(
    glowLocalFrame2,
    [0, 30, 59],
    [0, 0.4, 0],
    { easing: Easing.out(Easing.ease) },
  );

  const TitleAnimateIn = interpolate(frame, [0, 30], [-120, 0], {
    easing: Easing.in(Easing.ease),
  });

  const TopicAnimateOpacity = interpolate(frame, [300, 310], [0, 1], {
    easing: Easing.in(Easing.ease),
  });

  return (
    <AbsoluteFill
      style={{
        position: "relative",
        background:
          "linear-gradient(oklch(49.1% 0.27 292.581) 40%, oklch(51.8% 0.253 323.949))",
      }}
    >
      <GlowingLights
        style={{
          backgroundColor: "oklch(0.585 0.233 277.117)",
          top: "12.5%",
          left: "12.5%",
          opacity: glowAnimation1,
        }}
      ></GlowingLights>
      <GlowingLights
        style={{
          backgroundColor: "oklch(0.656 0.241 354.308)",
          top: "50%",
          right: "7.5%",
          opacity: glowAnimation2,
        }}
      ></GlowingLights>

      <TitleContainer style={{ left: `${TitleAnimateIn}%` }}>
        <MainTitle className="baloo-2-title">{title}</MainTitle>
        <MainTopic
          style={{ opacity: `${TopicAnimateOpacity}` }}
          className="poppins-extrabold-italic"
        >
          {topic}
        </MainTopic>
      </TitleContainer>

      {kanjis.map((kanji, i) => {
        const startOpacity = (i + 1) * 30 + 290;
        const fullOpacity = startOpacity + 30;
        const kanjiOpacity = interpolate(
          frame,
          [startOpacity, fullOpacity],
          [0, kanji.opacity],
        );

        // For transform property
        const localFrame = (frame - fullOpacity) % 60;

        const infiniteTransform = interpolate(
          localFrame,
          [0, 30, 60],
          [0, -10, 0],
          { extrapolateLeft: "clamp" },
        );
        return (
          <Floatingkanjis
            style={{
              ...kanji.styles,
              transform: `translateY(${infiniteTransform}px)`,
              opacity: kanjiOpacity,
            }}
          >
            {kanji.text}
          </Floatingkanjis>
        );
      })}
      <Sequence from={60}>
        <Html5Audio src={staticFile(Narration)} />
      </Sequence>
      <Html5Audio src={staticFile(BackgroundMusic)} volume={volume} />
    </AbsoluteFill>
  );
};

export default FloatingKanji;

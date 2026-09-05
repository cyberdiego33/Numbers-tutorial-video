import { AbsoluteFill, Html5Audio, Easing, interpolate, staticFile, useCurrentFrame } from "remotion";
import styled from "styled-components";
import lectureBg from "./assets/images/Lecture-Background.png";


const FirstKanji = styled(AbsoluteFill)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainKanji = styled.span``
const MainRomaji = styled.span``
const MainEnglishTrans = styled.span``

const LectureBackground = function () {
  const frame = useCurrentFrame()
  const MainKanjiDelay = interpolate(frame, [0, 30], [0, 1], {easing: Easing.out(Easing.ease)}) 
  const MainKanjiScale = interpolate(frame, [215, 230, 250], [1, 1.2, 1], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})
  const MainRomajiDelay = interpolate(frame, [0,45,50], [0, 0, 1], {easing: Easing.out(Easing.ease)})
  const MainEnglishTransDelay = interpolate(frame, [0,110,130], [0, 0, 1], {easing: Easing.out(Easing.ease)})
  
  return (
    <AbsoluteFill
      style={{
        background: `#4a5568 url(${lectureBg}) no-repeat center / cover fixed`,
        position: "relative",
      }}
    >
      <FirstKanji>
        <MainKanji className="rubik-font" style={{opacity: MainKanjiDelay, transform: `scale(${MainKanjiScale})`}}>一</MainKanji>
        <div>
          <p style={{fontSize: "3rem"}}>
            <MainRomaji style={{opacity: MainRomajiDelay,  color: "oklch(27.5% 0.011 216.9)"}}>ichi</MainRomaji>
            <MainEnglishTrans style={{opacity: MainEnglishTransDelay, color: "oklch(37.8% 0.015 216)"}}> - one</MainEnglishTrans>
          </p>
        </div>
      </FirstKanji>
      <Html5Audio src={staticFile("audio/ichi-narration.wav")} />
    </AbsoluteFill>
  );
};

export default LectureBackground;

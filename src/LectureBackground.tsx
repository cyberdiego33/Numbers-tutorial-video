import { AbsoluteFill, staticFile } from "remotion";
import Ichi from "./KanjiComponents/Ichi";


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
      <Ichi />
    </AbsoluteFill>
  );
};

export default LectureBackground;

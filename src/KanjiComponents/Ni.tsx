import { AbsoluteFill, Easing, Html5Audio, Img, interpolate, staticFile, useCurrentFrame } from "remotion"
import styled from "styled-components"
import AssetsObject from "../AssestsObj"

const Container = styled(AbsoluteFill)`
    position: relative;
`

const MnemonicsContent = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
`
const InfoContent = styled.div`
    position: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
`
const MainKanji = styled.p``


const Ni = function() {
    const frame = useCurrentFrame()
    const KanjiAssets = AssetsObject[1]

    const MainKanjiOpacity = interpolate(frame, [0,10], [0,1], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})
    const MainRomajiOpacity = interpolate(frame, [45,50], [0,1], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})
    const MainEnglishTransOpacity = interpolate(frame, [95, 100], [0, 1], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})

    const MnemonicsMoveRight = interpolate(frame, [170, 180], [-100, 30], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})
    const InfoMoveRight = interpolate(frame, [170, 180], [50, 70], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})
    
    const Mnemonics2Opacity = interpolate(frame, [210, 211], [0,1], {easing: Easing.inOut(Easing.ease), extrapolateLeft: "clamp", extrapolateRight: "clamp"})

    return (
        <>
            <Container>
                <MnemonicsContent style={{left: `${MnemonicsMoveRight}%`}}>
                    <Img src={staticFile(KanjiAssets.illustration)} style={{width: 700, height: 400}} />
                    <Img src={staticFile(KanjiAssets.illustration)} style={{width: 700, height: 400, opacity: `${Mnemonics2Opacity}`}} />
                </MnemonicsContent>

                <InfoContent style={{left: `${InfoMoveRight}%`}}>
                    <MainKanji className="rubik-font" style={{opacity: `${MainKanjiOpacity}`}}>{KanjiAssets.kanji}</MainKanji>
                    <div>
                        <p style={{ fontSize: "4rem", margin: 0 }}>
                        <span style={{ color: "oklch(27.5% 0.011 216.9)", opacity: `${MainRomajiOpacity}` }}>{KanjiAssets.kanjiName}</span>
                        <span style={{ color: "oklch(37.8% 0.015 216)", opacity: `${MainEnglishTransOpacity}` }}> - {KanjiAssets.romaji}</span>
                        </p>
                    </div>
                </InfoContent>
            </Container>
            <Html5Audio src={staticFile(KanjiAssets.narration)} />
        </>
    )
}

export default Ni
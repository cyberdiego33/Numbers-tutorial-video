import { AbsoluteFill, Img, staticFile } from "remotion"
import styled from "styled-components"

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
    postion: absolute;
    top: 40%;
    transform: translate(-50%, -50%);
`
const MainKanji = styled.p``


const Ni = function() {
    return (
        <Container>
            <MnemonicsContent>
                <Img src={staticFile("imagees/Two-fingers.png")} style={{width: "400px", height: "500px"}} />
                <Img src={staticFile("imagees/Two-fingers.png")} style={{width: "400px", height: "500px"}} />
            </MnemonicsContent>

            <InfoContent>
                <MainKanji className="rubik-font">二</MainKanji>
                <div>
                    <p style={{ fontSize: "4rem", margin: 0 }}>
                    <span style={{ color: "oklch(27.5% 0.011 216.9)" }}>ichi</span>
                    <span style={{ color: "oklch(37.8% 0.015 216)" }}> - one</span>
                    </p>
                </div>
            </InfoContent>
        </Container>
    )
}

export default Ni
import styled from "styled-components";

export default function Header({ picture }) {
    return(
        <Container>
            <h1>TrackIt</h1>
            <img src={picture} alt="Foto do Usuário" />
        </Container>
    );
}

const Container = styled.header`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 0 18px 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 40px;
        font-family: "Playball", cursive;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
    }
    `;
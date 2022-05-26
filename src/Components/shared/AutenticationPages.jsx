import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";

export default function AutenticationPages(props) {
    return (
        <Container>
            <img src={logo} alt="Logo da aplicação Track It" />
            <Forms onSubmit={props.onSubmit}>
                {props.children}
            </Forms>
            <Link to={props.link}><p>{props.p}</p></Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 65px;

    img {
        width: 180px;
        height: 180px;
    }

    p {
        color: #52B6FF;
        font-size: 14px;
        text-decoration: underline;
    }
    `;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
    margin-bottom: 19px;

    input {
        background-color: #FFFFFF;
        border: 1px solid #D4D4D4;
        width: 303px;
        height: 45px;
        border-radius: 5px;
        margin-bottom: 6px;
        padding-left: 10px;
        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
            opacity: 1;
        }
    }

    [type="submit"] {
            background-color: #52B6FF;
            color: #FFFFFF;
            font-size: 21px;
        }
    `;
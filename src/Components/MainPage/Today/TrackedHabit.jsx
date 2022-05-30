import styled from "styled-components";

export default function TrackedHabit(props) {
    return (
        <Container>
            <Text>
                <p>{props.habit.name}</p>
                <p>Sequência atual: {props.habit.currentSequence} dias<br />Seu recorde: {props.habit.highestSequence} dias</p>
            </Text>
            <Button checked={props.habit.done}>
                <ion-icon name="checkmark"></ion-icon>
            </Button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-around;
    padding-top: 13px;
    margin-bottom: 10px;
    `;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    p {
        color: #666666;
    }
    p:first-child {
        font-size: 20px;
        margin-bottom: 8px;
    }
    p:last-child {
        font-size: 13px;
    }
    `;

const Button = styled.div`
    width: 69px;
    height: 69px;
    background-color: ${props => props.checked ? "#8FC549" : "#EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    ion-icon {
        width: 50px;
        height: 43px;
        --ionicon-stroke-width: 85px;
        color: #FFFFFF;
    }
    `;
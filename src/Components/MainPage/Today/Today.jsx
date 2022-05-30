import { useEffect, useState } from "react";
import styled from "styled-components";
import { getTodayHabits } from "../../../Service/Requisitions";
import UserContext from "../../../contexts/UserContext";
import { useContext } from "react";
import TrackedHabit from "./TrackedHabit";
import Body from "../../shared/Body";
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";

export default function Today() {
    const { user } = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState([]);
    useEffect(() => {
        const promise = getTodayHabits(user.token);
        promise.then(response => {
            setTodayHabits(response.data);
        });
    })
    
    return(
        <>
            <Header />
            <Body>
                <h2>Segunda, 17/05</h2>
                <p>Nenhum hábito concluído ainda</p>
                <TodayHabits>
                    {todayHabits.length !== 0 ?
                        todayHabits.map((habit, index) => <TrackedHabit habit={habit} key={index}/>)
                        :
                        ""}
                </TodayHabits>
            </Body>
            <Footer />
        </>
    );
}

const Container = styled.div`
    
    `;

const TodayHabits = styled.div`
    margin-top: 28px;
    `;
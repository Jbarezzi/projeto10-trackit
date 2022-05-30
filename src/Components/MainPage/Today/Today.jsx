import { useEffect, useState } from "react";
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
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
    const [reload, setReload] = useState(false);
    const [todayHabits, setTodayHabits] = useState([]);
    useEffect(() => {
        const promise = getTodayHabits(user.token);
        promise.then(response => {
            setTodayHabits(response.data);
        });
    }, [user.token, reload]);

    dayjs.extend(require("dayjs/plugin/updateLocale"));
    dayjs.updateLocale("pt-br", {
        weekdays: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
            ],
        });

    return(
        <>
            <Header />
            <Body>
                <Title>
                    <Date>{`${dayjs().locale('pt-br').format("dddd, DD/MM")}`}</Date>
                    <p>Nenhum hábito concluído ainda</p>
                </Title>
                <TodayHabits>
                    {todayHabits.length !== 0 ?
                        todayHabits.map((habit, index) => <TrackedHabit habit={habit} key={index} reload={reload} setReload={setReload}/>)
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
    margin-bottom: 110px;
    width: 100%;
    `;

const Title = styled.div`
    width: 100%;
    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 5px;
    }
    p {
        color: #BABABA;
        font-size: 18px;
    }
    `;

const Date = styled.h2`
    color: #126BA5;
    font-size: 23px;
    padding-top: 20px;
    margin-bottom: 5px;
    `;
import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

//custome components
import { Container } from "../components/shared";
import { colors } from "../components/colors";

const WelcomeContainer = styled.ActivityIndicator(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    flex: 1;
    width: 100%;
    max-height: 55%;
`;

const BottomSection = styled.View`
    flex: 1;
    width: 100%;
    padding: 25px;
`;

const Welcome = () => {
    return(
        <>
        <StatusBar style="light" />
        <WelcomeContainer></WelcomeContainer>
        </>
    );
};
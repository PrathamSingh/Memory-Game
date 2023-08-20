import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { onNextLevel } from "../../store/dataSlice";
import homeImage from "./home_image.png";

import { Button } from "../styles/common";

const Container = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const dispatch = useDispatch();

  const startClickHandler = useCallback(
    function () {
      dispatch(onNextLevel());
    },
    [dispatch]
  );

  return (
    <Container>
      <img
        style={{ width: "600px", height: "380px", marginTop: "-12%" }}
        src={homeImage}
        alt="memory_game_image"
      />
      <header>
        <h1>Memory Game</h1>
      </header>
      <div>
        <div style={{ margin: "50px" }}>
          <p>
            Remember the colored boxes displayed and click on the boxes once the
            game starts
          </p>
          <p>Difficulty will increase with each level</p>
        </div>
        <Button large onClick={startClickHandler}>
          Start
        </Button>
      </div>
    </Container>
  );
}

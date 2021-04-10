import {
  Switch,
  Route,
} from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import { Rockets } from "./pages/Rockets";
import { Launches } from "./pages/Launches";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

function App() {
  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>      
      <Section>
        <Switch>
          <Route exact path={["/", "/launches"]}>
            <Launches />
          </Route>          
          <Route path="/rockets">
            <Rockets />
          </Route>          
        </Switch>        
      </Section>
    </MainWrapper>
  );
}

export default App;

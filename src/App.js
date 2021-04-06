import "./App.css";
import styled from "styled-components";
import Header from "./components/shared/header";
import Hero from "./components/hero";
import Section from "./layout/section";
import Wrapper from "./layout/wrapper";
import { useLaunches } from "./hooks/useLaunches";
import { CardGrid } from "./layout/CardGrid";

const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;
`;

const ContentSelector = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  button {
    border: none;
    padding: 10px;
    min-width: 100px;
    margin-right: 10px;
  }
`;

function App() {
  const { loading, launches } = useLaunches();

  return (
    <MainWrapper>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ContentSelector>
          <button>Launches</button>
          <button>rockets</button>
        </ContentSelector>
      </Section>
      <Section>
        {loading && <div>loading....</div>}

        {!loading && (
          <Wrapper>
            <CardGrid launches={launches} />
          </Wrapper>
        )}
      </Section>
    </MainWrapper>
  );
}

export default App;

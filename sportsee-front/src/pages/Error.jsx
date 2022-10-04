import styled from 'styled-components';
import Header from '../components/Header/Header';
import LeftBar from '../components/LeftBar/LeftBar';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

const ErrorContainer = styled.div`
  position: absolute;
  height: 100vh -4em;
  width: 100vw -5em;
  top: 4em;
  left: 5rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const ErrorTitle = styled.h2`
  color: white;
  font-size: 150px;
`;

const ErrorText = styled.p`
  color: white;
  font-size: 50px;
`;

/**
 * Error Page
 * @component
 */

function Error() {
  return (
    <Home>
      <Header />
      <LeftBar />
      <ErrorContainer>
        <ErrorTitle>404</ErrorTitle>
        <ErrorText>Page not found</ErrorText>
      </ErrorContainer>
    </Home>
  );
}

export default Error;

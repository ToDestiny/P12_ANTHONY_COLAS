import styled from 'styled-components';
import Header from '../components/Header/Header';
import LeftBar from '../components/LeftBar/LeftBar';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function Dashboard() {
  return (
    <Home>
      <Header />
      <LeftBar />
    </Home>
  );
}

export default Dashboard;

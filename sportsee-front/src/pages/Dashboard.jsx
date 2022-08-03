import styled from 'styled-components';
import Header from '../components/Header/Header';

const Home = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

function Dashboard() {
  return (
    <Home>
      <Header />
    </Home>
  );
}

export default Dashboard;

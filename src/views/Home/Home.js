import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Elements/Footer/Footer'
import NavBar from '../../components/Elements/NavBar';
import TestCanvas from '../../components/TestCanvas';
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Home = (props) => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="h-screen">
      <NavBar/>
      <TestCanvas/>
      <Footer/>
      {/* <Header/>
      <Main/>
      <Footer/> */}
    </div>
  );
};


export default Home;

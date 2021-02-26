import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import db from './firebase';
import { useEffect, useState } from 'react';
import { auth, provider } from './firebase';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from "./themes/LightTheme";
import { darkTheme } from "./themes/DarkTheme";

function App() {
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode"));

  function setDarkModeAction() {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  }

  const [rooms, setRooms] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot) => {
      setRooms(snapshot.docs.map((doc) => {
        return { id: doc.id, name: doc.data().name }
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('user');
      setUser(null);
    })
  }

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router>
          {
            !user ?
            <Login setUser={setUser} />
            :
            <Container>
              <Header signOut={signOut} user={user} changeTheme={setDarkModeAction} />
              <Main>
                <Sidebar rooms={rooms} />
                <Switch>
                  <Route path="/room/:channelId">
                    <Chat user={user} />
                  </Route>
                  <Route path="/">
                    Select or Create Chanel
                  </Route>
                </Switch>
              </Main>
            </Container>
          }
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`

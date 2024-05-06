import "./App.css";
import { useState, useMemo } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./components/Detail.jsx";
import About from "./components/About.jsx";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./components/Form.jsx";
import { useLocation } from "react-router-dom";
import Favorites from "./components/Favorites.jsx";

const APIKEY = "pi-marcoserra98";

function App() {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [idRepetido, setIdRepetido] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(true);

  const APIKEY = 'pi-marcoserra98';
  


  const onSearch = (id) => {
    if (id === "") {
      alert("Debe ingresar un id del 1 al 826");
      return;
    }
    if (!idRepetido.includes(id)) {
      setIdRepetido([...idRepetido, id]);
    } else {
      alert("ID REPETIDO");
      return;
    }
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id != Number(id)));
  };

  function logout (){
    setAccess(false);
    navigate('/')
  }

    function login({password, email}) {
    // const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
    }


    useMemo(() => {
        !access && navigate('/');
      }, [access]);

  // LOGIN ANTIGUO
  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.email === EMAIL) {
  //     setAccess(true);
  //     navigate('/home');
  //   } else {
  //     window.alert('No son las credenciales correctas')
  //   }
  // }

  return (
    <div className="App">
       {pathname !== '/' ? <Nav onSearch={onSearch}  logout={logout} /> : null}
      
      <Routes>
        <Route path="/" element={<Form login={login} />} /> 
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

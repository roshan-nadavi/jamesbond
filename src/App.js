import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ListItem from './Components/ListItem.js'
import DropDownItem from './Components/DropDownItem.js';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(-1);
    const [actor, setActor] = useState(false);
    const [dataInp, setDataInp]=useState("empty")
    const [qInp, setqInp]=useState("empty")
    const [directorInp, setdirectorInp]=useState("empty")
    const [mInp, setmInp]=useState("empty")
    const [moneyPennyInp, setmoneyPennyInp]=useState("empty")
    const [bondGirlInp, setbondGirlInp]=useState("empty")
    const [bondGirlActressInp, setbondActressGirlInp]=useState("empty")
    const [femmeFataleInp, setfemmeFataleInp]=useState("empty")
    const [femmeFataleActressInp, setfemmeFataleActressInp]=useState("empty")
    const bonds = [];
    const directors = [];
    const ms = [];
    const moneyPennys = [];
    const qs = [];
    const bondGirls = [];
    const bondGirlActresses = [];
    const femmeFatales = [];
    const femmeFataleActresses = [];

    // PROBLEM:
    // Component keeps rerendering because axios get function keeps updating the state of the app component
    
    useEffect(() =>
      {
          axios.get("https://iznfqs92n3.execute-api.us-west-1.amazonaws.com/dev/api/v2/movies").then((response) =>
          {
            setMovies(response.data);
          })
      }, []);
    return (
      <div className="App">
        <h1>James Bond Movie List</h1>
        <select value={dataInp} className="menu" onChange={e=>setDataInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select Bond Actor</option>
          {movies.map((movie, index) => {
            
                  if(movie.bond_actor!=null&&!bonds.includes(movie.bond_actor)){
                      bonds.push(movie.bond_actor)
                      return (
                          <DropDownItem name={movie.bond_actor} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={directorInp} className="menu" onChange={e=>setdirectorInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select Director</option>
          {movies.map((movie, index) => {
            
                  if(movie.director!=null&&!directors.includes(movie.director)){
                      directors.push(movie.director)
                      return (
                          <DropDownItem name={movie.director} index={index}/>
                      )
                      }
                      return (null)})}
        </select>
        
        <select value={mInp} className="menu" onChange={e=>setmInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select M</option>
          {movies.map((movie, index) => {
            
                  if(movie.M!=null&&!ms.includes(movie.M)){
                      ms.push(movie.M)
                      return (
                          <DropDownItem name={movie.M} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={qInp} className="menu" onChange={e=>setqInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select Q</option>
          {movies.map((movie, index) => {
            
                  if(movie.Q!=null&&!qs.includes(movie.Q)){
                      qs.push(movie.Q)
                      return (
                          <DropDownItem name={movie.Q} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={moneyPennyInp} className="menu" onChange={e=>setmoneyPennyInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select MoneyPenny</option>
          {movies.map((movie, index) => {
            
                  if(movie.Moneypenny!=null&&!moneyPennys.includes(movie.Moneypenny)){
                      moneyPennys.push(movie.Moneypenny)
                      return (
                          <DropDownItem name={movie.Moneypenny} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={bondGirlInp} className="menu" onChange={e=>setbondGirlInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select Bond Girl</option>
          {movies.map((movie, index) => {
            
                  if(movie.bond_girl!=null&&!bondGirls.includes(movie.bond_girl)){
                      bondGirls.push(movie.bond_girl)
                      return (
                          <DropDownItem name={movie.bond_girl} index={index}/>
                      )
                      }
                      return (null)})}
        </select>
        <select value={bondGirlActressInp} className="menu" onChange={e=>setbondActressGirlInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select Bond Girl Actress</option>
          {movies.map((movie, index) => {
            
                  if(movie.bond_girl_actress!=null&&!bondGirlActresses.includes(movie.bond_girl_actress)){
                      bondGirlActresses.push(movie.bond_girl_actress)
                      return (
                          <DropDownItem name={movie.bond_girl_actress} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={femmeFataleInp} className="menu" onChange={e=>setfemmeFataleInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select femme fatale</option>
          {movies.map((movie, index) => {
            
                  if(movie.femme_fatale!=null&&!femmeFatales.includes(movie.femme_fatale)){
                      femmeFatales.push(movie.femme_fatale)
                      return (
                          <DropDownItem name={movie.femme_fatale} index={index}/>
                      )
                      }
                      return (null)})}
        </select>

        <select value={femmeFataleActressInp} className="menu" onChange={e=>setfemmeFataleActressInp(e.target.value)}>
          <option selected value = "empty" className="drop">Select femme fatale actress</option>
          {movies.map((movie, index) => {
            
                  if(movie.femme_fatale_actress!=null&&!femmeFataleActresses.includes(movie.femme_fatale_actress)){
                      femmeFataleActresses.push(movie.femme_fatale_actress)
                      return (
                          <DropDownItem name={movie.femme_fatale_actress} index={index}/>
                      )
                      }
                      return (null)})}
        </select>
        <ol>
            {movies.map((movie, index) => {
                if(movie.bond_actor===dataInp && (movie.Q === qInp||qInp==="empty") && (movie.director === directorInp||directorInp==="empty")&&(movie.M===mInp||mInp==="empty")&&
                (movie.Moneypenny===moneyPennyInp||moneyPennyInp==="empty")&&(movie.bond_girl===bondGirlInp||bondGirlInp==="empty")&&
                (movie.bond_girl_actress===bondGirlActressInp||bondGirlActressInp==="empty")&&(movie.femme_fatale===femmeFataleInp||femmeFataleInp==="empty")&&
                (movie.femme_fatale_actress===femmeFataleActressInp||femmeFataleActressInp==="empty"))
                    return (
                        <ListItem name={movie.movie_title} index={index} setIndex={setIndex} key={index} setActor={setActor}/>
                    )
                    return (null)})}
        </ol>
      </div>
    );
  }
  export default App
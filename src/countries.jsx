import React from "react";
import axios from "axios";

function Countrieslist() {
  var [countries, setCountries] = React.useState([]);
  var [sr, setsr] = React.useState("");
  React.useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then((resp) => {
      var temp = [...resp.data];
      setCountries(temp);
    }, []);
  });
  var asc = React.useCallback(()=>{
    countries.sort((a,b)=>{
      if(a.population>b.population){
        return 1
      }
      if(a.population<b.population){
        return -1
      }
      return 0
    })
    setCountries([...countries])
  },[])
  return (
    <>
      <div className="m-4 border p-2">
        <b className="m-2">Sort by Population</b>
        <i className="m-2" onClick={()=>{asc()}}>Ascending</i>
        <i className="m-2">Descending</i>
        <input
          placeholder="Search"
          className="ms-5"
          onChange={(e) => {
            setsr(e.target.value);
          }}
        ></input>
        <i className="bi bi-search ms-2"></i>
        <i className="bi bi-list-ul ms-5"></i>
        <i className="bi bi-grid ms-2"></i>
      </div>
      <div className="d-flex flex-wrap justify-content-center bg-primary-subtle">
        {countries.map((country) => {
          return (
            <div className="m-3 text-center" style={{ width: "200px" }}>
              <b style={{ fontSize: "15px" }}>{country.name.common}</b>
              <img src={country.flags[1]} style={{ width: "200px" }} />
              <b>population:{country.population}</b>
              <h1>dc</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Countrieslist;

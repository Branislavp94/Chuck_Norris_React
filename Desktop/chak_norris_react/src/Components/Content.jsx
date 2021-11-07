import React, { useEffect, useState } from "react";
import axios from "axios";
import InputForm from "./form/InputForm";
import Button from "./Button";
import ShowResult from "./ShowResult";

const Content = () => {
   const [firstName, setFirstName] = useState("Chuck");
   const [lastName, setLastName] = useState("Norris");
   const [dataJoke, setDataJoke] = useState("");

   const jokeGenerator = async () => {
      let fetchAPI = `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`;
      const result = await axios.get(fetchAPI);
      setDataJoke(result.data.value.joke);
   };

   useEffect(() => {
      jokeGenerator();
   }, []);

   const handleClick = (e) => {
      e.preventDefault();
      jokeGenerator();
   };

   return (
      <div className="container-fluid hight">
         <div className="row">
            <div className="col-xs-12 text-center mt-4 family">
               <h1>Random Chuck Norris Joke</h1>
               <p>Click on the button below to get a Chuck Norris joke</p>
            </div>
         </div>
         <InputForm
            firstName={firstName}
            lastName={lastName}
            setFirstName={setFirstName}
            setLastName={setLastName}
         />
         <Button handleClick={handleClick} />
         <ShowResult dataJoke={dataJoke} />
      </div>
   );
};

export default Content;

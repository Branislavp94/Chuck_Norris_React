import React, { useState } from "react";

const InputForm = ({ firstNmae, LastNmae, setFirstName, setLastName }) => {
   return (
      <form className="containerInput">
         <div>
            <label htmlFor="firstname" className="label">
               Enter your first name
            </label>
            <br />
            <input
               id="firstname"
               type="text"
               name="firstname"
               value={firstNmae}
               onChange={(e) => setFirstName(e.target.value)}
            />
         </div>
         <div>
            <label htmlFor="lastname" className="label">
               Enter your Last name
            </label>
            <br />
            <input
               id="lastname"
               type="text"
               name="lastname"
               value={LastNmae}
               onChange={(e) => setLastName(e.target.value)}
            />
         </div>
      </form>
   );
};

export default InputForm;

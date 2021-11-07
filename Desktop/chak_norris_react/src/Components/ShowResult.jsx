import React from "react";

const ShowResult = ({ dataJoke }) => {
   return (
      <div>
         <div className="row w-50 m-auto">
            <div className="col-xs-10">
               <div className="well">
                  <div className="quote hide text-center">
                     <p className="text">{dataJoke}</p>
                     <p className="author">Chuck Norris Genrator Site</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ShowResult;

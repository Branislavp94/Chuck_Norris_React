import React from "react";

const Button = ({ handleClick }) => {
   return (
      <div>
         <div className="row">
            <div className="col-xs-12 text-center">
               <button className="btn btn-danger" onClick={handleClick}>
                  Chuck it up
               </button>
            </div>
         </div>
      </div>
   );
};

export default Button;

import React from "react";

function addtask(){
    return(
        <div className="add-task">
            <input type="text" placeholder="Add new.." className="field"></input> 
            <button>Add</button>       
        </div>
    );
}

export default addtask();
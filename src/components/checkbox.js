import React from "react";

export default function Checkbox({plan, updateCompleted}){

    return (
        <div className="checkbox">
            <input type="checkbox" checked={plan.completed} onChange={() => updateCompleted(plan.id)}></input>
            <label>{plan.text}</label>
        </div>
    )
}
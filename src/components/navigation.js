import React from "react";
import Checkbox from "./checkbox";

export default function Navigation(){
    const [tab, setTab] = React.useState("All")
    const [plans, setPlans] = React.useState([])

    const addPlan = (event) => {
        event.preventDefault();
        const newPlan = {
            id: new Date().getTime(),
            text: event.target.plan.value,
            completed: false
        }
        setPlans([...plans, newPlan]);
        event.target.reset();
    }
    const updateCompleted = (id) =>{
        let newList = [...plans].map(plan =>{
          if(plan.id === id){
            plan.completed = !plan.completed
          }
          return plan;
        })
        setPlans(newList)    
    }

    const  deletePlan = (id) => {
        let newList = [...plans].filter(plan => plan.id !== id)
        setPlans(newList)
    }

    const deleteAll = () => {
        let newList = [...plans].filter(plan => plan.completed === false)
        setPlans(newList)
    }
    return(
        <div className="navigation">
            <nav>
                <ul>
                    <li className={tab === "All" ? "active" : ""} onClick={() => setTab("All")}>All</li>
                    <li className={tab === "Active" ? "active" : ""}  onClick={() => setTab("Active")}>Active</li>
                    <li className={tab === "Completed" ? "active" : ""} onClick={() => setTab("Completed")}>Completed</li>
                </ul>
            </nav>
            {tab==="All" && (
                <div>
                    <form className="search" onSubmit={addPlan}>
                        <input name="plan" type="text" placeholder="add details"></input>
                        <button type="submit">Add</button>
                    </form>
                    {plans.map((plan,key)=>{
                        return(
                            <Checkbox plan={plan} key={key} updateCompleted={updateCompleted}/>
                        )
                    })}
                </div>
            )}
            {tab==="Active" && (
                <div>
                    <form className="search" onSubmit={addPlan}>
                        <input name="plan" type="text" placeholder="add details"></input>
                        <button type="submit">Add</button>
                    </form>
                    {plans.filter(item => item.completed === false ).map((plan,key)=>{
                        return(
                            <Checkbox plan={plan} key={key} updateCompleted={updateCompleted}/>
                        )
                    })}
                </div>
            )}
            {tab==="Completed" && (
                <div className="completed-tab">
                    {plans.filter(item => item.completed === true).map((plan, key)=>{
                        return(
                            <div className="completed">
                                <Checkbox plan={plan} key={key} updateCompleted={updateCompleted}/>
                                <span className="material-icons" onClick={()=>deletePlan(plan.id)}>delete</span>
                            </div>
                        )
                    })}
                    <button className="delete" onClick={deleteAll}>Delete All</button>
                </div>
            )}
        </div>

    )
}
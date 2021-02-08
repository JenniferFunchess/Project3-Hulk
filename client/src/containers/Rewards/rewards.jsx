import React from "react";
import "./rewards.css";
import FormComponent from "../../components/Form/form";

const Rewards = () => {
    return (
        <div>
            <h1>Rewards + Add Rewards</h1>
            <FormComponent>
            <div class="row">
            <div className="col s6">6-columns (one-half)</div>
            <div className="col s6">6-columns (one-half)</div>
            </div>
            </FormComponent>
        </div>
    );
};

export default Rewards;
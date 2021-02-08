import React from "react";
import "./rewards.css";
import FormComponent from "../../components/Form/form";

const Rewards = () => {
  return (
    <div>
      <h1>Rewards + Add Rewards</h1>
      <div class="container">
        <FormComponent>
          <div class="row">
            <div className="col s6">
              <ul>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
                <li>This is a reward category</li>
              </ul>
            </div>
            <div className="col s6">
                <h5>Add a Reward Category and How Many Stars</h5>
                <div className="input-field col s9">
                <input id="reward_category" type="text" className="validate" />
                  <label for="reward_category">Reward Category</label>
                  </div>
              
                  <div className="input-field col s33">
                  <input id="star_count" type="text" className="validate" />
                  <label for="star_count">Star Count</label>
                  </div>
            </div>
          </div>
        </FormComponent>
      </div>
    </div>
  );
};

export default Rewards;

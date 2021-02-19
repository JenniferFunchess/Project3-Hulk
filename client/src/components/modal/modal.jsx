import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import "./modal.css";

class Modal extends Component {
  componentDidMount() {
  //  console.log(this.state.rewardStarCount);
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%",
    };
    M.Modal.init(this.Modal, options);

    
  }
  
  

  render() {
    return (
      <div className="modal-btn">
        {/* TODO: Write a ternary statement. If the student stars greater than reward stars, display the button.
        BUT, else display something positive, "Keep going, you're almost there!" */}
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Use Stars
        </button>

        <button className="modal-trigger" data-target="modal1"></button>

        <div
          ref={(Modal) => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <button
            type="button"
            className="modal-close close-button"
            data-dismiss="modal"
          >
            <span aria-hidden="true">×</span>
          </button>


            <div className="modal-content">
              <h4>Email Teacher?</h4>
              <p>Do you want to email your teacher to use your stars?</p>
              <a
                className="modal-close waves-effect waves-green btn-flat"
                type="submit"
                method="POST"
                action="SEND"
                onClick = {() => {
                  console.log(this.props.rewardStarCount);
                  console.log(this.props.studentStarCount);
                }}
              >
                Yes
              </a>
              <a className="modal-close waves-effect waves-red btn-flat disagree-btn">
                No
              </a>
            </div>    
            {/* <div className="modal-content">
              <p>You're almost there! Keep earning stars to redeem rewards!</p>

              <button className="modal-close waves-effect waves-red btn-flat disagree-btn">
                Ok!
              </a>
            </div> */}

        </div>
      </div>
    );
  }
}

export default Modal;

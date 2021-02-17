import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./Modal.css";
import axios from "axios";
class Modal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        console.log(this.props.redeemValue);
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

    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
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

        <a href="#" className="modal-trigger" data-target="modal1"></a>

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
          {this.props.redeemValue && 
          <div className="modal-content">
            <h4>Email Teacher?</h4>
            <p>Do you want to email your teacher to use your stars?</p>
            <a
              className="modal-close waves-effect waves-green btn-flat"
              onClick={async () => {
                // axios
                //   .post(
                //     `/api/rewards/redeem/${this.props.reward._id}/student/${this.props.student._id}`,
                //     {}
                //   )
                //   .catch((err) => {
                //     console.log(err);
                //   });
                axios.put(`/api/students/${this.props.student._id}`, this.props.student)
                .then((response) => {
                  console.log(response.data);
                  // history.push(`/student-home/${response.data._id}`); //not sure if this is needed
                })
                .catch((err) => {
                  console.log(err);
                });
              }}
            >
              Yes
            </a>
            <a className="modal-close waves-effect waves-red btn-flat disagree-btn">
              No
            </a>
          </div>
          }

          {!this.props.redeemValue && 
          <div className="modal-content">
          <p>You're almost there! Keep earning stars to redeem rewards!</p>
          
          <a className="modal-close waves-effect waves-red btn-flat disagree-btn">
            Ok!
          </a>
        </div>
          
          }
          
        </div>
      </div>
    );
  }
}

export default Modal;

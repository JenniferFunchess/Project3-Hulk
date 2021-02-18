import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./modal.css";
import axios from "axios";

class Modal extends Component {
  
  componentDidMount() {
    console.log(`startTotal: ${this.props.student.starTotal}`);
    console.log(`star count: ${this.props.reward.starCount}`);
    console.log(this.props.redeemValue);
    
    // const bool = this.props.student.starTotal - this.props.reward.starCount >= 0 ? true: false;
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
        console.log(this.props.redeemValue);
        console.log(`redeemValue: ${this.props.redeemValue}`);
        console.log(`reward category: ${this.props.reward.rewardCategory}`);
        console.log(`starTotal: ${this.props.student.starTotal}`);
    console.log(`difference: ${this.props.student.starTotal - this.props.reward.starCount}`);
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
    // instance.destroy()
    
  }

  updateStudent(student, reward) {
    const newStudent = student;
    newStudent.starTotal = student.starTotal - reward.starCount;
    axios
      .put(
        `/api/students/${this.props.student._id}`,
        newStudent
      )
      .then((response) => {
        console.log(response.data);
        window.location.href=`/student-home/${response.data._id}`; //not sure if this is needed
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
  

  render() {
    return (
      <div className="modal-btn">
        {/* TODO: Write a ternary statement. If the student stars greater than reward stars, display the button.
        BUT, else display something positive, "Keep going, you're almost there!" */}
        <button
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
          data-attribute = {this.props.reward.starCount}
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
          {/* {this.props.redeemValue &&  */}
            <div className="modal-content">
              <h4>Email Teacher?</h4>
              <p>Do you want to email your teacher to use your stars?</p>
              <a
                className="modal-close waves-effect waves-green btn-flat"
                type="submit"
                method="POST"
                action="SEND"
                onClick={this.updateStudent(this.props.student, this.props.reward)}
                // onClick={async (student, reward) => {
                
                  // axios
                  //   .post(
                  //     `/api/rewards/redeem/${this.props.reward._id}/student/${this.props.student._id}`,
                  //     {}
                  //   )
                  //   .catch((err) => {
                  //     console.log(err);
                  //   });
                
                  // const newStudent = student;
                  // newStudent.starTotal = student.starTotal - reward.starCount;
                  // axios
                  //   .put(
                  //     `/api/students/${this.props.student._id}`,
                  //     newStudent
                  //   )
                  //   .then((response) => {
                  //     console.log(response.data);
                  //     window.location.href=`/student-home/${response.data._id}`; //not sure if this is needed
                  //   })
                  //   .catch((err) => {
                  //     console.log(err);
                  //   });
                // }}
              >
                Yes
              </a>
              <a className="modal-close waves-effect waves-red btn-flat disagree-btn">
                No
              </a>
            </div>
          {/* } */}

          {this.props.student.starTotal - this.props.reward.starCount < 0 && 
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

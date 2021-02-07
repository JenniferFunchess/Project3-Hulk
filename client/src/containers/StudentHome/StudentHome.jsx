import React from 'react';
import Star from '../../components/Star/star';
import './style.css';

function StudentHome(props) {
    return (
        <div>
          {/* <div className="container"> */}
              <div className="row">
                  <div className="col s12">
                      <h1 className="redColor centered">Student Home</h1>
                  </div>
              </div>
              <div className="row">
                    <div className="col s3">
                        <div className="row">
                            <div className="col s12 second-row">
                                <h3 className="redColor second-row">Student Name</h3>
                                <hr></hr>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col s12 second-row">
                                <h5 className="redColor second-row">Display Name</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col m7 blueBox">
                        <div className="col s6">
                            {/* <div className="row"> */}
                                <div className="col s12">
                                    <button className="waves-effect waves-light btn uploadButton">Upload Image</button>
                                </div>
                            {/* </div> */}
                            {/* <div className="row"> */}
                                <div className="col s12">
                                    <h5>My Stars!!!</h5>
                                </div>
                            {/* </div> */}
                            <div className="col s12 greenColor">
                                <span className="descriptionText">ASKING A TOUGH QUESTION</span><Star large={false}></Star><span>2</span>
                            </div>
                            <div className="col s12 greenColor">
                                <span className="descriptionText">Zoom Camera on All Class</span><Star large={false}></Star><span>2</span>
                            </div>
                            <div className="col s12 greenColor">
                                <span className="descriptionText">Submitting Homework on Time</span><Star large={false}></Star><span>1</span>
                            </div>
                            <div className="col s12 greenColor">
                                <span className="descriptionText">Extra Credit</span><Star large={false}></Star><span>3</span>
                            </div>
                            <div className="col s12 greenColor">
                                <span className="descriptionText">Listening in Class</span><Star large={false}></Star><span>3</span>
                            </div>
                        </div>
                        <div className="col s6">
                            <div className="col s12">
                            <Star large={true}></Star><span>11</span>
                            </div>
                            <div className="col s12">
                                <h5>Use Stars!!!</h5>
                                <hr></hr>
                            </div>
                            <div className="col s12">
                                <Star large={false}></Star><p>Extra Reading Time (10 Stars)</p>
                            </div>
                            <div className="col s12">
                                <Star large={false}></Star><p>Snack from Teacher (10 Stars)</p>
                            </div>
                            <div className="col s12">
                                <Star large={false}></Star><p>Prize Jar (10 Stars)</p>
                            </div>
                            <div className="col s12">
                                <Star large={false}></Star><p>Free Homework Pass(15 Stars)</p>
                            </div>
                        </div>
                    </div> 
              </div>
          {/* </div> */}
        </div>
    );
}

export default StudentHome;
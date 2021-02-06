import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

function viewStudent(props) {
    return (
        <div>
            <Navbar login={false}/>
            <div className="container">
                <div className="row">
                    <div className="col m12">
                        <h1>Student Name</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col m4">
                        <div className="row">
                            <div className="col m12">
                                <h1>Student</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m12">
                                <h1>Name</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <h1>_________</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m12">
                            <h4>Display Name</h4>
                        </div>
                    </div>
                </div>
                <div className="row blue">
                    <div className="col m6">
                        <div className="row">
                            <div className="col m12">
                                <div className="col m8">
                                    <button className="upload">Upload Image</button>
                                </div>
                                <div className="col m4">
                                    <img className="image" src=""></img>
                                </div>
                                <div className="col m12">
                                    <h5>My stars!</h5>
                                </div>
                                {props.tasks.map(task => (
                                    <div className="col m12" key={task.id}>
                                        {task.name} <Star number={task.stars}></Star>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col m12">
                                <div className="col m12">
                                    <Star number={props.student.starTotal}></Star>
                                </div>
                                <div className="col m12">
                                    <h5>Use stars!</h5>
                                </div>
                                <div className="col m12">
                                    {props.rewards.map(reward => (
                                        <div className="col m12" key={reward.id}>
                                            {reward.name} <Star number={reward.requiredStars}></Star>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}

export default viewStudent;
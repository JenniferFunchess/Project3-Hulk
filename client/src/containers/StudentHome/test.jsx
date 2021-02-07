<div className="container">
<div className="row">
    <div className="col m12">
        <h1>Student Name</h1>
    </div>
</div>
<div className="row">
    <div className="col m3">
        <div className="row">
            <div className="col s3">
                <h3>Student</h3>
            </div>
        </div>
        <div className="row">
            <div className="col s3">
                <h3>Name</h3>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col s3">
            <h1>_________</h1>
        </div>
    </div>
    <div className="row">
        <div className="col m3">
            <h4>Display Name</h4>
        </div>
    </div>
</div>
    {/* <div className="row blue"> */}
    <div className="row">
    <div className="col m5">
        <div className="row">
            <div className="col m2">
                <div className="col m2">
                    <button className="upload">Upload Image</button>
                </div>
                <div className="col m2">
                    <img className="image" src=""></img>
                </div>
                <div className="col m2">
                    <h5>My stars!</h5>
                </div>
                {/* {props.tasks.map(task => ( */} 
                {/* key={task.id} */}
                    <div className="col m2" >
                        {props.task.name} <Star number={props.task.stars}></Star>
                    </div>
                {/* // ))} */}
                
            </div>
        </div>
        <div className="row">
            <div className="col m12">
                <div className="col m12">
                    <Star large={true}></Star>
                </div>
                <div className="col m12">
                    <h5>Use stars!</h5>
                </div>
                <div className="col m12">
                    {/* {props.teacher.rewards.map(reward => ( */}
                        <div className="col m12" >
                        {/* key={reward.id} */}
                            {props.reward.name} <Star large={false}></Star><p>{props.reward.requiredStars}</p>
                        </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    </div>
    </div>
{/* </div>  */}
</div>
import React from 'react';

function star(props) {
    return (
        <div>
            {!props.large &&
            <img src="https://www.google.com/search?q=small+star+images&tbm=isch&source=iu&ictx=1&fir=rz11F4hxPRJuSM%252COdYQzJKm_6xFEM%252C_&vet=1&usg=AI4_-kQCyhUuhLBaljd2suzad9nWOgj_DA&sa=X&ved=2ahUKEwjLpu-az9XuAhUQCM0KHe09BMoQ9QF6BAgGEAE#imgrc=rz11F4hxPRJuSM" alt="star"></img>
            }
            {props.large &&
            <img src="https://www.google.com/search?q=small+star+images&tbm=isch&source=iu&ictx=1&fir=rz11F4hxPRJuSM%252COdYQzJKm_6xFEM%252C_&vet=1&usg=AI4_-kQCyhUuhLBaljd2suzad9nWOgj_DA&sa=X&ved=2ahUKEwjLpu-az9XuAhUQCM0KHe09BMoQ9QF6BAgGEAE#imgrc=rz11F4hxPRJuSM" alt="star"></img>
            }
        </div>
    );
}

export default star;
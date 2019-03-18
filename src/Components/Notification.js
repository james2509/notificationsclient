import React from 'react';

const Notification = (props) => {
	return(
        <div>
            
        
            <div className="notificationCapsule">
                <div className="row">
                    <div className="col-sm-3 text-right">Title:</div>
                    <div className="col-sm-9 text-left">{props.title}</div>    
                </div>
                <div className="row">
                    <div className="col-sm-3 text-right">Notification:</div>
                    <div className="col-sm-9 text-left">{props.body}</div>    
                </div>
            </div>

        
        </div>
    );
}

export default Notification;
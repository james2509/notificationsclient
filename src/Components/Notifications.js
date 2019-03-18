import React from 'react';
import Notification from './Notification';

const Notifications = (props) => {
	return(
        <div className="mt-10">
            {props.notificationMessages.map((notification) => (
                <Notification 
                    title={notification.Title} 
                    body={notification.Body}
                />
            ))}
        </div>
    );
}

export default Notifications;
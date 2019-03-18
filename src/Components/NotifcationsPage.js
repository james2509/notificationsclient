import React, {Component} from 'react'
import { HubConnectionBuilder, HttpTransportType, LogLevel } from '@aspnet/signalr'
import Notifications from './Notifications';
import Notification from './Notification';

class NotificationsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailAddress: '',
            notifications: [],
            hubConnection: null
        }
    }

    startHubConnection = () => {
        this.setState({
            hubConnection: null,
            notifications: []
        });

        var connection = new HubConnectionBuilder()
            .withUrl("https://jsnotifications.azurewebsites.net/notificationhub", { skipNegotiation: true, transport: HttpTransportType.WebSockets })
            .configureLogging(LogLevel.Information)
            .build();


        var email = this.state.emailAddress;
        connection.start()
            .then(() => connection.invoke('initial', email))
            .catch(() => console.log(this));
            

        connection.on("ReceiveNotifications", (notification) => {
            console.log(notification);
            var tempNotifications = this.state.notifications;
            tempNotifications.push(JSON.parse(notification));    
            this.setState({notifications: tempNotifications});
            console.log("Notification Added");
        });

    }

    setConnectedHubConnection = (connection) => {
            this.setState({hubConnection: connection});
    }

    render() { return (
        <div>
            <div className="row">
                <div className="col-sm-1 col-lg-3"></div>
                <div className="col-sm-10 col-lg-6">
                    <br />
                    <div className="input-group fullSizeInput px-2">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.emailAddress}
                            onChange={e => this.setState({ emailAddress: e.target.value })}
                        />
                        <button className="btn btn-primary" onClick={this.startHubConnection}>Login</button>
                    </div>
                </div>
                <div className="col-sm-1 col-lg-6"></div>
            </div>
            <div>
                <Notifications
                    notificationMessages={this.state.notifications}
                />
            </div>
        </div>
        );
    }
}

export default NotificationsPage;
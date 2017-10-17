var React = require("react");
var ReactDOM = require("react-dom");
var jwt = require("jsonwebtoken");
var UserContainer = require("./components/UserContainer");
var LoginContainer = require("./components/LoginContainer");
var AddMessageContainer = require("./components/AddMessageContainer");
var TimelineContainer = require("./components/TimelineContainer");

class Application extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            token: sessionStorage.getItem("token"),
            user: {
                id: sessionStorage.getItem("id"),
                name: sessionStorage.getItem("name"),
                image: sessionStorage.getItem("image")
            }
        };

        this.storeToken = this.storeToken.bind(this);
        this.updateUser = this.updateUser.bind(this);

    }

    updateUser(logged, id, name, image){

        sessionStorage.setItem("id", id);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("image", image);

    }

    storeToken(token){

        sessionStorage.setItem("token", token);

        this.setState({
            token: token
        });

    }

    render(){

        if(this.state.token){
            return  <div>
                        <TimelineContainer token={this.state.token}/>
                        <AddMessageContainer token={this.state.token}/>
                    </div>
        }else{
            return <div>
                        <UserContainer onUserLogged={this.storeToken}
                            updateUser={this.updateUser}/><br/>
                        <LoginContainer onUserLogged={this.storeToken}
                            updateUser={this.updateUser}/>
                   </div>;
        }

    }

}

ReactDOM.render(<Application />,
                document.getElementById("main"));

                /*class ClickableTitle extends React.Component {

                    constructor(props) {
                        super(props);
                        this.state = { count: 0 }; // l'état initial de notre composant
                        this.incrementCount = this.incrementCount.bind(this);
                    }

                    incrementCount() {
                        // quand l'utilisateur clique sur le titre
                        this.setState({ count: this.state.count + 1 });
                    }

                    render() {
                        return (
                            <h1 onClick={ this.incrementCount.bind(this) }>
                                { this.props.title }
                                (cliqué { this.state.count } fois)
                            </h1>
                        );
                    }

                }

                class Horloge extends React.Component {

                    construct/*class ClickableTitle extends React.Component {

                    constructor(props) {
                        super(props);
                        this.state = { count: 0 }; // l'état initial de notre composant
                        this.incrementCount = this.incrementCount.bind(this);
                    }

                    incrementCount() {
                        // quand l'utilisateur clique sur le titre
                        this.setState({ count: this.state.count + 1 });
                    }

                    render() {
                        return (
                            <h1 onClick={ this.incrementCount.bind(this) }>
                                { this.props.title }
                                (cliqué { this.state.count } fois)
                            </h1>
                        );
                    }

                }

                class Horloge extends React.Component {
                or(props){

                        super(props);
                        this.state = { hours: 0,
                                        minutes: 0,
                                        seconds: 0}

                        this.setTime = this.setTime.bind(this);

                    }

                    setTime(){

                        var date    = new Date();
                        var hours   = date.getHours();
                        var minutes = date.getMinutes();
                        var seconds = date.getSeconds();

                        this.setState({
                            hours: hours,
                            minutes: minutes,
                            seconds: seconds
                        });

                    }

                    componentDidMount(){

                        setInterval(this.setTime,10);

                    }

                    render(){

                        var style = {
                            fontSize : 150,
                            textAlign: 'center'
                        }

                        return (

                            <div style = {style}>
                                <span>{this.props.title} {this.state.hours}:
                                    <span style={{color : 'blue'}}>{this.state.minutes}</span>:
                                    {this.state.seconds}
                                </span>
                            </div>

                        );

                    }

                }*/

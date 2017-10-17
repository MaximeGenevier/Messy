var React = require("react");
var LoginForm = require("./LoginForm");
var server = require("./serverMethod");

class LoginContainer extends React.Component{

    constructor(props){

        super(props);
        this.state = {
            token: props.token,
            user: {
                name: "",
                password: ""
            }
        };

        this.onUserChange = this.onUserChange.bind(this);
        this.onFormSubmitted = this.onFormSubmitted.bind(this);
    }

    onUserChange(event){

        var user = this.state.user;
        user[event.target.name] = event.target.value;

        this.setState({
            user: user
        });

    }

    onFormSubmitted(event){

        event.preventDefault();

        var body = {
            "name": this.state.user.name,
            "password": this.state.user.password
        }

        var response = server.login(body, this.props.userToken);

        response.then((response) => {

            this.props.onUserLogged(response.token);
            this.props.updateUser(true, response.user.id, response.user.name,
                response.user.image);

        });

    }

    render(){

        return LoginForm({user: this.state.user,
            onUserChange: this.onUserChange,
            onFormSubmitted: this.onFormSubmitted
        });

    }

}

module.exports = LoginContainer;

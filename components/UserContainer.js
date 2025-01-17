var React = require("react");
var UserForm = require("./UserForm");
var server = require("./serverMethod");

class UserContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            token: "",
            user: {
                id: "",
                name: "",
                password: "",
                image: ""
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

        var body = { "name": this.state.user.name,
             "image": this.state.user.image,
             "password": this.state.user.password
         }

        var response = server.createAccount(body);

        response.then((response) => {

            this.props.onUserLogged(response.token);
            this.setState({
                token: response.token,
                user: {
                    id:response.user.id
                }
            });
        });

    }

    render(){

        return UserForm({ user: this.state.user,
            onUserChange: this.onUserChange,
            onFormSubmitted: this.onFormSubmitted
        });

    }

}

module.exports = UserContainer;

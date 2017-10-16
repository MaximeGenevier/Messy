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
        console.log(this.state.user);

        var body = { "name": this.state.user.name,
             "image": this.state.user.image,
             "password": this.state.user.password
         }

        var response = server.createAccount(body);
        console.log(response);
        if(response != ""){
            this.setState({
                token: response.token
            });
        }

        console.log(this.state.token);
    }

    render(){

        return UserForm({ user: this.state.user,
            onUserChange: this.onUserChange,
            onFormSubmitted: this.onFormSubmitted
        });
        /*return(
            <UserForm user={this.state.user}/>
        );*/

    }

}

module.exports = UserContainer;

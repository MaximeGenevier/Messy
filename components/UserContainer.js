var React = require("react");
var UserForm = require("./UserForm");

class UserContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            user: {
                name: "",
                password: "",
                image: "",
                token: ""
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

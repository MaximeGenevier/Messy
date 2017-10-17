var React = require("react");
var AddMessageForm = require("./AddMessageForm");
var server = require("./serverMethod");

class AddMessageContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            message: {
                id: "",
                messsage: "",
                user_id: ""
            }
        };

        this.onMessageChange = this.onMessageChange.bind(this);
        this.onFormSubmitted = this.onFormSubmitted.bind(this);

    }

    onMessageChange(event){

        var message = this.state.message;
        message[event.target.name] = event.target.value;

        this.setState({
            message: message
        });

    }

    onFormSubmitted(event){

        event.preventDefault();

        var body = {
            message: this.state.message.message
        }

        console.log(this.props.token);

        var response = server.createMessage(body, this.props.token);

        response.then((response) => {

            this.setState({
                message: {
                    id: response.id,
                    user_id: response.user_id
                }
            });

        });

    }

    render(){

        return AddMessageForm({
            onMessageChange: this.onMessageChange,
            onFormSubmitted: this.onFormSubmitted
        });

    }

}

module.exports = AddMessageContainer;

var React = require("react");
var MessageElement = require("./MessageElement");
var server = require("./serverMethod");
var Alert = require('react-bootstrap').Alert;

class TimelineContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            timeline: []
        }

        this.getTimeLine = this.getTimeLine.bind(this);
        this.onDelete = this.onDelete.bind(this);

    }

    componentDidMount(){
        this.getTimeLine();
        setInterval(this.getTimeLine,1000);
    }

    getTimeLine(){
        server
            .getTimeLine(this.props.token)
            .then((response) => {
                this.setState({
                    timeline: response
                });
            });

    }

    onDelete(message_id){
        server
            .deleteMessage(this.props.token, message_id)
            .then((response) => {
                return <div class="alert alert-success">
                          Message supprimé avec succès.
                        </div>
            });
    }

    render(){

        this.state.timeline.sort(function(message2, message1){
            return message1.date.localeCompare(message2.date);
        });

        var messagesViews = this.state.timeline.map((message) => {
            return <MessageElement message={message} user={this.props.user} onDelete={this.onDelete} />
        })

        return <div>
                    <div class="panel-header">
                        <h3>Messages</h3>
                    </div>
                    <div class="panel-body">
                        <div>{messagesViews}</div>
                    </div>
                </div>;

    }

}

module.exports = TimelineContainer;

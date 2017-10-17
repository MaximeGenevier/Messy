var React = require("react");
var MessageElement = require("./MessageElement");
var server = require("./serverMethod");

class TimelineContainer extends React.Component {

    constructor(props){

        super(props);
        this.state = {
            timeline: []
        }

        this.getTimeLine = this.getTimeLine.bind(this);

    }

    componentDidMount(){
        this.getTimeLine();
        setInterval(this.getTimeLine,5000);

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

    render(){

        var messagesViews = this.state.timeline.map((message) => {
            return <MessageElement message={message} />
        })

        return <div>{messagesViews}</div>;

    }

}

module.exports = TimelineContainer;

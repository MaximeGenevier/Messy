class LoginForm extends React.Component {

    constructor(pops){

        super(props);
        this.state = {
            user: {
                name: "",
                password: "",
                image: ""
            }
        };

        this.updateUser = this.updateUser.bind(this);

    }

    updateUser(event){

        this.setState({
            user: {
                [event.target.name]: event.target.value
            }
        });

    }

    render(){

        var user = this.state.user;

        return(
            <form>
                <label></label>
                <input
                    name="name"
                    value="user.name"
                    onInput="updateUser"
                />
                <label></label>
                <input
                    name="password"
                    value={user.password}
                    onInput={updateUser}
                />
                <label></label>
                <input
                    name="image"
                    value="user.image}
                    onInput="updateUser}
                />
            </form>
        );

    }

}

var React = require("react");

function UserForm(props){

    return(
        <div>
            <form onSubmit={props.onFormSubmitted}>
                <label>Nom:</label>
                <input
                    name="name"
                    type="text"
                    value={props.user.name}
                    onInput={props.onUserChange}
                />
                <label>Mot de passe:</label>
                <input
                    name="password"
                    type="password"
                    value={props.user.password}
                    onInput={props.onUserChange}
                />
                <label>Image:</label>
                <input
                    name="image"
                    value={props.user.image}
                    onInput={props.onUserChange}
                />
                <input type="submit"/>
            </form>
        </div>
    );

}

module.exports = UserForm;

var React = require("react");

function UserForm(props){

    return(
        <div>
            <form onSubmit={props.onFormSubmitted} class="form-inline">
                <label>Nom:</label>
                <input
                    name="name"
                    type="text"
                    value={props.user.name}
                    onInput={props.onUserChange}
                />
                <br/>
                <label>Mot de passe:</label>
                <input
                    name="password"
                    type="password"
                    value={props.user.password}
                    onInput={props.onUserChange}
                />
                <br/>
                <label>Image:</label>
                <input
                    name="image"
                    value={props.user.image}
                    onInput={props.onUserChange}
                />
                <br/>
                <button type="submit">Valider</button>
            </form>
        </div>
    );

}

module.exports = UserForm;

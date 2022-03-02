import "./ImageList.css";
import axios from "axios";
import React from "react";

class FriendForm extends React.Component  {
    state = { id: null, nom: "", prenom: "" };

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.friendValues !== this.props.friendValues) {
            if (this.props.friendValues != null) {
                this.setState({id: this.props.friendValues.id, nom: this.props.friendValues.nom, prenom: this.props.friendValues.prenom}, () => console.log(this.state.nom, this.state.prenom));
            }
        }
    }

    onChangeNom = (e) => {
        this.setState({ nom: e.target.value });
    }

    onChangePrenom = (e) => {
        this.setState({ prenom: e.target.value });
    }

    createAndErase = () => {
        if(this.props.friendValues != null)
        {
            this.props.manageFriend(this.props.friendValues.id, this.state.nom, this.state.prenom);
        }
        else
        {
            this.props.manageFriend(this.state.nom, this.state.prenom);
        }
        this.setState({ id: null, prenom: "", nom: "" });
    }

    render() {
        return (
            <form className="ui form">
                <div className="field">
                    <label>Nom</label>
                    <input type="text" name="nom" value={this.state.nom} onChange={this.onChangeNom} placeholder="Nom" id={"nom"}/>
                </div>
                <div className="field">
                    <label>Prenom</label>
                    <input type="text" name="prenom" value={this.state.prenom} onChange={this.onChangePrenom} placeholder="Prenom" id={"prenom"}/>
                </div>
                <button className="ui button" type="button" onClick={this.createAndErase}>{this.props.friendValues != null ? "Modifier" : "Créer"}</button>
            </form>
        );
    }
};

export default FriendForm;
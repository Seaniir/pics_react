import React from "react";
import FriendsList from "./FriendsList";
import FriendForm from "./FriendForm";
import axios from "axios";

class App extends React.Component {
    state = { friends: [], isModifying: false, friendSelected: null };

    componentDidMount() {
        this.getFriends();
    }

    deleteFriend = (e) => {
        const headers = ({
            'Content-Type': 'application/json',
        });
        axios.post('http://46.101.55.175:9080/api/v1/deleteFriend', e.id, {headers}).then(() => this.getFriends());
    }

    onModifying = (e) => {
        const listItems = this.state.friends.map((friend) => {
            if(friend.id == e.id)
            {
                this.setState({ isModifying: true, friendSelected: {id: friend.id, nom: friend.nom, prenom: friend.prenom} });
            }
        }
        )}

    render() {
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend} onModifying={this.onModifying}/>
                <FriendForm manageFriend={this.state.isModifying ? this.modifyFriend : this.createFriend} friendValues={this.state.isModifying ?  this.state.friendSelected  : null}/>
            </div>
        );
    }

    async getFriends(){
        const response = await axios.get("http://46.101.55.175:9080/api/v1/getFriends");
        this.setState({ friends: response.data });
    }

    createFriend = async (nom, prenom) =>{
        const friend = { nom: nom, prenom: prenom };
        await axios.post('http://46.101.55.175:9080/api/v1/addFriend', friend);
        this.getFriends();
    }

    modifyFriend = async (id, nom, prenom) =>{
        const friend = { id: id, nom: nom, prenom: prenom };
        await axios.post('http://46.101.55.175:9080/api/v1/modifyFriend/' + id, friend);
        this.getFriends();
        this.setState({ isModifying: false });
    }
};

export default App;
import "./ImageList.css";
import axios from "axios";
import React from "react";

const FriendsList = (props) => {

  const friends = props.friends.map(image => {
    const { id, nom, prenom } = image;
    return (
        <tr key={id} className={"center aligned"}>
          <td data-label="id">{id}</td>
          <td data-label="nom">{nom}</td>
            <td data-label="prenom">{prenom}</td>
            <td data-label="modifier"><button onClick={() => {props.onModifying({id})}}>Modifier</button></td>
            <td data-label="supprimer"><button onClick={() => {props.deleteFriend({id})}}>Supprimer</button></td>
        </tr>
    );
  });

  return (
      <table className="ui celled table">
        <thead>
        <tr className={"center aligned"}>
          <th>#</th>
          <th>Nom</th>
            <th>Prenom</th>
            <th>Modifier</th>
            <th>Supprimer</th>
        </tr>
        </thead>
        <tbody>
        {friends}
        </tbody>
      </table>
  );
};

export default FriendsList;
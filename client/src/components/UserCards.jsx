import React, { Component } from 'react'
import Card from "./Card"
import { CardGridDiv } from '../StyledComps';

function UserCards({users}) {

    console.log("users from CardGrid",users)
    return (
        <CardGridDiv>
            {users.map((user, index) => <Card key={index} user={user} />)}
        </CardGridDiv>
    )
}

export default UserCards


import React from 'react';

function Profile (props)
{
    
    function accede()
    {
        window.location = props.person.profileLink;

    }
    return (
    <>
    <img src={props.person.photo}/>
    <h2>First name:{props.person.Name.firstName}</h2>
    <h2>Last name :{props.person.Name.lastName}</h2>
    {(props.person.profileLink!="")?(<button onClick={accede}>facebook</button>):(<p>pas de profile</p>)}

    
    </>
)


}

export default Profile 

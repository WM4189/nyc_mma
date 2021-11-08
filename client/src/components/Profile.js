
function Profile (props){
    const {id, username, email, journal} = props.currentUser;
    // console.log(journal)
    return(
        <div>
        <h1>{username}'s Training Journal</h1>
        
        </div>
    )
}

export default Profile
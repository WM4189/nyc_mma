import {useState} from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";


const linkStyles = {
    // display: "inline-block",
    width: "85px",
    padding: "2px",
    // margin: "0 6px 6px",
    // background: "transparent",
    // textDecoration: "none",
    // color: "black",  
  };

function GymForm(props){
    const history = useHistory();


    // const defaultState = {
    //     name: "",
    //     address: "",
    //     link: "",
    //     art: ""
    // }
    // const [formData, setFormData] = useState(defaultState);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [link, setLink] = useState("");
    const [art, setArt] = useState("");


       function handleSubmit(event) {
        event.preventDefault();
        fetch("/gyms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify({
            "name": name,
            "address": address,
            "link": link,
            "art": art
          })
        });
        setName("")
        setAddress("")
            setLink("")
        setArt("")
        // history.goBack()
        history.push('/train')
      }

    return (
        <>
        <h1>Add New Gym</h1>
        <form onSubmit={handleSubmit}>
            <section style={{display: 'flex', justifyContent: 'center'}}>
          <label>
           Name:
            <input
              type="name"
              name="rating"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label>
            Website:
            <input
              type="text"
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <label>
            Focus:
            <input
              type="text"
              name="art"
              value={art}
              onChange={(e) => setArt(e.target.value)}
            />
          </label>
          <button style={linkStyles} type="submit">Save</button>
          </section>
        </form>

        </>
    )



    // const location = useLocation()
    // const { gymId, userId } = location.state

    // // console.log(gymId.gym_id)
    // // console.log(userId.user_id.user_id.id)



    // const gId = gymId.gym_id
    // const uId = userId.user_id.user_id.id

    // // console.log(gId)

 

    // return(

    // )

}

export default GymForm
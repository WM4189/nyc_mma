import {useState} from "react";
import { useHistory, useLocation, Redirect } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "100px",
    fontSize: "20px",
    fontWeight: "bold",
    // padding: "2px",
    // margin: "0 6px 6px",
    background: "gray",
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
        <div id='gymForms'>
        <form id="gymForm" onSubmit={handleSubmit}>
        <h1><button style={linkStyles} type="submit">Save Gym</button></h1>
            <section style={{display: 'flex', flexDirection: 'column', margin: '0 auto', width: '20%'}}>
          <label id='textarea'>
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
          </section>
        </form>
        </div>
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
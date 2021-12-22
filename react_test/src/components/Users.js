import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState("");
  const getUsers = async () => {
    try{
    const data = await axios.get('https://reqres.in/api/users?page=2');
    setAvatar(data.data.data);
  } catch (err) {
    console.error(err);
  }
}
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>USERS</h2>
      <div>
      <input type="text" onChange={(e) => {setName(e.target.value)}} />
      </div>
      {avatar &&
      avatar.filter((el) => {
        if (name === "") {
          return el;
        } else if (el.first_name.toLowerCase().includes(name.toLowerCase()) || el.last_name.toLowerCase().includes(name.toLowerCase())) {
          return el;
        }
}).map((el) => (
        <div>
        <img src={el.avatar}/>
        <h3>{`${el.first_name} ${el.last_name} `}</h3>
        </div>
      ))}
    </div>
  )
}

export default Users
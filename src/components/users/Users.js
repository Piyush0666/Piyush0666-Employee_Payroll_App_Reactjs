import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import profile1 from '../../Assets/profile-images/Ellipse -3.png';
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile3 from '../../Assets/profile-images/Ellipse -8.png';
import profile4 from '../../Assets/profile-images/Ellipse -7.png';
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: '',
    profileArray: [
      { url: '../../Assets/profile-images/Ellipse -3.png' },
      { url: '../../Assets/profile-images/Ellipse -1.png' },
      { url: '../../Assets/profile-images/Ellipse -8.png' },
      { url: '../../Assets/profile-images/Ellipse -7.png' }

    ],
    allDepartment: [
      'HR', 'Sales', 'Finance', 'Engineer', 'Others'
    ],
    departMentValue: [],
    gender: '',
    salary: '',
    day: '',
    month: '',
    year: '',
    startDate: '',
    notes: '',
    id: '',
    profilePic: '',
    isUpdate: false,
    error: {
      department: '',
      name: '',
      gender: '',
      salary: '',
      profilePic: '',
      startDate: ''
    }
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
  return (
    <div>
      <div style={{ "margin": "25px" }}>
        <Link className="backbutton btn" to="/">Home Page</Link>
      </div>
      <img src={
        user.profilePic ===
          "../../Assets/profile-images/Ellipse -3.png"
          ? profile1
          : user.profilePic ===
            "../../Assets/profile-images/Ellipse -1.png"
            ? profile2
            : user.profilePic ===
              "../../Assets/profile-images/Ellipse -8.png"
              ? profile3

              : profile4
      } alt="Avatar" style={{ "width": "5%" }} />
      <h1 className="display-4">EMPLOYEE STATUS : {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Profile image:- {user.profileimage}</li>
        <li className="list-group-item"> Name:- {user.name}</li>
        <li className="list-group-item">Gender:- {user.gender}</li>
        <li className="list-group-item">Department:- {user.departMentValue}</li>
        <li className="list-group-item">Salary:- {user.salary}</li>
        <li className="list-group-item">StartDate:- {user.day + '-' + user.month + '-' + user.year}</li>
      </ul>
    </div>
  );
};

export default User;
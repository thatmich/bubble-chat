/*
TODO:
1. Camera.js -> functions DONE
2. useContext
3. AudioControl 按钮和功能 DONE
4. 与其他用户互动 
5. 后端？
6. recoil
*/


import React, { useEffect, useState } from 'react';
import socketClient from "socket.io-client";
import './App.css';
import Sidebar from './components/Sidebar.js'
import UserCircle from './components/UserCircle';
import OtherUser from './components/OtherUser'
import AudioControl from './components/AudioControl';
import StoreProvider from './components/StoreProvider';
import StoreContext from './contexts/StoreContext';
import { getNodeText } from '@testing-library/react';

var socket = socketClient('http://localhost:5000');
//var locations = [...Array(2)].map(e => Array(2));
// const users = [
//   {
//     googleId: '1',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Aaron A',
//     givenName: 'Aaron',
//     familyName: 'A',
//   },
//   {
//     googleId: '2',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Bob B',
//     givenName: 'Bob',
//     familyName: 'B',
//   },
//   {
//     googleId: '3',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Charlie C',
//     givenName: 'Charlie',
//     familyName: 'C',
//   },
//   {
//     googleId: '4',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Diana D',
//     givenName: 'Diana',
//     familyName: 'D',
//   },
//   {
//     googleId: '5',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Ethan E',
//     givenName: 'Ethan',
//     familyName: 'E',
//   },
//   {
//     googleId: '6',
//     imageUrl: defaultImg,
//     email: defaultEmail,
//     name: 'Fiona F',
//     givenName: 'Fiona',
//     familyName: 'F',
//   },
// ]
// function generateX() {
//   return Math.floor(Math.random() * 1600);
// }

// function generateY() {
//   let a = Math.floor(Math.random() * 800);

//   return a;
// }
function App() {
  const [userList, setUserList] = useState([]);
  const [thisUser, setThisUser] = useState({});
  const [userDivs, setUserDivs] = useState([]);

  useEffect(() => {
    socket.on('connection', (arg) => {
      setThisUser(arg.newUser);
      setUserList(arg.users);
    })
  }, []);

  useEffect(() => {
    socket.once('update', (arg) => {
      setUserList(arg);
      let tempUserDiv = [];
      for (const user of userList) {
        //console.log(user);
        if (user.id !== thisUser.id) {
          //console.log(user.x);
          tempUserDiv.push(
            
            <OtherUser userData={{
              id: user.id,
              name: user.name,
              imageUrl: user.img,
              xCoord: user.x,
              yCoord: user.y
            }}
              key={user.x, user.y}
            />

          )
        }
      }
      setUserDivs(tempUserDiv);
    }
    )
  }
  )



  function getUserPos(number) {
    if (userList[number] !== undefined) {
      return (

        <p className="temp" style={{ color: "white" }}>
          {"" + userList[number].x + " " + userList[number].y}
        </p>

      )
    }
  }

  return (
    <div>
      <StoreProvider>
        <div className='App'>
          <div className='space'>
            {userDivs}
            <UserCircle info={thisUser} socket={socket} />
          </div>
          {/* <Sidebar /> */}
          <AudioControl />
        </div>
      </StoreProvider>
      {getUserPos(0)}
      {getUserPos(1)}
    </div>


  );
}

export default App;

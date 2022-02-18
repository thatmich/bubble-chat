/*
TODO:
1. Camera.js -> functions DONE
2. useContext
3. AudioControl 按钮和功能
4. 与其他用户互动
5. 后端？
6. recoil

*/


import React, { useContext, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar.js'
import UserCircle from './components/UserCircle';
import OtherUser from './components/OtherUser'
import AudioControl from './components/AudioControl';
import StoreProvider from './components/StoreProvider';
import StoreContext from './contexts/StoreContext';

const defaultImg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
const defaultEmail = 'example@example.com';
var locations = [...Array(2)].map(e => Array(2));
const users = [
  {
    googleId: '1',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Aaron A',
    givenName: 'Aaron',
    familyName: 'A',
  },
  {
    googleId: '2',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Bob B',
    givenName: 'Bob',
    familyName: 'B',
  },
  {
    googleId: '3',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Charlie C',
    givenName: 'Charlie',
    familyName: 'C',
  },
  {
    googleId: '4',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Diana D',
    givenName: 'Diana',
    familyName: 'D',
  },
  {
    googleId: '5',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Ethan E',
    givenName: 'Ethan',
    familyName: 'E',
  },
  {
    googleId: '6',
    imageUrl: defaultImg,
    email: defaultEmail,
    name: 'Fiona F',
    givenName: 'Fiona',
    familyName: 'F',
  },
]
function generateX() {
  console.log(locations);
  return Math.floor(Math.random() * 1600);
}

function generateY() {
  console.log(locations);
  let a = Math.floor(Math.random() * 800);

  return a;
}
function App() {
  return (
    <StoreProvider>
      <div className='App'>
        <AudioControl />
        <Sidebar />
        <div className='space'>
          {users.map(function (user, i) {
            return <OtherUser userData={{ name: user.name, imageUrl: user.imageUrl }} key={i} x={generateX()} y={generateY()} />
          })}
          <UserCircle x={800} y={400} />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;

import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import StoreContext from '../contexts/StoreContext';

//https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del


const clientId = "1080853232694-vd21gc7ivuedf7o1328ijnj5s4fbq686.apps.googleusercontent.com";
const defaultPic = "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=";
function Sidebar() {
  const [imgURL, setURL] = useState(defaultPic);
  const [name, setName] = useState("");
  const [isIn, setLogin] = useState(false);
  const { userInfo, setUserInfo } = useContext(StoreContext);
  const loginVisibility = () => {
    const loginElements = document.getElementById("Logins");
    const logoutElements = document.getElementById("Logouts");
    const otherUsers = document.getElementsByClassName("other-users");
    loginElements.style.visibility = "hidden";
    logoutElements.style.visibility = "visible";
    loginElements.style.height = "0";
    logoutElements.style.height = "100%";
    for (let user of otherUsers) {
      user.style.visibility = "visible";
    }
  }
  const logoutVisibility = () => {
    const loginElements = document.getElementById("Logins");
    const logoutElements = document.getElementById("Logouts");
    const otherUsers = document.getElementsByClassName("other-users");
    loginElements.style.visibility = "visible";
    logoutElements.style.visibility = "hidden";
    loginElements.style.height = "100%";
    logoutElements.style.height = "0";
    for (let user of otherUsers) {
      user.style.visibility = "hidden";
    }
  }

  const onSuccess = (res) => {
    console.log(res.profileObj);
    loginVisibility();
    setURL('' + res.profileObj.imageUrl);
    setName('' + res.profileObj.givenName + ' (You)');
    setLogin(true);
    setUserInfo({...userInfo, name: res.profileObj.name, imageUrl: res.profileObj.imageUrl });
  }

  const onFailure = (res) => {
    console.log("failure " + res.error + " " + res.details);
  }

  const onLogoutSuccess = () => {
    console.log("success logout");
    logoutVisibility();
    setURL(defaultPic);
    setName('');
    setLogin(false);
    setUserInfo({ name: "", imageUrl: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" });
  }
  const inputRef = React.useRef(null)
  return (
    <div className="Sidebar">
      <nav className="sidebar-nav">
        <div className="nav-center">
          <ul className="account-info">
            <li className="centeredDetails">
              <h3>Placeholder Name</h3>
            </li>
            <li className="centeredDetails">
              <div id="Logins">
                <p>Login</p>
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy='single_host_origin'
                  isSignedIn='true'
                />
              </div>
              <div id="Logouts"
                style={{ visibility: 'hidden' }}>
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onLogoutSuccess}
                />
              </div>
            </li>
            <div />
            <li>
              <h4>{name}</h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("Aaron says hi")}>Aaron</span></h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("B says hi")}>Bob</span></h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("Charlie says hi")}>Charlie</span></h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("Diana says hi")}>Diana</span></h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("Ethan says hi")}>Ethan</span></h4>
            </li>
            <li>
              <h4 className='other-users'><span ref={inputRef} onClick={() => console.log("Fiona says hi")}>Fiona</span></h4>
            </li>
          </ul>
        </div>
      </nav>
      {/* <img alt="userPicture" src={imgURL}></img> */}
    </div>
  );
}

export default Sidebar;

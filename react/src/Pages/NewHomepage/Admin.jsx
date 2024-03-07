import React from 'react';
import { useState } from 'react';
import "./Tryy.css"
import { AutoGraphOutlined, ColorLensOutlined, HomeOutlined, NotificationsOutlined, SettingsOutlined } from '@mui/icons-material';
import { useStateContext } from '../../Context/ContextProvider';
import axiosClient from '../../axios';

export default function Tryy() {

  const [activeItem, setActiveItem] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeBg, setActiveBg] = useState('bg-1');




  
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (itemName === 'notifications') {
      setShowNotifications(!showNotifications);
    } else {
      setShowNotifications(false);
    }
  };


  const { setCurrentUser, setUserToken } = useStateContext();

  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };

  const handleDonation = () => {
    axiosClient.get('/pay')
        .then(response => {
            // Handle successful payment response
            console.log(response.data);
            // Redirect to success page or display success message
        })
        .catch(error => {
            // Handle payment error
            console.error('Error:', error);
            // Display error message to the user
        });
};


  const handleBgChange = (bgClass) => {
    setActiveBg(bgClass);
  };

  const changeActiveItem = () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
  };

  const searchMessage = () => {
    const messageItems = document.querySelectorAll('.message');
    const messageSearch = document.querySelector('#message-search');
    const val = messageSearch.value.toLowerCase();
    messageItems.forEach(chat => {
      let name = chat.querySelector('h5').textContent.toLowerCase();
      if (name.indexOf(val) !== -1) {
        chat.style.display = 'flex';
      } else {
        chat.style.display = 'none';
      }
    });
  };

  const openThemeModal = () => {
    const themeModal = document.querySelector('.customize-theme');
    themeModal.style.display = 'grid';
  };

  const closeThemeModal = (e) => {
    const themeModal = document.querySelector('.customize-theme');
    if (e.target.classList.contains('customize-theme'))
      themeModal.style.display = 'none';
  };

  const removeSizeSelector = () => {
    const fontSizes = document.querySelectorAll('.choose-size span');
    fontSizes.forEach(size => {
      size.classList.remove('active');
    });
  };

  const changeActiveColorClass = () => {
    const colorPalette = document.querySelectorAll('.choose-color span');
    colorPalette.forEach(colorPicker => {
      colorPicker.classList.remove('active');
    });
  };

  
  return (
    <div className='bodystyle'>

                     {/* Header */}
      <nav>
        <div className="container">
          <div className="log">
            <img src="./Assets/images/acn.png" alt="ACN Logo" />
          </div>
          <div className="create">
            <label className="btn btn-primary" htmlFor="create-post" onClick={() => window.location.href = "http://localhost:8000/api/pay"}>Donate</label>
            <div className="profile-photo">
              <img src="./Assets/images/Logo.jpg" alt="Profile" />
            </div>
          </div>
        </div>
      </nav>
                     {/* End Header */}

      <main>
        <div className="container">


                     {/* LEFT */}
          <div className="left">
            <a className="profile">
              <div className="profile-photo">
                <img src="./Assets/images/Logo.jpg" alt="Profile" />
              </div>
              <div className="handle">
                <h4>ACN Philippines</h4>
                <p className="text-muted">@ACN_PH</p>
              </div>
            </a>

                     {/* Side Bar */}
                     <div className="sidebar">
       <a
        id="home"
        className={`menu-item ${activeItem === 'home' ? 'active' : ''}`}
        onClick={() => handleItemClick('home')}
      >
        <span><HomeOutlined/></span><h3>Home</h3>
      </a>
      <a 
        id='analytics'
        className={`menu-item ${activeItem === 'analytics' ? 'active' : ''}`}
        onClick={() => handleItemClick('analytics')} href='https://dashboard.paymongo.com/payments'>
        <span><AutoGraphOutlined/></span> <h3>Analytics</h3><span></span>
      </a>
      <a
        id="theme"
        className={`menu-item ${activeItem === 'theme' ? 'active' : ''}`}
        onClick={() => handleItemClick('theme')}
      >
        <span><ColorLensOutlined/></span><h3>Theme</h3>
      </a>
      <a 
        id='settings'
        className={`menu-item ${activeItem === 'settings' ? 'active' : ''}`}
        onClick={() => handleItemClick('settings')}
      >
        <span><SettingsOutlined/></span> <h3>Settings</h3><span></span>
      </a>    
                     {/* End Sidebar */}
      <label htmlFor="create-post" className="btn btn-primary" onClick={logout}>Log out</label>
    </div>
    </div>
                     {/* END LEFT */}



    <div className="middle">
                     {/* STORIES */}
      <div className="stories">
        <div className="story">
          <div className="profile-photo">
            <img src="./Assets/images/profile-2.jpg" alt="Profile" />
          </div>
          <p className="name">ACN Philippines</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="./Assets/images/profile-2.jpg" alt="Profile" />
          </div>
          <p className="name">ACN Germany</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="./Assets/images/profile-2.jpg" alt="Profile" />
          </div>
          <p className="name">ACN Ukraine</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="./Assets/images/profile-2.jpg" alt="Profile" />
          </div>
          <p className="name">ACN Myanmar</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="./Assets/images/profile-2.jpg" alt="Profile" />
          </div>
          <p className="name">ACN Argentina</p>
        </div>
      </div>
                     {/* END STORIES */}
      <form className="create-post">
        <div className="profile-photo">
          <img src="./Assets/images/Logo.jpg" alt="Profile" />
        </div>
        <input type="text" placeholder="Your feedback matters!" id="create-post" />
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>


                     {/* News Feed */}
    <div className="feeds">
                     {/* NF 1 */}
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 1 HOUR AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src="./Assets/images/feed-1.jpg" alt="Feed" />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p><b>ACN Philippines</b> Conditions for the Christian community in Gaza have worsened in the past four months, with 30 Christians having died since the conflict began. The region is divided into north and south, where finding food and fuel is increasingly difficult due to exorbitant prices. Despite these challenges, one priest and seven women religious are providing support to 560 people, including children and the elderly, who have sought refuge at the Catholic parish of the Holy Family. Tragically, among the deceased are victims of attacks on both Greek Orthodox and Catholic parish compounds, as well as those who succumbed to chronic illnesses exacerbated by the crisis.</p>
        </div>
      </div>
                     {/* NF 2 */}
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 15 HOURs AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src="./Assets/images/feed-2.jpg" alt="Feed" />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p><b>ACN Philippines</b> Aid to the Church in Need has increased its aid to the unstable Sahel region, where, despite persecution, the Christian population is growing.

Africa’s Sahel region, which spans several countries, including Burkina Faso, Chad, Niger, and Mali, is one of the world’s major flashpoints. Islamist terror and hunger go hand in hand here, while civil authorities seem to be losing control, and Western forces are starting to withdraw after a 10-year military presence.   They are leaving behind a growing humanitarian crisis, characterized by ruined infrastructure, hunger, and hundreds of thousands of Internally Displaced Persons (IDPs).</p>
        </div>
      </div>
                     {/* NF 3 */}
      <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 16 HOURS AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src="./Assets/images/feed-3.jpg" alt="Feed" />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p><b>ACN Philippines</b> Ten years after conflict first began in Russia’s war against Ukraine, ACN will dedicate its 2024 Lent campaign to the country’s suffering Church, so that it can continue to bring God’s healing love to the people.</p>
        </div>
      </div>
                     {/* NF 4 */}
                     <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 17 HOURS AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src="./Assets/images/feed-4.jpg" alt="Feed" />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p><b>ACN Philippines</b> During a visit to the headquarters of Aid to the Church in Need (ACN), Bishop Miguel Angel Nguema Bee of Ebibeyin told the story of the first catechist to be martyred in Equatorial Guinea, José Si Esono, whom the local Church would like to see beatified. The bishop also spoke about the role catechists play in the country today.

Located on the west coast of Africa, Equatorial Guinea became independent from Spain in 1968. It then went through 11 years of communist dictatorship, during which the Catholic Church was persecuted, public worship was forbidden, and churches were converted into cocoa and coffee warehouses. At this time, lay catechists undertook the task of evangelization.</p>
        </div>
      </div>
                     {/* NF 5 */}
                     <div className="feed">
        <div className="head">
          <div className="user">
            <div className="profile-photo">
              <img src="./Assets/images/profile-2.jpg" alt="Profile" />
            </div>
            <div className="info">
              <h3>ACN PHILIPPINES</h3>
              <small>Makati, 24 HOURS AGO</small>
            </div>
          </div>
          <span className="edit">
            <i className="uil uil-ellipsis-h"></i>
          </span>
        </div>

        <div className="photo">
          <img src="./Assets/images/feed-3.jpg" alt="Feed" />
        </div>
        <div className="action-button">
          <div className="interaction-buttons">
            <span><i className="uil uil-heart"></i></span>
            <span><i className="uil uil-comment-dots"></i></span>
            <span><i className="uil uil-share"></i></span>
          </div>
          <div className="bookmark">
            <span><i className="uil uil-bookmark"></i></span>
          </div>
        </div>

        <div className="caption">
          <p><b>ACN Philippines</b> Pope Francis has said that the real treasure of Myanmar is its people. As the conflict between the military regime and its opposition worsens, Aid to the Church in Need supports the local Catholic Church’s repeated calls for peace and justice, not only for Christians, but for all of the country’s citizens.

On February 1, 2021, a military coup ended civilian rule in Myanmar, triggering a conflict that continues to this day.

On the third anniversary of the coup, Aid to the Church in Need (ACN) stresses the importance of continuing to pray for and work toward the establishment of peace and justice in Myanmar.</p>
        </div>
      </div>
    </div>
    </div>
                {/* Right */}
    <div className="right">
      <div className="messages">
        <div className="headings">
          <h4>Status</h4>
          {/* <i className="uil uil-edit"></i> */}
        </div>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Donate for a cause" id="message-search" />
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src="./Assets/images/profile-3.jpg" alt="Profile" />
          </div>
          <div className="message-body">
            <h5>ACN Germany</h5>
            <p className="text-muted">Your penny counts!</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src="./Assets/images/profile-3.jpg" alt="Profile" />
          </div>
          <div className="message-body">
            <h5>ACN Germany</h5>
            <p className="text-muted">Your penny counts!</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src="./Assets/images/profile-3.jpg" alt="Profile" />
          </div>
          <div className="message-body">
            <h5>ACN Germany</h5>
            <p className="text-muted">Your penny counts!</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src="./Assets/images/profile-3.jpg" alt="Profile" />
          </div>
          <div className="message-body">
            <h5>ACN Germany</h5>
            <p className="text-muted">Your penny counts!</p>
          </div>
        </div>
        <div className="message">
          <div className="profile-photo">
            <img src="./Assets/images/profile-3.jpg" alt="Profile" />
          </div>
          <div className="message-body">
            <h5>ACN Germany</h5>
            <p className="text-muted">Your penny counts!</p>
          </div>
        </div>
        {/* Add other message elements */}
      </div>
      <div className="friend-request">
        <h4>Requests</h4>
        <div className="requests">
          <div className="info">
            <div className="profile-photo">
              <img src="./Assets/images/profile-15.jpg" alt="Profile" />
            </div>
            <div>
              <h5>ACN Philippines</h5>
              <p className="text-muted">Success</p>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-primary">Donate</button>
            <button className="btn">Decline</button>
          </div>
        </div>
        <div className="requests">
          <div className="info">
            <div className="profile-photo">
              <img src="./Assets/images/profile-15.jpg" alt="Profile" />
            </div>
            <div>
              <h5>ACN Philippines</h5>
              <p className="text-muted">Success</p>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-primary">Donate</button>
            <button className="btn">Decline</button>
          </div>
        </div>
        <div className="requests">
          <div className="info">
            <div className="profile-photo">
              <img src="./Assets/images/profile-15.jpg" alt="Profile" />
            </div>
            <div>
              <h5>ACN Philippines</h5>
              <p className="text-muted">Success</p>
            </div>
          </div>
          <div className="action">
            <button className="btn btn-primary">Donate</button>
            <button className="btn">Decline</button>
          </div>
        </div>
        {/* Add other request elements */}
      </div>
    </div>
        </div>
      </main>

      <div className="customize-theme">
  <div className="card">
    <h2> Customize your view</h2>
    <p className="text-muted">Manage your font size, color, and background</p>

    {/* FONT SIZES */}
    <div className="font-size">
      <h4>Font Size</h4>
      <div>
        <h6>Aa</h6>
        <div className="choose-size">
          <span className="font-size-1"></span>
          <span className="font-size-2 active"></span>
          <span className="font-size-3"></span>
          <span className="font-size-4"></span>
          <span className="font-size-5"></span>
        </div>   
        <h3>Aa</h3>
      </div>
    </div>

    {/* COLOR */}
    <div className="color">
      <h4>Color</h4>
      <div className="choose-color">
        <span className="color-1 active"></span>
        <span className="color-2"></span>
        <span className="color-3"></span>
        <span className="color-4"></span>
        <span className="color-5"></span>
      </div>
    </div>

    {/* BACKGROUND */}
    <div className="background">
          <h4> Background</h4>
          <div className="choose-bg">
            <div
              className={`bg-1 ${activeBg === 'bg-1' ? 'active' : ''}`}
              onClick={() => handleBgChange('bg-1')}
            >
              <span></span>
              <label htmlFor="bg-1">Light</label>
            </div>
            <div
              className={`bg-2 ${activeBg === 'bg-2' ? 'active' : ''}`}
              onClick={() => handleBgChange('bg-2')}
            >
              <span></span>
              <label>Dim</label>
            </div>
            <div
              className={`bg-3 ${activeBg === 'bg-3' ? 'active' : ''}`}
              onClick={() => handleBgChange('bg-3')}
            >
              <span></span>
              <label htmlFor="bg-3">Dark</label>
            </div>
          </div>
        </div>
      </div>
</div>


    </div>
  );
}

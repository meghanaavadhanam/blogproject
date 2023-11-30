import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import Menu from '../components/Menu'
import {Link} from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src="" alt="Post"/>
      <div className='user'>
        <img src={""} alt="Person image"/>
      <div className="info">
        <span>John</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=2`}>
        <img src={Edit} alt=""/>
        </Link>
        <img src={Delete} alt=""/>
      </div> 
      </div>
      <h1>Whispers of Wanderlust: A Journey Through Uncharted Realms</h1>
      <p>Embark on a virtual odyssey as we explore the uncharted realms of the world, unraveling the mysteries that lie beyond the familiar horizon. "Whispers of Wanderlust" is your passport to an enchanting sojourn, where each page unfolds a new chapter in the grand narrative of exploration.
Join us as we traverse through hidden gems, from the bustling markets of Marrakech to the serene landscapes of Patagonia. This blog is a celebration of the diverse cultures, rich histories, and breathtaking landscapes that make our world an awe-inspiring tapestry of experiences.
Discover travel tips, immersive anecdotes, and captivating stories that will ignite the spark of wanderlust within you. Whether you're an armchair traveler or a seasoned globetrotter, "Whispers of Wanderlust" invites you to embark on a vicarious expedition, painting vivid pictures of distant lands and stirring the imagination.
Let the journey begin, as we follow the whispers of wanderlust to destinations unknown, unlocking the secrets of the world and forging connections with the extraordinary tapestry of humanity. Adventure awaits on every page, beckoning you to dream, explore, and savor the essence of wanderlust.</p>
      </div>
      {/* <div className='menu'>m</div> */}
      <Menu />
    </div>
  )
}

export default Single
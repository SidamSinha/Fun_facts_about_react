function Header() {
    return(
      <header className='header'>
        <div className="image-text">
        <img 
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" 
        alt="rect-logo" 
        />
        <span>ReactFacts</span>
        </div>
        <nav>
          <ul className='nav-list'>
            <a href=""><li className='nav-list-items'>Pricing</li></a>
            <a href=""><li className='nav-list-items'>About</li></a>
            <a href=""><li className='nav-list-items'>Contacts</li></a>      
          </ul>
        </nav>
      </header>
    )
  }

export default Header
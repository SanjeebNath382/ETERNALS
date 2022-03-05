import logo from "../images/logo.png";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <img href='#page-top' src={logo} style={{height:"200px",width:"250px",marginBottom:"-40px",marginTop:"-50px"}}></img>{' '}
          {/* <a className='navbar-brand page-scroll' href='#page-top'>
           MediCure
          </a>{' '} */}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            {/* <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li> */}
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            <li>
              <a href="http://localhost:8080/" className='page-scroll' target="_blank">
                  Habitus
              </a>
            </li>
            <li>
              <a href="http://localhost:3001/" className='page-scroll' target="_blank">
                  Mental Health Tracker
              </a>
            </li>
            <li>
              <a href="http://localhost/healthChecker" className='page-scroll' target="_blank">
                  Physical Health Tracker
              </a>
            </li>
            <li>
            
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            {/* <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

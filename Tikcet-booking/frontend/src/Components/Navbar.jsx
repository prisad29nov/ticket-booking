import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        {/* <div className='container'> */}
        {/*          
            <a class='navbar-brand me-2'>
              HomePage
              <img
                src='https://cdn.digitbin.com/wp-content/uploads/Top-best-Android-Apps-to-watch-and-stream-free-movies-online.jpg'
                style={{ height: '22px', marginTop: '-1px' }}
                alt='MDB Logo'
                loading='lazy'
              /> 
            </a>
        */}

        <div className='collapse navbar-collapse' id='navbarButtonsExample'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
          </ul>

          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarButtonsExample'
            aria-controls='navbarButtonsExample'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>

          <div className='collapse navbar-collapse' id='navbarButtonsExample'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                {/* <a className='nav-link'>Dashboard</a> */}
              </li>
            </ul>

            <div className='d-flex align-items-center'>
              <Link to='/login'>
                <button type='button' className='btn btn-primary me-3'>
                  Login
                </button>
              </Link>
              <Link to='/signup'>
                <button type='button' className='btn btn-primary me-3'>
                  Sign up
                </button>
              </Link>
              {/* <a
                className='btn btn-dark px-3'
                // href='https://github.com/mdbootstrap/mdb-ui-kit'
                role='button'
              >
                <i className='fab fa-github'></i>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

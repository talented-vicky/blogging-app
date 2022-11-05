import './header.styles.scss'

const Header = () => (
    <div className="header">
        <div className='header__media'>
            <i class="fa-brands fa-facebook-messenger"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
        <div className='header__content'>
            <ul className='header__content-list'>
                <li className='item'> home </li>
                <li className='item'> about </li>
                <li className='item'> contact </li>
                <li className='item'> write </li>
                <li className='item'> logout </li>
            </ul>
        </div>
        <div className='header__user'>
            <img className='header__user-image'
                src="https://images.unsplash.com/photo-1520881363902-a0ff4e722963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                alt="user" 
            />
            <i class="fa-solid fa-magnifying-glass-dollar"></i>
        </div>
    </div>
)

export default Header;
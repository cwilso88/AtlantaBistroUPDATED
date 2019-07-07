import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
    <footer>
      <div className="container">
          <nav className="menu">
            <a href="#">Our Story</a>
            <a href="#">Special Menu</a>
            <a href="#">Reviews</a>
            <a href="#">Contact Us</a>
          </nav>

          <ul className="social-media">
              <li>
                <a href="http://www.facebook.com" target="new">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com" target="new">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://instagram.com" target="new">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="http://pintrest.com" target="new">
                  <i class="fa fa-pinterest-square" aria-hidden="true"></i>
                </a>
              </li>
          </ul>

          <div className="copyright">
          © 2018 Copyright <br/> This site was happily made by Chasity De La Cruz
          </div>
          
        </div>
    </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

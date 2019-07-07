import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
    <header>
    <div className="container">
        <div className="logo">
          <h3 className="logo-header">BUCKHEAD GROUP</h3>
          <div>
            <h5 className="logo-text">FINE SKEAKHOUSE</h5>
          </div>
        </div>
        <nav>
            <a href="#">Our Story</a>
            <a href="#">Menu</a>
            <a href="#">Reviews</a>
            <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

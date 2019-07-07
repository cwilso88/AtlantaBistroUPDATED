import {h, app} from 'hyperapp'

export default function Topimg({state, actions}) {
  return (
    <section id="TopImg">
      <div className="container">
          <div className="title">
              <h5>Welcome</h5>
              <h1>{state.globalState.companyInfo.title}</h1>
          </div>
          <div className="contact-info">
              <div className="booking">Reserve Table Directly</div>
              <h2>(770) 756-1391</h2>
              <div className="hours">
                Opening Hours <strong>Mon - Fri:</strong> 9am - 9pm
                <strong>Sat - Sun:</strong> 11am - 10pm
              </div>
          </div>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

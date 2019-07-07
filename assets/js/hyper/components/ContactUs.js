import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
    return (
      <section id="ContactUs" className="texturebg">
        <div className="container">
            <h5 className="ContactUs-title">Contact Us</h5>
            <h2>Delicious Flavor of Autumn</h2>

            <div className="box">
              <div className="row">
                <div className="col-md-6">
                  <div className="title">
                    {state.globalState.companyInfo.location}
                  </div>
                  <h6 className="address"> 3309 Hamilton Road <br/>
                  Sandy Springs, GA 30303
                  </h6>
                  <p>
                    <strong>email:</strong> <a href="mailto:info@atlantabistro.com">info@atlantabistro.com</a>
                  </p>
                </div>
                <div className="col-md-6">
                    <h6>
                      Phone: 
                    </h6>
                    <div className="title">
                      (404) 512-0978
                    </div>
                    <h6>
                      Lunch Service:
                    </h6>
                    <p>
                      Sunday - Friday <br/> from 11am - 2:00pm
                    </p>
                    <h6>
                      Dinner Service:
                    </h6>
                    <p>
                      Sunday - Saturday: <br/> from 5pm - 11:30pm
                    </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

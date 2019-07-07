import {h, app} from 'hyperapp'

export default function OurStory({state, actions}) {
  return (
    <section id="OurStory">
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="story-title">Our Story</h5>
              <h2>Cooking is the art of Adjustment</h2>
              <p>When we opened our doors in 2005, we wanted to recreate the upscale bistros we knew growing up in the city of Atlanta where people could meet and enjoy light fare with a cup of coffee or a glass of wine. We did not anticipate that American Bistro would become an instant success and develop such a devoted following. We quickly responded by creating a more traditional restaurant setting and expanding the offerings from the kitchen but we never lost sight of our vision.</p>
              <div className="quote">
                 "Atlanta Bistro is the best in town. The service and food are always amazing." - <strong>Shelly Green</strong>
              </div>
              <a href="#" className="reserve-btn">Reserve</a>

            </div>
            <div className="col-md-6">
              <div className="video-img">
                
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

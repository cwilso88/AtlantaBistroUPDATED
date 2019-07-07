import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
    var loopMenu = function(){
           return state.globalState.menuInfo.map(function(item){
            return(
              <div className="col-md-4">
                <div className="box">
                  <div className="box-img">
                    <div className="price-circle">${item.price}</div>
                  </div>
                  <span className="title">{item.title}</span>
                  <p className="details">{item.description}</p>
                </div>
            </div>
            )
          })
       }



  return (
    <section id="SpecialMenu">
      <div className="container">
          <h5 className="specialMenu-title">Special Menu</h5>
          <h2>Delicious Flavor of Summer</h2>
          <div className="row boxes">  

            {loopMenu()}

          </div>

          <a href="https://i.pinimg.com/originals/bd/1f/99/bd1f99adebf27169ebd87a128094efe1.jpg" className="link">View full menu</a>
          
        </div>
    </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

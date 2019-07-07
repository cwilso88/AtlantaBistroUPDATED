import {h, app} from 'hyperapp'

export default function Reviews({state, actions}) {
      console.log(state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company)
  var currentReview = function(){
    return (
      <div>
        <h5 className="reviews-title">Reviews</h5>
        <h2>{state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company}</h2>
        <h4>{state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].highlight}</h4>
        <p>{state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].review}</p>

        <div className="author"><strong>{state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].author}</strong>- <em>{state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].authorInfo}</em></div>
      </div>
    )
  }

  var leftClickBTN = function() {
    if(state.reviewStatus.currentReview == 0) {
      console.log('do nothing')
    } else {
      actions.reviewLeftClicked()
    }
  }

  var rightClickBTN = function() {
    if(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsInfo.length - 1)) {
      console.log('do nothing')
    } else {
      actions.reviewRightClicked()
    }
  }

    return (
      <section id="Reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8 side-img">
              <img src="https://image.freepik.com/free-photo/chef-with-his-arms-crossed-over-white-background_1368-2792.jpg"/>
            </div>
            <div className="col-md-4">
                {currentReview()}
                <div className="arrows">
                  <i onClick={leftClickBTN} class={`fa fa-arrow-left ${(state.globalState.reviewStatus.currentReview > 0) ? 'ready' : ''}`}></i>
                  <i onclick={rightClickBTN} class={`fa fa-arrow-right ${(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsInfo.length - 1)) ? '' : 'ready'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

import {h, app} from 'hyperapp';
import actions from '../actions/actions';


export default function Reviews({state, actions}) {
      console.log(state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company)
      const { globalState } = state;

    const currentReview = () => {
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

  const leftClick = () => {
    if(state.globalState.reviewStatus.currentReview == 0 ) {
      console.log('do nothing')
    } else {
      actions.reviewLeft();
    }
  }

  const rightClick = () => {
    if(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsInfo.length - 1)) {
      console.log('do nothing')
    } else {
      actions.reviewRight();
    }
  }
  console.log(globalState.reviewStatus.currentReview);
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
                  <i onClick={leftClick} class={`fa fa-arrow-left ${(state.globalState.reviewStatus.currentReview > 0) ? 'ready' : ''}`}></i>
                  <i onclick={rightClick} class={`fa fa-arrow-right ${(state.globalState.reviewStatus.currentReview == (state.globalState.reviewsInfo.length - 1)) ? '' : 'ready'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

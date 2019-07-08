import {h, app} from 'hyperapp';
import {actions} from '../actions/actions';

export default function Reviews({state, actions}) {
      console.log(state.globalState.reviewsInfo[state.globalState.currentReview])
      console.log(state.globalState.reviewsInfo[state.globalState.currentReview + 1])
      
      const { globalState } = state;
      const currentReview = state.globalState.currentReview;
      const reviewIndex = state.globalState.reviewsInfo.length;
      const reviewInfo = state.globalState.reviewsInfo;

      console.log(currentReview + 1);
// actions
const reviewLeft = (state, actions) => {
  const { currentReview } = globalState;

  console.log('left');
  // return (
  //   {
  //     reviewStatus: {
  //       currentReview: globalState.currentReview - 1
  //     }
  //   }
  // )
}


const reviewRight = (state, actions) => {
  const { currentReview } = globalState;

  console.log(state.globalState.currentReview + 1);
  
    return (
    {
      currentReview: currentReview + 1
    }
  )
}


  const leftClick = (state, actions) => {
    const {currentReview} = state.globalState;
    if(state.globalState.currentReview == 0 ) {
      console.log('do nothing')
    } else {
      actions.reviewLeft();
    }
  }

  const rightClick = (state, actions) => {
    const {globalState} = state;

    if(state.globalState.currentReview == (reviewIndex - 1)) {
      console.log('do nothing')
    } 
  }

console.log(state.globalState.currentReview);

  const currentReviewDisplay = (state, actions) => {
    return (
      <div>
        <h5 className="reviews-title">Reviews</h5>
        <h2>{reviewInfo[currentReview].company}</h2>
        <h4>{reviewInfo[currentReview].highlight}</h4>
        <p>{reviewInfo[currentReview].review}</p>
      
        <div className="author"><strong>{reviewInfo[currentReview].author}</strong>- <em>{reviewInfo[currentReview].authorInfo}</em></div>
      </div>
    )
  }

  
    return (
      <section id="Reviews">
        <div className="container">
          <div className="row">
            <div className="col-md-8 side-img">
              <img src="https://image.freepik.com/free-photo/chef-with-his-arms-crossed-over-white-background_1368-2792.jpg"/>
            </div>
            <div className="col-md-4">
                {currentReviewDisplay()}
                <div className="arrows">
                  <i onclick={rightClick} class={`fa fa-arrow-left ${(currentReview > 0) ? 'ready' : ''}`}></i>
                  <i onclick={() => console.log(state.globalState.currentReview + 1)} class={`fa fa-arrow-right ${(currentReview == (reviewIndex - 1)) ? '' : 'ready'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

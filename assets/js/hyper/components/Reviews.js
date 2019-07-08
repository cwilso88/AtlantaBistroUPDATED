import {h, app} from 'hyperapp';
import {actions} from '../actions/actions';

export default function Reviews({state, actions}) {
      console.log(state.globalState.reviewsInfo[state.globalState.currentReview].company)
      const { globalState } = state;
      const currentReview = state.globalState.currentReview;
      const reviewIndex = state.globalState.reviewsInfo.length;
      const reviewInfo = state.globalState.reviewsInfo;

// actions
// const reviewLeft = (state, actions) => {
//   const { currentReview } = globalState;

//   console.log(currentReview - 1);
//   // return (
//   //   {
//   //     reviewStatus: {
//   //       currentReview: globalState.currentReview - 1
//   //     }
//   //   }
//   // )
// }


// const reviewRight = (state, actions) => {
//   const { currentReview } = globalState;

//   console.log(currentReview + 1);
  
//   //   return (
//   //   {
//   //     currentReview: currentReview + 1
//   //   }
//   // )
// }




    
const currentReviewDisplay = (state, actions) => {
    return (
      <div>
        <h5 className="reviews-title">Reviews</h5>
        <h2>{reviewInfo[currentReview].company}</h2>
        <h4>{reviewInfo[currentReview].highlight}</h4>
        <p>{reviewInfo[currentReview].review}</p>
        <p>{currentReview}</p>
      
        <div className="author"><strong>{reviewInfo[currentReview].author}</strong>- <em>{reviewInfo[currentReview].authorInfo}</em></div>
      </div>
    )
  }

  const leftClick = (state, actions) => {
    if(currentReview == 0 ) {
      console.log('do nothing')
    } else {
      actions.reviewLeft();
    }
  }

  const rightClick = (state, actions) => {
    if(currentReview == (reviewIndex - 1)) {
      console.log('do nothing')
    } else {
        actions.reviewRight(1);
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
                {currentReviewDisplay()}
                <div className="arrows">
                  <i onclick={() => actions.rightClick()} class={`fa fa-arrow-left ${(currentReview > 0) ? 'ready' : ''}`}></i>
                  <i onclick={actions.rightClick} class={`fa fa-arrow-right ${(currentReview == (reviewIndex - 1)) ? '' : 'ready'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

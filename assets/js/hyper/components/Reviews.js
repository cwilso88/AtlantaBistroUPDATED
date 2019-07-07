import {h, app} from 'hyperapp';
import {reviewLeft, reviewRight} from '../actions/actions';


export default function Reviews({state, actions}) {
      console.log(state.globalState.reviewsInfo[state.globalState.reviewStatus.currentReview].company)
      const { globalState } = state;
      const review = state.globalState.reviewStatus.currentReview;
      const reviewIndex = state.globalState.reviewsInfo.length;
      const reviewInfo = state.globalState.reviewsInfo;

    const currentReview = () => {
    return (
      <div>
        <h5 className="reviews-title">Reviews</h5>
        <h2>{reviewInfo[review].company}</h2>
        <h4>{reviewInfo[review].highlight}</h4>
        <p>{reviewInfo[review].review}</p>

        <div className="author"><strong>{reviewInfo[review].author}</strong>- <em>{reviewInfo[review].authorInfo}</em></div>
      </div>
    )
  }

  const leftClick = () => {
    if(review == 0 ) {
      console.log('do nothing')
    } else {
      actions.reviewLeft();
    }
  }

  const rightClick = () => {
    if(review == (reviewIndex - 1)) {
      console.log('do nothing')
    } else {
      actions.reviewRight();
    }
  }
  console.log(review);
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
                  <i onClick={leftClick} class={`fa fa-arrow-left ${(review > 0) ? 'ready' : ''}`}></i>
                  <i onclick={rightClick} class={`fa fa-arrow-right ${(review == (reviewIndex - 1)) ? '' : 'ready'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // <Header state={state} actions={actions}/>
  // <Button state={state} actions={actions}/>
  

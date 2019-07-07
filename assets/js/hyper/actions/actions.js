var reviewLeftClicked = function(state, actions) {
  
  return (
  {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  }
)
}


var reviewRightClicked = function(state, actions) {
  
    return (
    {
      reviewStatus: {
        currentReview: state.globalState.reviewStatus.currentReview + 1
      }
    }
  )
}

export const actions = {
  reviewLeftClicked,
  reviewRightClicked,
}




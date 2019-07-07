var reviewLeftClicked = function(state) {
  
  return (
  {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  }
)
}


var reviewRightClicked = function(state) {
  
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




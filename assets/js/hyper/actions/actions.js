const reviewLeft = (state, actions) => {
  
  return (
    {
      reviewStatus: {
        currentReview: state.globalState.reviewStatus.currentReview - 1
      }
    }
  )
}


const reviewRight = (state, actions) => {

    return (
    {
      reviewStatus: {
        currentReview: state.globalState.reviewStatus.currentReview + 1
      }
    }
  )
}

export const actions = {
  reviewLeft,
  reviewRight,
}




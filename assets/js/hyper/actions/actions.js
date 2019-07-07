export var reviewLeft = function(state) {
  
  return (
  {
    reviewStatus: {
      currentReview: state.globalState.reviewStatus.currentReview - 1
    }
  }
)
}


export var reviewRight = function(state) {
  
    return (
    {
      reviewStatus: {
        currentReview: state.globalState.reviewStatus.currentReview + 1
      }
    }
  )
}

// export const actions = {
//   reviewLeft,
//   reviewRight,
// }




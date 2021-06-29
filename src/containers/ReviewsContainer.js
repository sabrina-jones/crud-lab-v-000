import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews} restaurantId={this.props.restaurantId} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({reviews}) => ({reviews})

const mapDispatchToProps = dispatch => {
  return{
    deleteReview: (id) => dispatch({ type: 'DELETE_REVIEW', id}),
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', review})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);

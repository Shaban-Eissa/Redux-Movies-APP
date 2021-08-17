import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-5 mb-3">
          Search for a movie ,TV series
            <i className="fa fa-search" style={{marginLeft:'20px' , fontSize:'70%'}} />
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series"
              onChange={this.onChange}
              style={{width:'50%' , marginLeft:'25%'}}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);

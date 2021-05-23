import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { toggleFavorites } from '../actions/favoriteActions'

const MovieHeader = (props) => {
    const appTitle = props.appTitle;
    const displayFavorites = props.displayFavorites;
    console.log(props)

    const toggleFavoritesHandler = () => {
        props.toggleFavorites()
    }
    
    return(<div className="table-title">
        <div className="row">
        <div className="col-sm-6">
            <h2>{appTitle}</h2>
        </div>
        <div className="col-sm-6 headerBar">
            <div className="btn btn-sm btn-primary" ><span onClick={() => toggleFavoritesHandler()}>{ displayFavorites ? "Hide" : "Show"} Favorites</span></div>
            <Link to="/movies" className="btn btn-sm btn-primary">View All Movies</Link>
            <Link to="/movies/add" className="btn btn-sm btn-success"><i className="material-icons">&#xE147;</i> <span>Add New Movie</span></Link>
        </div>
        </div>
    </div>);
}

const mapStateToProps = state => {
    return {
        appTitle: state.movies.appTitle,
        displayFavorites: state.favorites.displayFavorites
    }
}

export default connect(mapStateToProps, { toggleFavorites })(MovieHeader);
//render a list of books

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
          <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
         className="list-group-item">{book.title}
          </li>
      );
    });
  }

  render() {
   return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  //will show up as props whatever is returned by this function
  //Booklist function
  //this function is the glue between react and redux
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch){
  //On call of selectBook, the result should be passed to all the reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//promote booklist from a component to a container, make the new dispatch method-selectBook available as a prop.
//connects takes a function and component to create a container.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

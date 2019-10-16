import React, { Component } from 'react';
import { Route } from 'react-router-dom';
<<<<<<< HEAD
=======
import BookmarksContext from './BookmarksContext';
>>>>>>> context-startingpoint
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkList from './BookmarkList/BookmarkList';
import Nav from './Nav/Nav';
import config from './config';
import './App.css';

const bookmarks = [
  // {
  //   id: 0,
  //   title: 'Google',
  //   url: 'http://www.google.com',
  //   rating: '3',
  //   desc: 'Internet-related services and products.'
  // },
  // {
  //   id: 1,
  //   title: 'Thinkful',
  //   url: 'http://www.thinkful.com',
  //   rating: '5',
  //   desc: '1-on-1 learning to accelerate your way to a new high-growth tech career!'
  // },
  // {
  //   id: 2,
  //   title: 'Github',
  //   url: 'http://www.github.com',
  //   rating: '4',
  //   desc: 'brings together the world\'s largest community of developers.'
  // }
];

class App extends Component {
  state = {
<<<<<<< HEAD
    bookmarks,
    error: null,
  };



=======
    bookmarks: [],
    error: null,
  };

>>>>>>> context-startingpoint
  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
<<<<<<< HEAD

=======
>>>>>>> context-startingpoint
    })
  }

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark],
    })
  }

  deleteBookmark = bookmarkId => {
    const newBookmarks = this.state.bookmarks.filter(bm =>
      bm.id !== bookmarkId)
      this.setState({
        bookmarks: newBookmarks
      })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setBookmarks)
      .catch(error => this.setState({ error }))
  }

  render() {
<<<<<<< HEAD
    const { bookmarks } = this.state
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>

=======
    const contextValue = {
      bookmarks: this.state.bookmarks,
      addBookmark: this.addBookmark,
      deleteBookmark: this.deleteBookmark,
    }
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <BookmarksContext.Provider value={contextValue}>
>>>>>>> context-startingpoint
        <Nav />
        <div className='content' aria-live='polite'>
          <Route
            path='/add-bookmark'
<<<<<<< HEAD
            render={({ history }) => {
              return <AddBookmark
              onAddBookmark={this.addBookmark}
              onClickCancel={ () => history.push('/')}
              />
            }}
          />

          <Route
            exact
            path='/'
            render={() =>
              <BookmarkList
                bookmarks={bookmarks} />}
          />
        </div>
      </main >
=======
            component={AddBookmark}
          />
          <Route
            exact
            path='/'
            component={BookmarkList}
          />
        </div>
        </BookmarksContext.Provider>
      </main>
>>>>>>> context-startingpoint
    );
  }
}

export default App;

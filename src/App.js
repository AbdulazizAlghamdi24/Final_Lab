import React, { useState, useEffect } from 'react';
import BookmarkList from './BookmarkList';
import AddBookmark from './AddBookmark1';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/read_all_bookmarks.php')
      .then(response => response.json())
      .then(data => setBookmarks(data));
      
  }, []);

  const addNewBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  return (
    <div>
      <h1>Bookmarks</h1>
      <AddBookmark onAddBookmark={addNewBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;

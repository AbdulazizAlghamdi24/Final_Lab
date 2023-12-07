import React from 'react';
import './App.css'; // Import your CSS file

function BookmarkList({ bookmarks }) {
  return (
    <div className="bookmark-list">
      <h2>Bookmark List</h2>
      <ul>
        {bookmarks.map(bookmark => (
          <li key={bookmark.id} className="bookmark-item">
            <div className="bookmark-title">{bookmark.title}</div>
            <div className="bookmark-url">{bookmark.url}</div>
            <div className="bookmark-date">Added on: {new Date(bookmark.date_added).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;

import React, { useState } from 'react';
import './App.css'
function AddBookmark({ onAddBookmark }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookmark = { title, url };
    fetch('http://localhost:3000/api/create_bookmark.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBookmark),
    }).then(() => {
      onAddBookmark(newBookmark);
      setTitle('');
      setUrl('');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-bookmark-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
}

export default AddBookmark;

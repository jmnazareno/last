import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import { AddAPhoto } from '@mui/icons-material';
import { Navigate } from 'react-router-dom'; // Import Navigate from react-router-dom
import axiosClient from '../../axios';

const PostModal = ({ isOpen, handleClose }) => {
  const [posts, setPosts] = useState({
    title: "",
    slug: "",
    description: "",
    image: null,
    image_url: null,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch initial posts data
    axiosClient.get('/posts')
      .then(({ data }) => {
        setPosts(data.data);
      })
      .catch(err => console.error('Error fetching posts:', err));
  }, []);

  const onImageChoose = (ev) => {
    const file = ev.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setPosts({
        ...posts,
        image: file,
        image_url: reader.result,
      });

      ev.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = { ...posts };
    if (payload.image) {
      payload.image = payload.image_url;
    }
    delete payload.image_url;
    axiosClient
      .post("/posts", payload)
      .then((res) => {
        console.log(res);
        Navigate('/'); // Redirect to home after successful post submission
      })
      .catch((err) => {
        if (err && err.reponse) {
          setError(err.response.data.message);
        }
        console.error('Error submitting post:', err);
      });
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'white',
          borderRadius: '8px',
          p: 4,
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <form onSubmit={onSubmit}>
          <h2>Create Post</h2>

          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}

          {/* Image */}
          <label className='label'>Photo</label>
          <div className='previewcontainer'>
            {posts.image_url && (
              <img
                src={posts.image_url}
                alt=''
                className='image-preview'
              />
            )}
            {!posts.image_url && (
              <span className='default-image'><AddAPhoto /></span>
            )}
            <button type='button' className='upload-button-label'>
              Change
              <input
                type='file'
                className='hidden'
                onChange={onImageChoose}
              />
            </button>
          </div>

          <TextField
            type="text"
            name="title"
            id="title"
            label="Title"
            variant="outlined"
            value={posts.title}
            onChange={(ev) => setPosts({ ...posts, title: ev.target.value })}
            fullWidth
            placeholder="Title"
            sx={{ mt: 2 }}
          />
          <TextField
            type="text"
            name="description"
            id="description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={posts.description || ""}
            onChange={(ev) => setPosts({ ...posts, description: ev.target.value })}
            fullWidth
            placeholder="Description"
            sx={{ mt: 2 }}
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Post
          </Button>
          <Button onClick={handleClose} sx={{ mt: 2, ml: 2 }}>
            Cancel
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PostModal;

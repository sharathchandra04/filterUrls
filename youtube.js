const API_KEY = 'AIzaSyDx-6bU4qukzRXOQE-nOSfkF9yKUvX5XM0';
// const VIDEO_ID = 'YOUR_VIDEO_ID';
const fetch = require('node-fetch');
import fetch from 'node-fetch';
async function getVideoCategory(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data)
    if (data.items.length === 0) {
      throw new Error('Video not found');
    }

    const category = data.items[0].snippet.categoryId;
    return category;
  } catch (error) {
    console.error('Error fetching video category:', error.message);
  }
}


function extractVideoId(url) {
  // Regular expression to match YouTube video URLs
  const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = url.match(youtubeRegex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null; // URL doesn't match the expected format
  }
}

const youtubeUrl = 'https://www.youtube.com/watch?v=kBMv3E2KS7s';
const videoId = extractVideoId(youtubeUrl);

const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

getVideoCategory()
  .then((category) => {
    console.log('Video category:', category);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


if (videoId) {
  console.log('YouTube Video ID:', videoId);
} else {
  console.error('Invalid YouTube URL');
}




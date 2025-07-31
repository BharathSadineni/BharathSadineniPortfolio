// GitHub Gist API for likes
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GIST_ID = process.env.REACT_APP_GIST_ID;

if (!GITHUB_TOKEN || !GIST_ID) {
  throw new Error('Missing GitHub token or Gist ID in environment variables');
}

export const getLikes = async () => {
  try {
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const gist = await response.json();
    const likesFile = gist.files['likes.json'];
    
    if (!likesFile) {
      return { count: 0 };
    }
    
    const data = JSON.parse(likesFile.content);
    return data;
  } catch (error) {
    console.error('Error reading likes:', error);
    return { count: 0 };
  }
};

export const updateLikes = async (increment: boolean) => {
  try {
    // Get current data
    const currentData = await getLikes();
    const newCount = currentData.count + (increment ? 1 : -1);
    
    // Update the gist
    const response = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        files: {
          'likes.json': {
            content: JSON.stringify({ count: newCount }, null, 2)
          }
        }
      })
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const updatedGist = await response.json();
    const data = JSON.parse(updatedGist.files['likes.json'].content);
    return data;
  } catch (error) {
    console.error('Error updating likes:', error);
    return { count: 0 };
  }
}; 
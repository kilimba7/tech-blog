async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();
    // I'm getting my new content to come through okay but now I can't post it 
    console.log(content);

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
     
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
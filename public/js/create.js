const newFormHandler = async (event) => {
    event.preventDefault();

    const comment_text = document.querySelector('#project-name').value.trim();

    // const url = window.location.toString().split("/");
    const project_id = 1;
    // const project_id = url[url.length - 1];

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_text
                , project_id 
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/create');
        } else {
            alert('Failed to create project');
        }
    }

};

document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
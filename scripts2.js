document.getElementById('addBookBtn').addEventListener('click', addBook);

function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter book author:');
    const description = prompt('Enter book description:');
    
    if (!title || !author || !description) {
        alert('All fields are required!');
        return;
    }
    
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <h2>${title}</h2>
        <p><strong>Author:</strong> ${author}</p>
        <p>${description}</p>
    `;
    
    document.getElementById('bookList').appendChild(bookCard);
}

// Add a sample book on load (optional)
window.onload = function() {
    const sampleBook = {
        title: 'Sample Book',
        author: 'John Doe',
        description: 'This is a sample book description.'
    };
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <h2>${sampleBook.title}</h2>
        <p><strong>Author:</strong> ${sampleBook.author}</p>
        <p>${sampleBook.description}</p>
    `;
    document.getElementById('bookList').appendChild(bookCard);
};

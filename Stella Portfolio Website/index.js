(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// Add submit event listener to form

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  const name = document.querySelector('#myName').value;
  const email = document.querySelector('#myEmail').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#myMessage').value;
  const emailMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

  // Send email using SMTP.js library. I had to google this. 
  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'YOUR_GMAIL_ADDRESS',
    Password: 'YOUR_GMAIL_PASSWORD',
    To: 'nyamongodyphnah4@gmail.com',
    From: 'YOUR_GMAIL_ADDRESS',
    Subject: subject,
    Body: emailMessage,
  }).then((message) => {
    form.reset();
    alert('Your message has been sent successfully!');
  });
});


const button = document.querySelector('.main-btn');

button.addEventListener('click', function() {
  alert("Kindly fill the form on Contact Me section")
});


//fetch request

const baseUrl = 'http://localhost:3000/blog';
const blogsSection = document.querySelector('#blogs');


function fetchNewBlog() {
fetch("http://localhost:3000/blog")
  .then(response => response.json())
  .then(blogs => {
    blogsSection.innerHTML = '';
      
      blogs.forEach(blog => {
    
        const blogContainer = document.createElement('div');
        const img = document.createElement('img');
        const blogTextElement = document.createElement('div');
        const title = document.createElement('h4');
        const content = document.createElement('p');

      blogContainer.className = 'blog';
      img.src = blog.picture;
      img.alt = ''; 
      blogTextElement.className = 'blog-text';
      title.innerHTML = blog.title;
      content.innerHTML = blog.content;

      blogTextElement.appendChild(title);
      blogTextElement.appendChild(content);
      blogContainer.appendChild(img);
      blogContainer.appendChild(blogTextElement);

      blogsSection.appendChild(blogContainer);
    
    });
  })
  .catch(error => {
    console.error('Error fetching blogs:', error);
  })
};
fetchNewBlog()


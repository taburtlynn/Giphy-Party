// Make an application that allows user to search for a GIF. When they submit the form an AJAX request to GIPHY API is made and a single GIF is returned.Append GIF once data is returned. Users can search for unlimited GIFs and keeping appending to the page. Can remove all GIFs by clicking a remove button.

// console.log("Let's get this party started!");

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const submitButton = document.querySelector("#submit");
const removeButton = document.querySelector("#remove");
const ul = document.querySelector("#list");



// event listener after typing term in input, submit form it will attach GIF to ul as image?

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    let term = search.value;

    search.value = "";

    //  async function to handle request to GIPHY, with search term and limit of one result

    // term is also search subject that should be put into input box

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${term}&limit=1&api_key=bWO1xIGIGwElet0eGxGAw5VqIfAf4dgO`);

    addGif(response);
}
);

// function to create and append image from the information provided from get request

function addGif(response) {

    const img = document.createElement("img");

    img.src = response.data.data[0].images.original.url;

    ul.append(img);

};

// event listener to remove all items on page with click of remove button

removeButton.addEventListener("click",function(){

    $("img").remove();
    
});



console.log("Let's get this party started!");
const form = document.getElementById("form");
const textInput = document.getElementById("textInput");
const submitBtn = document.getElementById("submitBtn");
const clearBtn = document.getElementById("clearBtn");
const $gallery = $(".gallery");
let searchValue = "";

function getGif(res) {
    let results = res.data.length;
    console.log(results);
    if (results) {
        let $newCol = $("<div>");
        let $newGif = $("<img>", {
            src: res.data[3].images.original.url,
        });
        $newCol.append($newGif);
        $gallery.append($newCol);
    }
};

form.addEventListener('submit', async function(e){
    e.preventDefault();
    searchValue = textInput.value;
    textInput.value = "";
    console.log(searchValue);
    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchValue,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    getGif(response.data);
});

clearBtn.addEventListener("click", function() {
    $gallery.empty();
});
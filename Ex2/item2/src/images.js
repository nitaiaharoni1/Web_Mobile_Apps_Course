const pictures = ["https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://images.unsplash.com/photo-1516956431828-b10b67f654d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://cdn.vox-cdn.com/thumbor/Or0rhkc1ciDqjrKv73IEXGHtna0=/0x0:666x444/1200x800/filters:focal(273x193:379x299)/cdn.vox-cdn.com/uploads/chorus_image/image/59384673/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg",
    "https://media.istockphoto.com/photos/banana-picture-id636739634?k=6&m=636739634&s=612x612&w=0&h=BQ9Z6DobjFzclh3LN7nKSljrRqycJPCq65CS8rtUHU4="];

getPictures(pictures);

function getPictures(pictures){
    pictures.forEach(async function(imgUrl){
        let gallery = document.getElementById("gallery");
        let div1 = document.createElement("div");
        div1.className = "gallery-item";
        div1.tabindex = "0";

        let img = document.createElement("IMG");
        img.setAttribute("src", imgUrl);
        img.className = "gallery-image";

        div1.appendChild(img);
        gallery.appendChild(div1);
    });
    let loader = document.getElementById("loader");
    loader.style.visibility = "hidden"
}

function addPicture(){
    let image_input = document.getElementById("image_input");
    getPictures([image_input.value]);
    image_input.value = '';
}

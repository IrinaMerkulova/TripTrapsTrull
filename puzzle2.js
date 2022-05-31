var images = document.querySelectorAll('.images--left--container img');
var imagesContainer = document.querySelector('.images--left--container');
var tiles = document.querySelectorAll('.images--right__panel');
var selection = document.querySelector('.active--selection');
var clearBtn = document.getElementById('clear');

for(var i = 0; i < images.length; i++) {
    console.log(images[i])
    images[i].addEventListener('click', function(e) {
        selection.appendChild(this);
    });
}

for(var j = 0; j < tiles.length; j++) {
    tiles[j].addEventListener('click', function(e) {
       this.appendChild(document.querySelector('.active--selection img'));
    });
}

clearBtn.addEventListener('click', function() {
    clearTiles();
});

function clearTiles() {
    var tilesImg = document.querySelectorAll('.images--right__panel img');
    for(var x = 0; x < tilesImg.length; x++){
        imagesContainer.appendChild(tilesImg[x]);
    }
}

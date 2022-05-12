/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

 const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

let currentIndex = 0;


const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    onclick="handleThumbnailClick(event)"
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

const handleThumbnailClick = ev => {

    const elem = ev.currentTarget;
    console.log(elem);

    const bgImage = elem.style.backgroundImage;


    document.querySelector('.featured_image').style.backgroundImage = bgImage;

    currentIndex = Number(elem.getAttribute('data-index'));
}

const previous = () => {
    if (currentIndex > 0){
        currentIndex -= 1;
    } else {
        currentIndex = 7;
    }
    console.log('Show previous image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `
        url('${images[currentIndex]}')
        `;
};

const next = () => {
    if (currentIndex < 7) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    console.log('Show next image', currentIndex);
    console.log(images[currentIndex]);
    document.querySelector('.featured_image').style.backgroundImage = `
        url('${images[currentIndex]}')
        `;
}; 

initScreen();
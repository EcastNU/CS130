const showMatchingRestaurants = ev => {
    const location = document.querySelector('#location').value;
    const cuisine = document.querySelector('#cuisine').value;
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${cuisine}&limit=10`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(restaurants => {
            document.querySelector('.restaurants').innerHTML = '';
            for (const rest of restaurants) {
                console.log(rest.name);
                document.querySelector('.restaurants').innerHTML += `
                <section class="restcard"> 
                    <div>
                        <h2>${rest.name}</h2>
                        <img src="${rest.image_url}" />
                    </div>
                </section>
                    `;
            }
        });
};

document.querySelector('#search').addEventListener('click', showMatchingRestaurants);

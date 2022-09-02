const loadNewsPortal = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const response = await fetch(url)
    const data = response.json()
    return data
}
const displayCatagorisNewsPortal = async () => {
    const displayCatagoris = await loadNewsPortal()

    // console.log(displayCatagoris);
    const catagorisContainer = document.getElementById('catagories-container');
    displayCatagoris.data.news_category.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('md:px-3')
        div.innerHTML = `
        
        <button onclick="dynamicData(${data.category_id})">${data.category_name}</button>
        `
        catagorisContainer.appendChild(div)

    })
}
displayCatagorisNewsPortal()



const dynamicData = (data) => {

    fetch(`https://openapi.programming-hero.com/api/news/category/0${data}`)
        .then(res => res.json())
        .then(result => displayData(result.data))
}


const displayData = (data) => {
    console.log(data);
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('py-5')
        div.innerHTML = `
<div class="card card-side bg-base-100 shadow-xl">
        <img src="${element.image_url}" alt="Movie" class="w-1/3">
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
`;
        cardContainer.appendChild(div)


    })


}
// cardLoades()
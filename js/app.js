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
                    <h2 class="card-title">${element.title}</h2>
                    <p class="py-4">${element.details.slice(0, 300) + '...'} </p>
                    <div class="flex justify-between items-center content-center">
                    <div class="flex gap-3 items-center">
                        <div><img src="${element.author.img}" alt="" class="w-10 h-10 rounded-full">
                        </div>
                        <div>
                            <h1>${element.author.name ? element.author.name : 'N/A'}</h1>
                            <h1>${element.author.published_date}</h1>
                        </div>
                    </div>
                    <div>${element.total_view}</div>
                    <div></div>
                </div>
                </div>
                
            </div>
`;
        cardContainer.appendChild(div)


    })


}
// cardLoades()
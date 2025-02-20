const getData = () =>{
    fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // let id = item.id;
            // let author = item.author;
            // let download_url = item.download_url;
            // let width = item.width;
            // let height = item.height;
            // let url = item.url

            //object destructure
            let {id, author, download_url, width, height, url} = item;

            let card = ` <div class="card" id="${id}" loading="lazy">
            <div class="img-block">
                <img src="${download_url}" alt="photo" />
            </div>
        <div class="text-content">
            <h4>${author}</h4>
            <p>${width}px X ${height}px</p>
            <a href="${url}" target="_blank">download</a>
        </div>
        </div>`;
        root.innerHTML += card;
        });
    })
}

export default getData;
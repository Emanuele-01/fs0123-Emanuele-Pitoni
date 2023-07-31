let btn = document.getElementById('viewMain');
let btn2 = document.getElementById('viewMain2');

btn.addEventListener('click', () => {
let card = async () => {
    try {
        let loadingImg = await fetch ('https://api.pexels.com/v1/search?query=beach', {
            headers: new Headers({
                Authorization: "Qbkgcp1dZSheFcrGTdfjcP1PPPYuAPcPgL7Isq6pfsNwvz335Kf7M2Iq"
            })
        });
        let IMG = await loadingImg.json();
        
        let immagine = IMG.photos;

        console.log(IMG);

                let cards = document.querySelectorAll(".card");
                
                cards.forEach((card, index) => {
                let photo = immagine[index];
                let svgElement = document.querySelector(".card-img-top");
                let imgElement = document.createElement("img");
                imgElement.setAttribute("src", photo.src.landscape);
                imgElement.setAttribute("alt", photo.alt);
                svgElement.replaceWith(imgElement);
                let title = card.querySelector(".card-title");
                title.innerHTML = photo.alt;
                let photographer = card.querySelector(".card-text");
                photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
        })
    } catch (error){
        console.log(error);
    }
    let btnDelete = querySelector('.delete')
}
card()
});

btn2.addEventListener('click', () => {
let card = async () => {
    try {
        let loadingImg = await fetch ('https://api.pexels.com/v1/search?query=city', {
            headers: new Headers({
                Authorization: "Qbkgcp1dZSheFcrGTdfjcP1PPPYuAPcPgL7Isq6pfsNwvz335Kf7M2Iq"
            })
        });
        let IMG = await loadingImg.json();
        
        let immagine = IMG.photos;

        console.log(IMG);

                let cards = document.querySelectorAll(".card");
                cards.forEach((card, index) => {
                let photo = immagine[index];
                let svgElement = document.querySelector(".card-img-top");
                let imgElement = document.createElement("img");
                imgElement.setAttribute("src", photo.src.landscape);
                imgElement.setAttribute("alt", photo.alt);
                svgElement.replaceWith(imgElement);
                let title = card.querySelector(".card-title");
                title.innerHTML = photo.alt;
                let photographer = card.querySelector(".card-text");
                photographer.innerHTML = `This photograph was taken by ${photo.photographer}`;
        })
    } catch (error){
        console.log(error);
    }
    let btnDelete = querySelector('.delete')
}
card()
});
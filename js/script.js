window.addEventListener('DOMContentLoaded', () => {

    function req() {
        // const request = new XMLHttpRequest();
        // request.open('GET', 'http://localhost:3000/people');
        // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        // request.send();
        // request.addEventListener('load', function () {
        //     if (request.readyState === 4 && request.status === 200) {
        //         let data = JSON.parse(request.response)
        //         console.log(data);
        //         createCard(data);
        //
        //     } else {
        //         console.error('все пошло по пизде');
        //     }
        // })
        fetch("http://localhost:3000/people")
            .then(data=>data.json())
            .then(data=>createCard(data))
            .catch(error=>console.error(error))

        this.remove();
    }

   document.querySelector('.show').addEventListener('click', req, {'once': true})

})


function createCard(response){
    response.forEach(item => {
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
                    <img src="${item.photo}" alt="">
                    <div class="name">${item.name} ${item.surname}</div>
                    <div class="sex">
                    <img src="${item.sex === 'male' ? 'icons/mars.png': 'icons/female.png'}" alt="${item.sex === 'male' ? 'male': 'female'}">
                    </div>
                    <div class="age">${item.age}</div>
                    `;
        document.querySelector('.app').appendChild(card);

    })
}

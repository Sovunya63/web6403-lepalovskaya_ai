class Meme {
    constructor(title, link, rating, agreement) {
        this.title = title;
        this.link = link;
        this.rating = rating;
        this.agreement = agreement;
    }

    printInfo() {
        console.log(
            `Название: ${this.title}, ссылка: ${this.link}, оценка: ${this.rating}, подтверждение: ${this.agreement}`
        );
    }
}

const form = document.getElementById('meme-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const link = document.getElementById('link').value;
    const rating = document.getElementById('rating').value;
    const agreement = document.getElementById('agreement').checked;

    const meme = new Meme(title, link, rating, agreement);

    meme.printInfo();
    form.reset();
});
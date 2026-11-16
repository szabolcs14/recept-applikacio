export default class Receipt {
    #image;
    #title;
    #preparation;
    #difficulty;

    constructor(image, title, preparation, difficulty) {

    }

    setImage(image) {
        return this.#image = image;
    }

    setTitle(title) {
        return this.#title = title;
    }

    setPreparation(preparation) {
        return this.#preparation = preparation;
    }

    setDifficulty(difficulty) {
        return this.#difficulty = difficulty;
    }

    getImage() {
        return this.#image;
    }

    getTitle() {
        return this.#title;
    }

    getPreparation() {
        return this.#preparation;
    }

    getDifficulty() {
        return this.#difficulty;
    }
} 
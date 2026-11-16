export default class Receipt {
    #image;
    #title;
    #preparation;
    #difficulty;

    constructor(image, title, preparation, difficulty) {
        this.setImage(image);
        this.setTitle(title);
        this.setPreparation(preparation);
        this.setDifficulty(difficulty);

        this.setImage = this.setImage.bind(this);
        this.setTitle = this.setTitle.bind(this);
        this.setPreparation = this.setPreparation.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);

        this.getImage = this.getImage.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getPreparation = this.getPreparation.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
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
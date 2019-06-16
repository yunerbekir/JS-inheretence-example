class Page {
    constructor(title = '', text = '') {
        if (typeof title === 'string'
            && typeof text === 'string') {
            this.title = title;
            this.text = text;
        }
        else {
            console.log('No page was created, invalid parameters');
        }
    }

    addText(text) {
        this.text += text;
    }

    changeTitle(title) {
        this.title = title;
    }

    deleteText() {
        this.text = '';
    }

    viewPage() {
        var resultText = this.title + '\n' + this.text;
        return resultText;
    }

    searchWord(word) {
        if (typeof word === 'string') {
            return this.text.includes(word);
        }
        console.log('Please provide a proper string')
    }

    containsDiggits() {
        return /\d/.test(this.text);
    }

}





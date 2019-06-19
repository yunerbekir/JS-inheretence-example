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

class SimpleNotepad {
    constructor(numberOfPages) {
        if (typeof numberOfPages === 'number' && numberOfPages > 0) {
            this.numberOfPages = numberOfPages;
            this.notepad = [];
            for (var index = 0; index < numberOfPages; ++index) {
                this.notepad.push(new Page());
            }
        }
        else {
            console.log('Invalid number of pages');
        }
        this.validPageNumber = (pageNumber) => {
            if (pageNumber > this.numberOfPages) {
                console.log('Invalid number of pages');
                return false;
            }
            return true;
        }
    }

    addTitle(title, pageNumber) {
        if (this.validPageNumber(pageNumber)) {
            this.notepad[pageNumber].changeTitle(title);
        }
    }

    addText(text, pageNumber) {
        if (this.validPageNumber(pageNumber)) {
            this.notepad[pageNumber].addText(text);
        }

    }

    rewriteText(text, pageNumber) {
        if (this.validPageNumber(pageNumber)) {
            this.notepad[pageNumber].deleteText();
            this.notepad[pageNumber].addText(text);
        }

    }

    deleteText(pageNumber) {
        if (this.validPageNumber(pageNumber)) {
            this.notepad[pageNumber].deleteText();
        }
    }

    showNotepad() {
        this.notepad.forEach((page) => {
            let pageText = page.viewPage();
            if (pageText != '\n') {
                console.log(pageText);
            }
        })
    }

    searchWord(word, pageNumber) {
        if (this.validPageNumber(pageNumber)) {
            return this.notepad[pageNumber].searchWord(word);
        }

    }

    printAllPagesWithDiggits() {
        this.notepad.forEach((page) => {
            if (page.containsDiggits()) {
                console.log(page.viewPage());
            }
        })
    }

}

class SecuredNotepad extends SimpleNotepad {
    constructor(numberOfPages, password) {
        super(numberOfPages);
        this.password = password;
        this.passwordIsCorrect = (inputPassword) => {
            if (inputPassword === this.password) {
                return true;
            }
            else {
                console.log('Invalid password');
            }
        }
    }
    addTitle(title, pageNumber, password) {
        if (this.passwordIsCorrect(password)) {
            super.addTitle(title, pageNumber);
        }
    }
    addText(text, pageNumber, password) {
        if (this.passwordIsCorrect(password)) {
            super.addText(text, pageNumber);
        }
    }
    rewriteText(text, pageNumber, password) {
        if (this.passwordIsCorrect(password)) {
            super.rewriteText(text, pageNumber);
        }
    }
    deleteText(pageNumber, password) {
        if (this.passwordIsCorrect(password)) {
            super.deleteText(pageNumber);
        }
    }
    showNotepad(password) {
        if (this.passwordIsCorrect(password)) {
            super.showNotepad();
        }
    }
    searchWord(word, pageNumber, password) {
        if (this.passwordIsCorrect(password)) {
            super.searchWord(word, pageNumber);
        }
    }
    printAllPagesWithDiggits(password) {
        if (this.passwordIsCorrect(password)) {
            super.printAllPagesWithDiggits();
        }
    }

}


// var page = new Page('page title', 'page content');
// console.log(page.viewPage());
// console.log();
// page.addText('more page content')
// console.log();
// console.log(page.viewPage());
// console.log();
// console.log(page.searchWord('more'));
// console.log();
// console.log(page.containsDiggits());
// page.deleteText();
// console.log('should be empty ' + page.viewPage());

console.log('-------------------------------------');
var simpleNotepad = new SimpleNotepad(5);
simpleNotepad.addTitle('first page title', 0);
simpleNotepad.showNotepad();
console.log();
simpleNotepad.addText('first page text', 0);
simpleNotepad.showNotepad();
console.log();
simpleNotepad.rewriteText('first page rewriten text',0);
simpleNotepad.showNotepad();
console.log();
console.log(simpleNotepad.SearchWord('rewriten',0));
console.log();
simpleNotepad.addText('123 adw',1);
simpleNotepad.PrintAllPagesWithDiggits();
simpleNotepad.deleteText(0);
console.log('should not contain any body text');
simpleNotepad.showNotepad();
console.log();





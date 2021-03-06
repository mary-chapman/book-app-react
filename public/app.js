class BookItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        }
    }

    regMode() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={() => this.setState({isEditMode: true})}>EDIT</button>
                <button onClick={() => this.props.deleteBook(this.props.index)}>DEL</button>
            </div>
        )
    }
    editMode() {
        return (
            <div>
                <input ref={(input) => this.userInput = input} defaultValue = {this.props.title} />
                <button onClick={() => { this.setState({isEditMode: false}); this.props.saveEditFn(this.userInput.value, this.props.index)} }>SAVE</button>
                <button onClick={() => this.setState({isEditMode: false})}>CANCEL</button>
                </div>
        )
    }
    render() {
        if (this.state.isEditMode) {
            return (
                <div>{this.editMode()}</div>
            )
        } else {
            return (
                <div>{this.regMode()}</div>
            )
        }
    }
}

class BookApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [{title: "Book1Test"}, {title: "Book2Test"}]
        }
        this.addBook = this.addBook.bind(this)
    }
    addBook(userInput) {
        this.setState({ books: [...this.state.books, {title: userInput} ]})
    }
    deleteBook(index) {
        this.setState({
            books: this.state.books.filter((x,i) => i != index) 
        })
    }
    saveEdit(userInput, index) {
        this.state.books[index].title = userInput
        this.forceUpdate()

        console.log(this.state.books[index].title)
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Book List</h1>
                {this.state.books.map((book, index) => {
                    return (
                        <BookItem key={index} 
                                  title={book.title} 
                                  deleteBook={this.deleteBook.bind(this)}
                                  saveEditFn = {this.saveEdit.bind(this)}
                                  index={index}/>
                    )
                })}
                <div>
                    <input ref={userInput => this.userInput = userInput}/>
                    <button onClick={() => this.addBook(this.userInput.value)}>ADD</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <BookApp />, 
    document.getElementById("root") 
)
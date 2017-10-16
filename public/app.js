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
                <button onClick={() => this.props.deleteItemFn(this.props.index)}>DEL</button>
            </div>
        )
    }
    editMode() {
        return (
            <div>
                <input defaultValue = {this.props.title} />
                <button>SAVE</button>
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
    }
    deleteItem(index) {
        console.log("DELETE BOOK" + index)
    }
    render() {
        return (
            <div>
                <h1>Book List</h1>
                {this.state.books.map((book, index) => {
                    return (
                        <BookItem key={index} title={book.title} deleteItemFn={this.deleteItem}  index={index}/>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(
    <BookApp />, 
    document.getElementById("root") 
)
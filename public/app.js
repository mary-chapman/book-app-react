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
                <button>DEL</button>
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
        // return (
        //     <div>
        //         {/* <div>TEST</div> */}
        //         <h1>{this.editMode()}</h1>
        //     </div>
        // )
    }
}

class BookApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [{title: "Book1Test"}, {title: "Book2Test"}]
        }
    }
    render() {
        return (
            <div>
                <h1>Book List</h1>
                {this.state.books.map((book, index) => {
                    return (
                        <BookItem key={index} title={book.title} />
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
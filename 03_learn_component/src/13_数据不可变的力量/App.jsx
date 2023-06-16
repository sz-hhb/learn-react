import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        { name: "你不知道JS", price: 99, count: 1 },
        { name: "JS高级程序设计", price: 199, count: 1 },
        { name: "React高级程序设计", price: 299, count: 2 },
        { name: "Vue高级程序设计", price: 399, count: 1 },
      ],
    };
  }

  addNewBook() {
    const newBook = { name: "Angular高级程序设计", price: 499, count: 2 };
    // this.state.books.push(newBook);
    const books = [...this.state.books];
    books.push(newBook);
    this.setState({
      books,
    });
  }

  addCount(index) {
    const books = [...this.state.books];
    books[index].count++;
    this.setState({ books });
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                name:{item.name}-price:{item.price}-count:{item.count}
                <button onClick={() => this.addCount(index)}>+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;

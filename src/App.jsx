import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Books from './components/Books'
import Form from './components/Form'

// Rasm importlar
import book1 from './img/book1.svg'
import book2 from './img/book2.svg'
import book3 from './img/book3.svg'
import book4 from './img/book4.svg'
import book5 from './img/book5.svg'
import book6 from './img/book6.svg'
import book7 from './img/book7.svg'
import book8 from './img/book8.svg'

// Default books data
const defaultBooks = [
  {
    id: uuidv4(),
    title: "Tafsiri Hilol",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Qur'on tafsiri – musulmonlar uchun muhim manba.",
    img: book1
  },
  {
    id: uuidv4(),
    title: "Ijtimoiy Odoblar",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Yaxshi odoblar haqida foydali kitob.",
    img: book2
  },
  {
    id: uuidv4(),
    title: "Ulamolar Nazdida Vaqtning Qadri",
    author: "Abdulfattoh Abu Gudda",
    description: "Vaqtning qadrini bilish haqida ilmiy asar.",
    img: book3
  },
  {
    id: uuidv4(),
    title: "Oltin Silsila",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    description: "Tariqat peshvolari haqida kitob.",
    img: book4
  },
  {
    id: uuidv4(),
    title: "Ikki Eshik Orasi",
    author: "Abdulla Qodiriy",
    description: "XIX asr o'zbek hayoti haqida roman.",
    img: book5
  },
  {
    id: uuidv4(),
    title: "O'tkan Kunlar",
    author: "Abdulla Qodiriy",
    description: "O'zbek adabiyotining durdonasi.",
    img: book6
  },
  {
    id: uuidv4(),
    title: "Mehribonlik",
    author: "Sodiq Samarqandiy",
    description: "Oila va muomala haqida maslahatlar.",
    img: book7
  },
  {
    id: uuidv4(),
    title: "Hayot Nuri",
    author: "Habib Ahmad",
    description: "Islomiy nasihatlar to'plami.",
    img: book8
  }
];

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const savedBooks = localStorage.getItem('books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
    
      setBooks(defaultBooks);
      localStorage.setItem('books', JSON.stringify(defaultBooks));
    }
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  }, [books]);

  const addBook = (newBook) => {
    const updatedBooks = [...books, { ...newBook, id: uuidv4() }];
    setBooks(updatedBooks);
  };

  return (
    <div>
      <div className="w-[90%] py-5 m-auto">
        <h1 className='font-bold text-3xl'>MY Books ({books.length})</h1>
      </div>
      <div className="w-[90%] py-5 m-auto">
        <button
          onClick={() => setShowForm(true)}
          className='w-30 h-10 rounded cursor-pointer text-xl text-white bg-[#227EDA]'
        >
          Add Book
        </button>
      </div>
      <div className="w-[90%] grid grid-cols-2 gap-5 py-5 m-auto">
        {books.map((book) => (
          <Books
            key={book.id}
            img={book.img}
            name={book.title}
            writer={book.author}
            about={book.description}
          />
        ))}
      </div>

      {showForm && <Form onClose={() => setShowForm(false)} onAdd={addBook} />}
    </div>
  )
}

export default App
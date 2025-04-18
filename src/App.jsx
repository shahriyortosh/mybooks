import React from 'react'
import Books from './components/Books'

// Rasm fayllarni to'g'ridan to'g'ri import qilamiz
import book1 from './img/book1.svg'
import book2 from './img/book2.svg'
import book3 from './img/book3.svg'
import book4 from './img/book4.svg'
import book5 from './img/book5.svg'
import book6 from './img/book6.svg'
import book7 from './img/book7.svg'
import book8 from './img/book8.svg'
import book9 from './img/book9.svg'

const App = () => {
  const books = [
    {
      title: "Tafsiri Hilol",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Qur’on tafsiri – musulmonlar uchun muhim manba.",
      img: book1
    },
    {
      title: "Ijtimoiy Odoblar",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Yaxshi odoblar haqida foydali kitob.",
      img: book2
    },
    {
      title: "Ulamolar Nazdida Vaqtning Qadri",
      author: "Abdulfattoh Abu Gudda",
      description: "Vaqtning qadrini bilish haqida ilmiy asar.",
      img: book3
    },
    {
      title: "Oltin Silsila",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Tariqat peshvolari haqida kitob.",
      img: book4
    },
    {
      title: "Ikki Eshik Orasi",
      author: "Abdulla Qodiriy",
      description: "XIX asr o‘zbek hayoti haqida roman.",
      img: book5
    },
    {
      title: "O‘tkan Kunlar",
      author: "Abdulla Qodiriy",
      description: "O‘zbek adabiyotining durdonasi.",
      img: book6
    },
    {
      title: "Mehribonlik",
      author: "Sodiq Samarqandiy",
      description: "Oila va muomala haqida maslahatlar.",
      img: book7
    },
    {
      title: "Hayot Nuri",
      author: "Habib Ahmad",
      description: "Islomiy nasihatlar to‘plami.",
      img: book8
    }
  ];

  return (
    <div>
      <div className="w-[90%] py-5 m-auto">
        <h1 className='font-bold text-3xl'>MY Books</h1>
      </div>
      <div className="w-[90%] py-5 m-auto">
        <button className='w-30 h-10 rounded cursor-pointer text-xl text-white bg-[#227EDA]'>Add Book</button>
      </div>
      <div className="w-[90%] grid grid-cols-2 gap-5 py-5 m-auto">
        {books.map((book, index) => (
          <Books
            key={index}
            img={book.img}
            name={book.title}
            writer={book.author}
            about={book.description}
          />
        ))}
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

const Form = ({ onClose, onAdd }) => {
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');

    const handleAdd = () => {
        if (name && author && img && desc) {
            onAdd({ title: name, author, description: desc, img });
            onClose();
            setName('');
            setAuthor('');
            setImg('');
            setDesc('');
        } else {
            alert("Iltimos, barcha maydonlarni to'ldiring");
        }
    };

    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center'>
            <div className="w-[400px] bg-white p-5 rounded shadow-xl relative">
                <div className="flex justify-end">
                    <IoIosCloseCircleOutline onClick={onClose} className='text-3xl cursor-pointer' />
                </div>
                <input className='w-full border p-2 rounded mt-2' placeholder='name' value={name} onChange={e => setName(e.target.value)} />
                <input className='w-full border p-2 rounded mt-2' placeholder='author' value={author} onChange={e => setAuthor(e.target.value)} />
                <input className='w-full border p-2 rounded mt-2' placeholder='img url' value={img} onChange={e => setImg(e.target.value)} />
                <input className='w-full border p-2 rounded mt-2' placeholder='description' value={desc} onChange={e => setDesc(e.target.value)} />
                <button onClick={handleAdd} className='w-full mt-4 bg-[#227EDA] text-white p-2 rounded'>Add Book</button>
            </div>
        </div>
    );
};

export default Form;

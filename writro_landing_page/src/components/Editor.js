import React, { useState } from "react";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const Editor = () => {

  const { quill, quillRef } = useQuill(); 
  const [value, setValue] = useState('');
  return (
    <div className="editor">

        <section className='book--Structure--section' >
            <section className='book--structure--pane'>
                Book Structure
            </section>
            <section className='book--structure--pane'>
                First Meet
            </section>
        </section>
        <section>
            <section className="upperText--editor">
                <p className="bookName">My First Love</p>
                <img className="penIcon" src=".\img\penIcon.png" alt="writing_pen" />
            </section>

            <section className="publish--booktitle titleBook">My Chapter Title</section>
             <section className='grey publishLine chapterTitlegrayline'></section>
            <section 
            // className="quillEditor" 
            style={{ width: 700, height: 450 }}>

                <section ref={quillRef}
                style={{
                    borderRadius: "22px",
                    // backgroundColor: "white",
                    paddingBottom: "10px",
                    background: '#F8F8F8',
                    // border: '0.1px solid #000000',
                    
                    
                }}
                ></section>
            </section>
            
        </section>
    </div>
  )
}

export default Editor
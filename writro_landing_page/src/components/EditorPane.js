import React from 'react'

const editorPane = () => {
  return (
    <div className='editor--navbar--icons'>
        {/* <section className='editor--icons cover--icon'> <img className='img-editor-icon'
         src=".\img\cover--icon.png" alt="cover--icon" />
         <p>Cover</p>
         </section> */}
        <section className='editor--icons cover--icon'> <img className='img-editor-icon'            
        src=".\img\cover--icon.png"
        alt="Editor--icon" />
        <p className='editor--icon--text'>Cover</p>
        </section>

        <section className='editor--icons featherblock'> <img 
        className='img-editor-icon'
        src=".\img\feather-icon.png" alt="Editor" />
        <p className='editor--icon--text'>Editor</p>
        </section>

        <section className='editor--icons'> <img 
        className='img-editor-icon '
        src=".\img\info-Icon2.png" alt="Book--info" />
        <p className='editor--icon--text info-icon'>Book Info</p>
        </section>

        <section className='editor--icons'> <img 
        className='img-editor-icon'
        src=".\img\backCover-icon.png" alt="Back--cover" />
        <p className='editor--icon--text back--cover--text'>Back Cover</p>
        </section>

        <section className='editor--icons'> <img 
        className='img-editor-icon'
        src=".\img\publish-icon.png" alt="Publish" />
        <p className='editor--icon--text info-icon'>Publilsh</p>
        </section>
       
       
    </div>
  )
}

export default editorPane
import React from 'react';
import style from './book.module.css'
const Book = ({title,image,author,description,categories}) => {
    return(
        <div className={style.container}>
            <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className={style.image} src={image} alt=""/>
                    <p className={style.author}>{author}</p>
                </div>
            <div className="col-md-9">
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <p className={style.categories}>{categories}</p>
           </div>
        </div>
        </div>
        </div>
    )
}

export default Book;
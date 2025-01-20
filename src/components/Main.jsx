import React from 'react';
import { useState } from 'react';

const categories = [
  "Tecnologia",
  "Moda",
  "Cibo",
  "Viaggi",
  "Sport",
  "Arte",
  "Musica",
  "Cinema",
  "Educazione",
  "Salute"
];

const tags = [
    "Azione",
    "Commedia",
    "Dramma",
    "Fantascienza",
    "Horror",
    "Fantascienza",
  ];


const Main = () => {

  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    tag: [],
    published: false
  })

  const newPost = (e) => {
    let { title, description, image, category, tag, published} = e.target
    setForm({
      ...form,
      [name] : value
    })
  }

 const handlerSumbit = (e) => {
  e.preventDefault()
 }


  return (
    <main>
      <div className="container m-5">
      <form className="form-inline" onSubmit={handlerSumbit}>

        {/* titolo */}
        <input className="form-control mr-sm-2 mb-3" 
          type="text"
          name="title"
          value={form.title}
          placeholder="Titolo" 
          onChange={newPost}
        />

        {/* contenuto */}
        <input className="form-control mr-sm-2 mb-3" 
          type="text"
          name="description"
          value={form.description}
          placeholder="Descrizione dell'articolo" 
          onChange={newPost}
        />

       {/* immagine */}
       <input className="form-control mr-sm-2 mb-3" 
          type="file"
          name="image"
          value={form.image}
          placeholder="url" 
          onChange={newPost}
        />

       {/* categoria */}
       <select className="form-select mb-3">
        <option selected>Scegli la categoria dell'articolo</option>
          {categories.map((e,index) => 
            <option key={index} value={e}>{e}</option>
          )}
       </select>

       {/* tags */}
       <div className="form-check mb-3">
        <h5>Seleziona il genere</h5>
        {tags.map ((tag,index) => 
        <>
        <div key={index}>
         <input 
            className="form-check-input" 
            type="checkbox" 
            name="tags"
            value={tag}
            onChange={newPost}
          />
          <label className="form-check-label" key={`check-${index}`}>
            {tag}
          </label>
        </div>
         </>
        )}
       </div> 

       {/* categoria */}
       <select className="form-select mb-3" >
        <option selected>Scegli se pubblicare o meno il tuo articolo</option>
          <option value="true">Bozze</option>
          <option value="false">Pubblica online</option>
       </select>
      </form>

      <button className="btn btn-outline-success my-2 my-sm-0 m-3" type="submit">INVIA</button>

      <div className="card">
      {form.title && (
          <div className="card-body">
            {form.image && <img src={form.image} alt="article" />}
            <h5 className="card-title">{form.title}</h5>
            <p>{form.description}</p>
            <p><strong>Categoria:</strong> {form.category}</p>
            <p><strong>Tags:</strong> {form.tag.join(", ")}</p>
            <p><strong>Pubblicato:</strong> {form.published ? "Bozze" : "Online"}</p>
          </div>
        )}

      </div>
   </div>
    </main>
  )
}

export default Main
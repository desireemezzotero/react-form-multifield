import React from 'react';
import { useState } from 'react';

const categories = [
  "Frontend",
  "Backend",
  "Fullstack",
  "DevOps",
  "Mobile",
];

const tags = [
    {id:1, name:'HTML'},
    {id:2, name:'CSS'},
    {id:3, name:'JavaScript'},
    {id:3, name:'React'},
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

  const [posts, setPosts] = useState([]);

  const newPost = (e) => {
    /* let { title, description, image, category, tag, published} = e.target.value */
    let value = e.target.value

    if(e.target.name === 'category'){
      value = categories[e.target.value]
    }
    
    if(e.target.type === 'checkbox'){
      value = e.target.checked
    }
    setForm({
      ...form,
      [e.target.name] : value
    })
  }

  
  const handleChangeTags = (e) => {
    let {tags, ...others} = form;
    
    if (tags.includes(e.target.value)){
      tags = tags.filter(tag => tag !== e.target.value)
    }   else {tags = [...tags, e.target.value]}
    
    setForm({
      ...tags,
      others
    })
  }
  
  const handlerSumbit = (e) => {
      e.preventDefault()
      setPosts([
        { id: self.crypto.randomUUID(), ...form },
        ...posts
      ])
  }

  const handleRemovePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <main>
     <div className="container">
        <div className="card p-5 mb-5">
       <form className="form-inline" onSubmit={handlerSumbit}>

       {/* titolo */}
        <input className="form-control mr-sm-2 mb-3" 
          type="text"
          name="title"
          id="title"
          value={form.title}
          placeholder="Titolo" 
          onChange={newPost}
        />

       {/* immagine */}
        <input className="form-control mr-sm-2 mb-3" 
           type="text"
           id="image"
           name="image"
           value={form.image}
           placeholder="url" 
           onChange={newPost}
         />

       {/* contenuto */}
        <textarea className="form-control mr-sm-2 mb-3" 
          type="text"
          name="description"
          value={form.description}
          placeholder="Descrizione dell'articolo" 
          onChange={newPost}>
        </textarea>


       {/* categoria */}
       <select className="form-select mb-3" onChange={newPost} name="category">
        <option selected>Scegli la categoria dell'articolo</option>
          {categories.map((category,index) => 
            <option key={index} value={index}>{category}</option>
          )}
       </select>

       {/* tags */}
        <div className="form-check mb-3">
         <h5>Tags</h5>
          {tags.map (tag => 
              <>
                <div key={`tag${tag.id}`}>
                  <input 
                     className="form-check-input" 
                     type="checkbox" 
                     id= {`tag${tag.id}`}
                     name="tags"
                     value={tag.id}
                     onChange={handleChangeTags}
                  />
                  <label className="form-check-label" htmlFor={`tag${tag.id}`}>
                    {tag.name}
                  </label>
                </div>
              </>
           )}
        </div> 

       {/* published */}
       <div className="form-check mb-3" >
         <input 
           className='form-check-input'
           type="checkbox" 
           id="published"
           name="published"  
           checked={form.published}
           onChange={newPost}
        />
         <label className="form-check-label" htmlFor="published">Pubblicato</label>
       </div>
      </form>
      <button className="btn btn-outline-success my-2 my-sm-0 m-3" type="submit" onClick={handlerSumbit}>INVIA</button>
      </div>
     </div> 


     <div className="container ">
      <div className="card p-4">
        <h2 className="mb-3">Lista Posts</h2>
        {posts.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Immagine</th>
                <th>Titolo</th>
                <th>Descrizione</th>
                <th>Categoria</th>
                <th>Tags</th>
                <th>Disponibile</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td>
                    <img src={post.image} alt={post.title} width="100" />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.category}</td>
                  <td>{post.tag.join(', ')}</td>
                  <td>{post.published ? 'Sì' : 'No'}</td>
                  <td>
                    <button onClick={() => handleRemovePost(post.id)} className="btn btn-danger btn-sm" >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        ) : (
          <h3>Non sono presenti post</h3>
        )}

      </div>
     </div>
    </main>
  )
}

export default Main
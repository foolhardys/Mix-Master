import React from "react"

const NewsLetter = () => {
  return (
    <form className='form' method='POST'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our NewsLetter</h4>
      <div className="form-row">
        <label htmlFor="name" className='form-label'>name</label>
        <input
          type="text"
          id="name"
          className='form-input'
          name='name'
          required />
      </div>
      <div className="form-row">
        <label htmlFor="email" className='form-label'>email</label>
        <input
          type="email"
          id="email"
          className='form-input'
          name='email'
          required />
      </div>
      <button type='submit' className='btn btn-block'>Submit</button>
    </form>
  )
}

export default NewsLetter
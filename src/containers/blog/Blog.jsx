import React from 'react'
import { Article } from '../../components/index'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-header'>
        <h1 className='gradient__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore natus
          optio facere esse distinctio accusantium minus recusandae{' '}
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__GroupA'>
          <Article />
        </div>
        <div className='gpt3__blog-container__GroupB'>
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Blog

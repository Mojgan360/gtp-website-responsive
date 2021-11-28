import React from 'react'

import './blog.css'
import { Article } from '../../components/index'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

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
          <Article
            imgUrl={blog01}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>
        <div className='gpt3__blog-container__GroupB'>
          <Article
            imgUrl={blog02}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={blog03}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={blog04}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
          <Article
            imgUrl={blog05}
            date='Sep 26, 2021'
            text='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          />
        </div>
      </div>
    </div>
  )
}

export default Blog

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sapiente harum facilis cupiditate doloremque qui doloribus eos, quaerat libero sequi rem, asperiores temporibus dicta tempore tenetur culpa, veritatis a. Harum. Lorem ipsum dolor, sit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rem similique sit quia adipisci iure recusandae explicabo iusto quo. Hic quos explicabo obcaecati dignissimos, eaque deleniti veritatis ad asperiores iste illo doloribus vitae est porro.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi totam cum dolores, cumque sint, maiores officia quo harum error, alias consequatur aspernatur reiciendis explicabo voluptat.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Nobis labore, exercitationem corrupti magnam pariatur tempora facere eaque quae fugit vitae natus reiciendis.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'> Ipsam, non. Numquam, dicta enim nesciunt, aliquid sunt, corrupti obcaecati repudiandae sequi minima ipsa voluptas! Porro ratione nulla quos.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>Tenetur sapiente nam minus, ipsam vero natus optio. Sunt perferendis qui tempore.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About

/* eslint-disable no-unused-vars */
import React from 'react'
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-blue-950 mb-2">เกี่ยวกับ ร้านยุทธนา หนังสือเพื่อชีวิต</h1>
      <hr />
      <p className="mt-2 mb-20 text-blue-950 text-2xl">
      ร้าน ยุทธนา หนังสือเพื่อชีวิต เป็นร้านหนังสือที่เน้นจำหน่ายหนังสือเกี่ยวกับการพัฒนาตนเอง, การใช้ชีวิต, และหนังสือที่เป็นประโยชน์ต่อการพัฒนาความรู้และทักษะส่วนบุคคล ร้านนี้อาจมีหนังสือที่ครอบคลุมหลายหมวดหมู่ เช่น การศึกษา, จิตวิทยา, การพัฒนาตนเอง, และอื่นๆ ที่ช่วยเสริมสร้างความรู้และการพัฒนาคุณภาพชีวิต
      </p>
      <div className="flex justify-center">
      <img className='w-1/2' src="https://englishgang.com/wp-content/uploads/2020/07/E-Book-%E0%B8%AD%E0%B8%B5%E0%B8%81%E0%B8%AB%E0%B8%99%E0%B8%B6%E0%B9%88%E0%B8%87%E0%B8%AA%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%81%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C.jpg" alt="" />
      </div>
    </Layout>
  )
}

export default About
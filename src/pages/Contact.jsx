import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';

const Contact = () => {
  const params = useParams();
  return (
    <Layout>
      <div className='text-3xl text-red-500'>สวัสดี : {params.name}</div>
      <h1 className="font-bold text-4xl text-sky-900 mb-2">ติดต่อเรา ร้านหนังสือ</h1>
      <hr />

        <div className="flex justify-center mt-5 space-x-10">
          <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png" alt="" />
          <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1024px-LINE_logo.svg.png" alt="" />
          <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png" alt="" />
        </div>
        <div className="flex mt-10 justify-center">
          <img className='w-1/2' src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K8EvVmdpQZmDVQi8htIhU1odA7kTAtLDeP8JTkOk5MqGgHKeGl.jpg" alt="" />
          </div>
    </Layout>
    
  )
}

export default Contact
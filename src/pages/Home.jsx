import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <h1 className="font-bold text-4xl text-sky-900 mb-2">
        ร้านยุทธนา หนังสือเพื่อชีวิต
      </h1>
      <hr className="mb-2" />

      <section className="container flex flex-col items-center justify-center max-w-screen-xl mx-auto pb-10">
        <h1 className="text-2xl font-medium text-center mt-5 mb-14">
          หนังสือแนะนำ
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img className="w-full h-72 object-cover" src="https://nakscoops.amarinbooks.com/wp-content/uploads/2023/12/1000243428_front_XXL.jpg" alt="" />
            <div className="px-6 py-4">
              <h2 className="font-light ">ใช้คลื่นพลังบวกดึงดูดพลังสุข</h2>
              <h2 className="font-bold text-xl ">200 บาท</h2>
              <button className="bg-blue-500 p-3 w-full text-white rounded-md mt-2">สั่งซื้อ</button>
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img className="w-full h-72 object-cover" src="https://nakscoops.amarinbooks.com/wp-content/uploads/2023/12/1000255590_front_XXL.jpg" alt="" />
            <div className="px-6 py-4">
              <h2 className="font-light ">ชีวิตเรามีแค่สี่พันสัปดาห์</h2>
              <h2 className="font-bold text-xl ">225 บาท</h2>
              <button className="bg-blue-500 p-3 w-full text-white rounded-md mt-2">สั่งซื้อ</button>
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img className="w-full h-72 object-cover" src="https://nakscoops.amarinbooks.com/wp-content/uploads/2023/12/1000264049_front_XXL.webp" alt="" />
            <div className="px-6 py-4">
              <h2 className="font-light ">7 ขั้นตอนสู่ทุกสิ่งที่ปรารถนา</h2>
              <h2 className="font-bold text-xl ">210 บาท</h2>
              <button className="bg-blue-500 p-3 w-full text-white rounded-md mt-2">สั่งซื้อ</button>
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden shadow-md bg-white">
            <img className="w-full h-72 object-cover" src="https://nakscoops.amarinbooks.com/wp-content/uploads/2023/12/1000260900_front_XXL.webp" alt="" />
            <div className="px-6 py-4">
              <h2 className="font-light ">At Your Best เป็นคุณแบบที่ดีที่สุด</h2>
              <h2 className="font-bold text-xl ">230 บาท</h2>
              <button className="bg-blue-500 p-3 w-full text-white rounded-md mt-2">สั่งซื้อ</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

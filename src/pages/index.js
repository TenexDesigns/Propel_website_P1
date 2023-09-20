import React from 'react'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Carosel from '../components/Carosel'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Propel() {
    const images =[
        '/img/sushi3.jpg',
        '/img/eggs.jpg',
        '/img/fruits.jpg',
        '/img/meat.jpg',
        '/img/sushi.jpg',
        '/img/sushi1.jpg',
        '/img/sushi2.jpg',
        '/img/sushi3.jpg',
      ]
  return (
    <main>
        <section>
            <div className=" relative min-w-full h-[100vh] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('/img/sushi.jpg')" }} >
            <div>
            <Navbar/>
                
                </div> 


<div className='mx-12'>
<Hero/>

</div>
            



            </div>
           
        </section>


        <section className=''>
           
           <div className='mt my-12 mx-5 max-w-lg'>
            <h1 className='b flex-wrap font-black text-3xl md:text-4xl 2xl:text-5xl'>Promoting your bussines and Services with Propel:</h1>

<h2 className='text-xl  md:text-2xl 2xl:text-3xl font-extralight text-gray-600'> A resposnive , multipage bussines with everything you need to propel your bussines.</h2>
           </div>


           <div className=' mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 space-y-2 mx-4'>
           <ProductCard imageUrl={'/img/sushi3.jpg'} title={'Sushi and bread'} description={' tuna) is a saltwater fish that belongs to the tribe Thunnini, a subgrouping of the Scombridae (mackerel) family. The Thunnini comprise 15 species across five genera'}/>
           <ProductCard imageUrl={'/img/sushi2.jpg'} title={'Fish and Cream'} description={'The creator of modern sushi is believed to be Hanaya Yohei, who invented nigiri-zushi, a type of sushi most known today, in which seafood is placed on hand-pressed vinegared rice, around 1824'}/>
           <ProductCard imageUrl={'/img/sushi1.jpg'} title={'Tuna and bread'} description={' Tilapia are mainly freshwater fish inhabiting shallow streams, ponds, rivers, and lakes, and less commonly found living in brackish water. '}/>
           <ProductCard imageUrl={'/img/sushi3.jpg'} title={'Sushi and bread'} description={' tuna) is a saltwater fish that belongs to the tribe Thunnini, a subgrouping of the Scombridae (mackerel) family. The Thunnini comprise 15 species across five genera'}/>
           <ProductCard imageUrl={'/img/sushi2.jpg'} title={'Fish and Cream'} description={'The creator of modern sushi is believed to be Hanaya Yohei, who invented nigiri-zushi, a type of sushi most known today, in which seafood is placed on hand-pressed vinegared rice, around 1824'}/>
           <ProductCard imageUrl={'/img/sushi1.jpg'} title={'Tuna and bread'} description={' Tilapia are mainly freshwater fish inhabiting shallow streams, ponds, rivers, and lakes, and less commonly found living in brackish water. '}/>
           

           </div>
        </section>


        <section class="flex flex-col items-center">
            <div className='  mx-10 my-20'>
                <Carosel className="flex-1" images={images}/>

            </div>

            <div className='t text-center mx-9 my-11 p-9'>
                <h1 className='text text-3xl font-black'>What Is a Business?</h1>
                <p className='text-2xl text-gray-500'>The term business refers to an organization or 
                    enterprising entity engaged in commercial, industrial, 
                    or professional activities. The purpose of a business 
                    is to organize some
                     sort of economic production of goods or services. </p>

                <p>
                    <a className='l link text-green-400 hover:text-blue-600 active:text-purple-500'>MORE ABOUT US</a>
                </p>

            </div>
            
        </section>



        <section className=' '>

<div className='space-y-3'>
        <Card2 imageUrl={'/img/sushi3.jpg'}  title={'Homemade Sushi '}  paragraph={'Homemade Sushi is so much cheaper than at the restaurant. Plus, it’s easy and fun to make your own rolls at home, so you can put all your favorite ingredients into your perfect custom roll — here’s how!'}/>
        <Card2 imageUrl={'/img/meat.jpg'}  title={'Homemade Sushi '}  paragraph={'Homemade Sushi is so much cheaper than at the restaurant. Plus, it’s easy and fun to make your own rolls at home, so you can put all your favorite ingredients into your perfect custom roll — here’s how!'}/>
        <Card2 imageUrl={'/img/fruits.jpg'}  title={'Homemade Sushi '}  paragraph={'Homemade Sushi is so much cheaper than at the restaurant. Plus, it’s easy and fun to make your own rolls at home, so you can put all your favorite ingredients into your perfect custom roll — here’s how!'}/>
        </div>
        
        <div className='   text-center m-20'>
            <h1 className='fo font-bold text-2xl'>Want to see the full Propel deal</h1>
            <p className=' text-base text-green-500 hover:text-blue-500'> Find out more</p>
        </div>
        
        </section>





<section>
<div className=' flex flex-col gap-9 my-6 md:flex md:flex-row md:justify-between mx-8'>
    <div>
    <h1 className='text-green-600 text-lg font-medium'>Party on ____</h1>
    <p className='f font-bold text-2xl'>Quas suscipit ad mea.</p>
    <p className='text text-xl text-gray-500'> Pri cu dico labores officiis odio principes complectitur ad sea</p>


    </div>

    <div>

    <button className=' btn active:bg-green-800 hover:bg-green-400  bg-green-500 text-white'>
<span className='f font-bold'>Get Started</span>
</button>
    </div>



    </div>
</section>





        <section>
          <Footer/>
        </section>




    </main>
  )
}

export default Propel
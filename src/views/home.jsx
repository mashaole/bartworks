import React, { useState, useEffect,useRef } from 'react'
import Meta from "../components/meta"
import './home.css'

var headings = ['ARTWORKS', 'CLOTHING', 'ARTIST', 'EXHIBITIONS'];

var i = 0;
var description="B Artworks Gallery Be Artworks and Aspire to Inspire. View Galleries ,Paintings, Artworks, Clothing Designs and Exhibitions."
var title="Home - B Artworks Gallery"
var keywords="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/j9qxwbk3cjtnh7ohcyft.jpg"


function Home() {
  const [route, setRoute] = useState("/artworks")
  const funRef = useRef(null);

   useEffect(() => {
    setInterval(function () {
      const images = [
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1641631083/b%20artworks_2021-12-20_19_11/art/qsoonv9qcwkeawy11ro4.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1641631081/b%20artworks_2021-12-20_19_11/art/epfavozgigmq87ygp2jg.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020431/b%20artworks_2021-12-20_19_11/art/viavexxb8mxuoyvd2yra.jpg")',
        'url("https://res.cloudinary.com/ddjvdcads/image/upload/v1640020441/b%20artworks_2021-12-20_19_11/art/vmpv8yabk910qvzqweeu.jpg")',
      ]
      const section = document.querySelector('.Hero')
      const bg = images[Math.floor(Math.random() * images.length)]
      section.style.backgroundImage = bg
      document.querySelector('.text').innerHTML = headings[i];
      setRoute("/" + headings[i].toLowerCase())
      if (i == (headings.length - 1)) {
        i = 0;
      } else {
        i++;
      }

    }, 7000)
    return () => clearInterval(funRef.current);
  },[])

  return (
    <div className='container'>
      <Meta Description={description} Title={title} Keywords={keywords} Image={image}/>
      <div className='Hero'>
        <a href={route}>
          <h1 className='text'>ARTWORKS</h1>
        </a>
      </div>
    </div>
  )
}

export default Home

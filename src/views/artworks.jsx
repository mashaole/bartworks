import React,{useEffect,useState,useRef} from 'react'
import './artworks.css'
import { CarouselWrapper,next,prev } from "react-pretty-carousel"
import Meta from "../components/meta"

var description="View some of the B Artworks and Aspire to Inspire."
var title="Artworks - B Artworks Gallery"
var keywords="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020429/b%20artworks_2021-12-20_19_11/art/sk5lafxquus7jlghe8dr.jpg"

const artworks = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020429/b%20artworks_2021-12-20_19_11/art/sk5lafxquus7jlghe8dr.jpg',
    title: 'Jonah and the whale'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020439/b%20artworks_2021-12-20_19_11/art/xt8phyq90v9bgxtlfq5f.png',
    title: 'Jonah and the whale'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641582964/b%20artworks_2021-12-20_19_11/art/l1xmw8f6miabuymbviqq.jpg',
    title: 'Jonah and the whale'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020428/b%20artworks_2021-12-20_19_11/art/htlzbr0jgfgcsutwlamz.jpg',
    title: 'Wrestle'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641582956/b%20artworks_2021-12-20_19_11/art/dfd4iaifsp0tpicvpjym.jpg',
    title: 'Wrestle'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020428/b%20artworks_2021-12-20_19_11/art/bjq1ut5qhignr9t0jdk3.jpg',
    title: 'Conquer'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020426/b%20artworks_2021-12-20_19_11/art/hnh1evty6dxutgerogky.jpg',
    title: 'Conquer'
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641586507/b%20artworks_2021-12-20_19_11/art/zllvfcgttnbxtyvupgig.jpg',
    title: 'Mother and Child'
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020424/b%20artworks_2021-12-20_19_11/art/v4n0wwoveucjgsilitke.jpg',
    title: 'Mother and Child'
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641583264/b%20artworks_2021-12-20_19_11/art/kvsjfakxha1xbcxqr3zo.jpg',
    title: 'Untitled'
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641583267/b%20artworks_2021-12-20_19_11/art/v9ebkfq7xupm9hyyickr.png',
    title: 'Untitled'
  },
];

function Artworks ()  {
  const [view, setView] = useState(1);
  const page = useRef();

  const handleResize = () => {
    if (window.innerWidth >= 1200) { setView(3) }
}
 

  useEffect(() => {
    handleResize()
    if (page.current) {
      page.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='container' ref={page}>
     <Meta Description={description} Title={title} Keywords={keywords} Image={image}/>
      <h1 className='textt'>Artworks</h1>
      <br/>
      <div id="arrow-left" className="arrow" onClick={()=>{prev()}}>
      <i className="fas fa-arrow-left"></i>
      </div>
      <CarouselWrapper items={view} mode="gallery" showControls={false}>
        {artworks.map((item, key) => {
          return (
            <a key={item.id}>
              <img loading="eager" src={item.image} alt={"image1"}  />
              <br />
              <div className="caption" >
                {item.title}</div>
              <br />
            </a>)
        })}
      </CarouselWrapper>
      <div id="arrow-right" className="arrow" onClick={()=>{next()} }>
      <i className="fas fa-arrow-right"></i>
      </div>
    </div >
  )
}

export default Artworks
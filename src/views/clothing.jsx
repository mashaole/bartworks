import React from 'react'
import GalleryCard3 from '../components/gallery-card3'
import styles from './clothing.module.css'
import Meta from "../components/meta"

var description="View Some of B Artworks beautiful clothing in the gallery."
var title="Clothing - B Artworks Gallery"
var keywords="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/gallery/tpmeflsfrafye4rrj4di.jpg"

const Clothing = () => {
  return (
    <div className={styles['container']}>
      <Meta Description={description} Title={title} Keywords={keywords} Image={image}/>
      <div className={styles['Gallery']}>
        <h1 className={styles['text']}>Clothing</h1>
        <span className={styles['text1']}>
          <span>
            <span>View Some of B Artworks beautiful clothing designs.</span>
          </span>
          <br></br>
          <span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
        <div className={styles['container1']}>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/gallery/tkyekzmyg0pk6dqkf5s8.jpg"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/gallery/tpmeflsfrafye4rrj4di.jpg"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020422/b%20artworks_2021-12-20_19_11/gallery/ry2qdkupi7s9fuydd27x.jpg"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020422/b%20artworks_2021-12-20_19_11/gallery/spzpcf1mmtv3pbpbstdq.jpg"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020422/b%20artworks_2021-12-20_19_11/gallery/mqdyezahyfblmm5656no.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="https://res.cloudinary.com/ddjvdcads/image/upload/v1641152574/b%20artworks_2021-12-20_19_11/gallery/zgsumsit24vcppih11dj.jpg"
            rootClassName="rootClassName7"
          ></GalleryCard3>
        </div>
      </div>
    </div>
  )
}

export default Clothing

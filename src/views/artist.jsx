import React from 'react'
import Meta from "../components/meta"
import FeatureCard2 from '../components/feature-card2'
import styles from './artist.module.css'

var description="Boitumelo Diseko is the Visual Artist behind B Artworks paintings, designs and artworks"
var title="Artist - B Artworks Gallery"
var keywords="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/Bio/rasjy1utvnorutafoedh.jpg"

const Artist = () => {
  return (
    <div className={styles['container']}>
     <Meta Description={description} Title={title} Keywords={keywords} Image={image}/>
      <h1 className={styles['text']}>Artist</h1>
      <div className={styles['Testimonial']}>
        <img
          alt="image"
          src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/Bio/rasjy1utvnorutafoedh.jpg"
          className={styles['image']}
          loading="lazy"
        />
        <div className={styles['Testimonial1']}>
          <div className={styles['container1']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon']}
            >
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className={styles['text01']}>
            <span>
              Boitumelo Diseko&apos;s artworks are rooted in environmental
              psychology and the Christian faith. Diseko&apos;s work looks at
              how the environment affects us as human beings and how God uses it
              to build our character. Environmental psychology is a
              multidimensional field that focuses on the interplay between
              individuals and their surroundings. It examines the way in which
              the natural environment and our built environments shap us as
              individuals.
            </span>
            <br></br>
            <span></span>
          </span>
          <div className={styles['container2']}>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className={styles['icon2']}
            >
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className={styles['Text04']}>
          <span></span>
          <span>Boitumelo Diseko</span>
          <span></span>
          <span></span>
        </span>
        <span className={styles['Text09']}>Visual Artist</span>
      </div>
      <div className={styles['Features']}>
        <h1 className={styles['text10']}>Media Coverage</h1>
        <div className={styles['container3']}>
          <FeatureCard2
            title="Magazine Coverage"
            description="The South African Artist magazine Issue no. 38 (2018) Startup AFRICA magazine Issue no. 11 (2019)"
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="Radio Interview"
            description="Invited to a Radio interview at ILovemelville (2020)"
            rootClassName="rootClassName3"
          ></FeatureCard2>
        </div>
      </div>
    </div>
  )
}

export default Artist

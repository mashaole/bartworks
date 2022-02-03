import React from 'react'
import Meta from "../components/meta"
import styles from './artist.module.css'

var description="View more informtion about B Artworks Galleries ,Paintings, Artworks, Clothing Designs and Exhibitions."
var title="About Us - B Artworks Gallery"
var keywords="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
var image="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020423/b%20artworks_2021-12-20_19_11/Bio/rasjy1utvnorutafoedh.jpg"

const About = () => {
  return (
    <div className={styles['container']}>
      <Meta Description={description} Title={title} Keywords={keywords} Image={image}/>
      <h1 className={styles['text']}>About Us</h1>
      <div className={styles['Testimonial']}>
        <img
          alt="image"
          src="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/tpquxqzqvj8pejyi367q.png"
          className={styles['about']}
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
            B Artworks is an art business that focuses on telling stories through making Artworks.
We are not here to just sell, We are here to tell stories. 

B Artworks looks at how the environment affects us as human beings and how God uses it to build our character .Environmental psychology is a multidimensional field that focuses on the interplay between individuals and their surroundings. 
Everything that B Artworks does is to inspire people to Be Artworks that God has created them to be. Environmental pyschology is pivotal also in our storytelling through art. As B Artworks we are comitted to providing high quality products and we pay attention to giving great customer service.What differentiates us from other businesses is our ability to truly connect with our customers, and provide the exceptional, compassionate service they deserve.  

We as B Artworks attribute our reputation to the lasting customer relationships we&apos;ve developed throughout the years. We believe that all of our customers deserve the highest level of service and we are committed to providing just that.
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
          <span>B Artworks</span>
          <span></span>
          <span></span>
        </span>
        <span className={styles['Text09']}>Be Artworks and Aspire to Inspire</span>
      </div>
    </div>
  )
}

export default About
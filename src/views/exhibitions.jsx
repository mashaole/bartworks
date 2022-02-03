import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './exhibitions.css'
import { CarouselWrapper } from "react-pretty-carousel"

const artworks = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/nmiwar0ji7vpxiar4xxo.jpg',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/vi5sz3q7kgrwko3vreim.jpg',
    },
    {
        id: 6,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1641596095/b%20artworks_2021-12-20_19_11/exhibit/p4ahjo7kcaewxe9lzhx4.jpg',
        title: 'Conquer'
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020418/b%20artworks_2021-12-20_19_11/exhibit/oorsoxdrgusqbvyenp1f.jpg',
    },
    {
        id: 4,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020418/b%20artworks_2021-12-20_19_11/exhibit/bvthuzxj1s7onireu6ir.jpg',
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/ddjvdcads/image/upload/v1640020419/b%20artworks_2021-12-20_19_11/exhibit/jrgq92z6txakiu05rowy.jpg',
    },
];

function collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

function Exhibitions() {
    const [view, setView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991) { setView(1) }
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <div className='container'>
            <Helmet>
                <title>Exhibitions - B Artworks Gallery</title>
                <meta
                    name="description"
                    content="View some of B Artworks Exhibitions"
                />
                     <meta
      name="keywords"
      content="B Artworks Gallery,B Artworks,Artworks,Art,Visual,Boitumelo Diseko,Nelson,Nelson Makamo,Visual Artist,South African,South African Artist,Galleries,Paintings,Artworks,Design,Clothing,Exhibitions,Contact"
    />
                <meta property="og:title" content="Exhibitions - B Artworks Gallery" />
                <meta property="og:description" content="View some of B Artworks Exhibitions" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/j9qxwbk3cjtnh7ohcyft.jpg"
                />
            </Helmet>
            <h1 className='text'>Exhibitions</h1>
            <div className="collapsible" onClick={collapse}>Group Exhibitions</div>
            <div className="content">
                <ul style={{ listStyleType: 'none' }}>
                    <li><b>2022(Coming Soon)</b></li>
                    <li><b>2021</b></li>
                    <li>Rebirth (2021) hosted at Brulhart Gallery Gena, Switzerland</li>
                    <li>Connectivity (2021) hosted at Johan van Heerden Art Gallery</li>
                    <li>Art & Design Exhibition (2021) hosted at Gauteng Pop Up Gallery</li>
                    <li><b>2020</b></li>
                    <li>Contemporary Arts by African Women (2020) hosted by Gallery Brulhart, Switzerland</li>
                    <li>Together TESE (2020) held at Parkmeadows, Johanesburg</li>
                    <li>Transhumanism (2020) held at The Viewing Room Art Gallery in Pretoria</li>
                    <li>Roaring 20s (2020) hosted by Trent Gallery;</li>
                    <li><b>2019</b></li>
                    <li>Group exhibition hosted by Mini Sandton Auto (10and5) A3E (2019)</li>
                    <li>Collaboration exhibition held at Trent Gallery, Salt (2019);</li>
                    <li>Chui-Ta-Ka-Ma (2019) hosted at Johann van Heerden’s Art Gallery; </li>
                    <li>Rhino Record (2018) hosted by The Afropolitan Gallery; </li>
                    <li>Ontology 1 (2018) presented by Longstreet Art Lovers Gallery, Pretoria;</li>
                    <li>Protagonist: Artists in Response to Sexual Violence (2018) hosted by Studio Facture Gallery, Melville; </li>
                    <li>Phase One (2016) and Phase 2.1 (2017) hosted by the Anton van Wouw House, Pretoria; </li>
                </ul>
            </div>
            <div className="collapsible" onClick={collapse}>Solo Exhibitions</div>
            <div className="content">
                <ul style={{ listStyleType: 'none' }}>
                    <li><b>2019</b></li>
                    <li>Hosea 11:8 How can I abandon you? held at AVA Gallery (2019);</li>
                    <li><b>2018</b></li>
                    <li>Ecclesiastes 3:20 (2018) held at Harrie’s Pancakes;</li>
                    <li>Between the lines (2018) hosted at Community Gallery in Durban; </li>
                    <li>Beneath the surface (2018) hosted by Longstreet Art Lovers, Pretoria.</li>
                    <li><b>2015</b></li>
                    <li>Opening (2015) held at U-Space Gallery in Sunnyside; </li>
                </ul>
            </div>

            <CarouselWrapper items={view} mode="gallery" showControls={false}>
                {artworks.map((item, key) => {
                    return (
                        <a key={item.id} href={item.image}>
                            <img loading="lazy" src={item.image} className="exhibit" alt={"image1"} />
                        </a>)
                })}
            </CarouselWrapper>
        </div>
    )
}

export default Exhibitions
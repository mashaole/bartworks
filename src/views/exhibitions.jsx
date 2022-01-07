import React from 'react'
import { Helmet } from 'react-helmet'
import './exhibitions.css'

function coll() {
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

const Exhibitions = () => {
    return (
        <div className='container'>
            <Helmet>
                <title>Artist - B Artworks</title>
                <meta
                    name="description"
                    content="View some of B Artworks Exhibitions"
                />
                <meta property="og:title" content="Artist - B Artworks" />
                <meta property="og:description" content="Artist - B Artworks" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/ddjvdcads/image/upload/v1640020420/b%20artworks_2021-12-20_19_11/exhibit/j9qxwbk3cjtnh7ohcyft.jpg"
                />
            </Helmet>
            <h1 className='text'>Exhibitions</h1>
            <button class="collapsible" onClick={coll}>Group Exhibitions</button>
            <div class="content">
                <ul style={{ listStyleType: 'none' }}>
                    <li>Rebirth (2021) hosted at Brulhart Gallery Gena, Switzerland</li>
                    <li>Connectivity (2021) hosted at Johan van Heerden Art Gallery</li>
                    <li>Art & Design Exhibition (2021) hosted at Gauteng Pop Up Gallery</li>
                    <li>Contemporary Arts by African Women (2020) hosted by Gallery Brulhart, Switzerland</li>
                    <li>Together TESE (2020) held at Parkmeadows, Johanesburg</li>
                    <li>Transhumanism (2020) held at The Viewing Room Art Gallery in Pretoria</li>
                    <li>Roaring 20s (2020) hosted by Trent Gallery;</li>
                    <li>Group exhibition hosted by Mini Sandton Auto (10and5) A3E (2019)</li>
                    <li>Collaboration exhibition held at Trent Gallery, Salt (2019);</li>

                    <li>Chui-Ta-Ka-Ma (2019) hosted at Johann van Heerden’s Art Gallery; </li>
                    <li>Rhino Record (2018) hosted by The Afropolitan Gallery; </li>
                    <li>Ontology 1 (2018) presented by Longstreet Art Lovers Gallery, Pretoria;</li>
                    <li>Protagonist: Artists in Response to Sexual Violence (2018) hosted by Studio Facture Gallery, Melville; </li>
                    <li>Phase One (2016) and Phase 2.1 (2017) hosted by the Anton van Wouw House, Pretoria; </li>
                </ul>
            </div>
            <button class="collapsible" onClick={coll}>Solo Exhibitions</button>
            <div class="content">
                <ul style={{ listStyleType: 'none' }}>
                    <li>Hosea 11:8 How can I abandon you? held at AVA Gallery (2019);</li>
                    <li>Ecclesiastes 3:20 (2018) held at Harrie’s Pancakes;</li>
                    <li>Between the lines (2018) hosted at Community Gallery in Durban; </li>
                    <li>Beneath the surface (2018) hosted by Longstreet Art Lovers, Pretoria.</li>
                    <li>Opening (2015) held at U-Space Gallery in Sunnyside; </li>
                </ul>
            </div>
        </div>
    )
}

export default Exhibitions
'use client';

import { useState } from "react";
import Image from "next/image";
import "../styles/gallery.css";
import SearchParent from "../ui/SearchParent";

const images = [
  { src: "/image1.jpg", alt: "Image 1" },
  { src: "/image2.jpg", alt: "Image 2" },
  { src: "/image3.jpg", alt: "Image 3" },
  { src: "/image4.jpg", alt: "Image 4" },
  { src: "/image5.jpg", alt: "Image 5" },
  { src: "/image6.jpg", alt: "Image 6" },
  { src: "/image7.jpg", alt: "Image 7" },
  { src: "/image8.jpg", alt: "Image 8" },
  { src: "/image9.jpg", alt: "Image 9" },
  { src: "/image10.jpg", alt: "Image 10" },
  { src: "/image11.jpg", alt: "Image 11" },
  { src: "/image12.jpg", alt: "Image 12" },
  { src: "/image13.jpg", alt: "Image 13" },
];




export default function Gallery() {

  // const [value, setValue] = useState('')

  // const handleClick =(event)=> {

  //   setValue('Hi!')
  // }


  return (
    <>

      {/* <button className="magnify" onClick={handleClick}>Press</button>
      <p className="magnify">Pressed {value}</p> */}



      <div className="gallery">
        
      <div className ="searchBar">

      <SearchParent/>
      
      </div>


        <div className="galleryGrid">

        {images.map((image, index) => (
          <div key={index} className="galleryItem">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="image"
            />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

import React from 'react';
import { Container } from 'react-bootstrap';
import Image from './Image';
import NotFound from './NotFound';


const Gallery = (props) => {

  const photoData = props.photoArray;

  let gallery;
  if (photoData.length > 0){
     gallery = photoData.map( photo =>
        <Image
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} alt={`${photo.title}`} key={`${photo.id}`}
            title={`${photo.title}`}
          />
      );
    }
    else {
      gallery = <NotFound />
    }



  return (
        <main>
          <Container>
          <h4 className='query'>{props.query}</h4>
            <ul className="gallery">
              { gallery }
            </ul>
          </Container>
        </main>
    );
}


export default Gallery;

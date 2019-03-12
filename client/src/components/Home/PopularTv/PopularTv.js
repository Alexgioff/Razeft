import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 4 },
  };

  const series = [];

const PopularTv = ({tvSeries}) => {
    const handleOnDragStart = e => e.preventDefault();
    tvSeries.forEach(tv => {
      if(tv.poster_path != null) {
        series.push(tv);
      }
    })
    return (
        <AliceCarousel mouseDragEnabled  responsive={responsive} buttonsDisabled={true} dotsDisabled={true}>
          {
              series.map((tv, index) => {
                
                  return(
                    <picture onDragStart={handleOnDragStart} key={index}>
                        <source  media="(max-width: 500px)" srcSet={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} />
                        <source media="(max-width: 780px)" srcSet={`https://image.tmdb.org/t/p/w780${tv.poster_path}`}/>
                        <img className="element" src={`https://image.tmdb.org/t/p/original${tv.poster_path}`} alt="Poster" />
                    </picture>
                 )
              })
          }
        </AliceCarousel>
      )
}


export default PopularTv;
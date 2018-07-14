import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIBsRd87rWxNz-j8KdOTJcfF3C4g5iZjigzIUNF7HH08RxuqZ',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'data:image/jpeg;base64,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',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKv1wDXdaCBMH0FsBOFPksF10eWNtLko4FRTB7ygGraNXKT_s9Pw',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
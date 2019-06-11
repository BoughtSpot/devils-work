// $('#vid-en-1').magnificPopup({
//   src: 'https://vimeo.com/40004005',
//   type: 'iframe'
// });

// $('#vid-en-2').magnificPopup({
//   src: 'https://vimeo.com/25037336',
//   type: 'iframe'
// });

// $('#vid-en-3').magnificPopup({
//   src: 'https://vimeo.com/57486433',
//   type: 'iframe'
// });

// $('#vid-fr-1').magnificPopup({
//   src: 'https://vimeo.com/99651914',
//   type: 'iframe'
// });

// $('#vid-fr-2').magnificPopup({
//   src: 'https://vimeo.com/99647025',
//   type: 'iframe'
// });

// $('#vid-fr-3').magnificPopup({
//   src: 'https://vimeo.com/96715060',
//   type: 'iframe'
// });


$('.episode--grid__en').magnificPopup({
  items: [{
      delegate: 'a',
      src: 'https://vimeo.com/40004005',
      type: 'iframe'
    },
    {
      delegate: 'b',
      src: 'https://vimeo.com/25037336',
      type: 'iframe'
    },
    {
      delegate: 'c',
      src: 'https://vimeo.com/57486433',
      type: 'iframe'
    },
//   ]
// });

// $('.episode--grid__fr').magnificPopup({
//   items: [{
//       delegate: 'a',
//       src: 'https://vimeo.com/99651914',
//       type: 'iframe'
//     },
//     {
//       delegate: 'b',
//       src: 'https://vimeo.com/99647025',
//       type: 'iframe'
//     },
//     {
//       delegate: 'c',
//       src: 'https://vimeo.com/96715060',
//       type: 'iframe'
//     }
  ],
  gallery: {
    enabled: true
  },
  type: 'image'
});
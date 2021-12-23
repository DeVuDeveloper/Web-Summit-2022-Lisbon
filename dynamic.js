const featuredSpeakers1 = [
  {
    id: 1,
    name: 'Mugisha Benkler',
    description:
      ' Berlkman Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' Benkler studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  },
  {
    id: 2,
    name: 'Rachid Benkler',
    description:
       'Melvo Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' MElvo studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  }
]

const featuredSpeakers2 = [
  {
    id: 1,
    name: 'Omar Benkler',
    description:
      ' Rahman Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' Rahman studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  },
  {
    id: 2,
    name: 'Muneeb Benkler',
    description:
      ' Ragib Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' Studio studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  }
]

const featuredSpeakers3 = [
  {
    id: 1,
    name: 'tuta Benkler',
    description:
      ' Berlkman Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' Benkler studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  },
  {
    id: 2,
    name: 'Jos Benkler',
    description:
      ' Bofco Professor of Enterpreneurial Legal Studies of Harvard Law School',
    about:
      ' Sakib studies commons-based peer production and published his seminal book. The Wealth of Networks in 2006',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.jpg'
  }
]
const speakers1 = document.querySelector('.columns-row1')

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
   const featuredSpeaker1 = featuredSpeakers1[i]

   speakers1.innerHTML += `
        
      <div  id='${featuredSpeaker1.id}' class='card-wraper col-md-4 col-lg-4 col-xl-4  align-items-center py-3 mb-5'>
       <div class="row ">
         <div class="images col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img class="image1 img-fluid" src="${featuredSpeaker1.img1}" alt="" width=70% height=80%>
             <img class="image2  " src="${featuredSpeaker1.img2}" alt='' width=80% height=150%>
   
         </div>
         <div class="description col-8 col-sm-4 col-md-8 col-lg-8 col-xl-8 no-gutters">
             <h4>${featuredSpeaker1.name}</h4>
             <h5 class='red fst-italic fw-bold'>${featuredSpeaker1.description}
             </h5>
             <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker1.about}</h6>
             <span class='line2'></span>
         </div>
        </div>
         </div>               
   </div>
   `;
}

 const speakers2 = document.querySelector('.columns-row2')

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
   const featuredSpeaker2 = featuredSpeakers2[i]

   speakers2.innerHTML += `
        
      <div  id='${featuredSpeaker2.id}' class='card-wraper col-md-4 col-lg-4 col-xl-4  align-items-center py-3 mb-5'>
       <div class="row ">
         <div class="images col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img class="image1 img-fluid" src="${featuredSpeaker2.img1}" alt="" width=70% height=80%>
             <img class="image2  " src="${featuredSpeaker2.img2}" alt='' width=80% height=150%>
   
         </div>
         <div class="description col-8 col-sm-4 col-md-8 col-lg-8 col-xl-8 no-gutters">
             <h4>${featuredSpeaker2.name}</h4>
             <h5 class='red fst-italic fw-bold'>${featuredSpeaker2.description}
             </h5>
             <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker2.about}</h6>
             <span class='line2'></span>
         </div>
        </div>
         </div>               
   </div>
   `;
}

 const speakers3 = document.querySelector('.columns-row3')

 for (let i = 0; i < featuredSpeakers1.length; i += 1) {
   const featuredSpeaker3 = featuredSpeakers3[i]

   speakers3.innerHTML += `
       
        <div  id='${featuredSpeaker3.id}' class='card-wraper  col-md-4 col-lg-4 col-xl-4 align-items-center py-3 mb-5'>
        <div class="row ">
         <div class="images col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <img class="image1 img-fluid" src="${featuredSpeaker3.img1}" alt="" width=70% height=80%>
            <img class="image2  " src="${featuredSpeaker3.img2}" alt='' width=80% height=150%>
   
        </div>
        <div class="description col-8 col-sm-4 col-md-8 col-lg-8 col-xl-8 no-gutters">
            <h4>${featuredSpeaker3.name}</h4>
            <h5 class='red fst-italic fw-bold'>${featuredSpeaker3.description}
            </h5>
            <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker3.about}</h6>
             <span class='line2'></span>
         </div>
        </div>
        </div>               
  </div>
   `;
 }

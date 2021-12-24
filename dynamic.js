const featuredSpeakers1 = [
  {
    id: 1,
    name: 'Guillaume Pousaz',
    description: ' Founder & CEO at Checkout.com',
    about:
      ' Checkout.com CEO Guillaume believes that financial complexity is a barrier to innovation and is blocking economic prosperity. ',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker1.png'
  },
  {
    id: 2,
    name: 'Stacey Plaskett',
    description: 'Representative at House of Representatives',
    about:
      ' In her role as congresswoman, Stacey represents the United States Virgin Islands.',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker2.jpg'
  }
]

const featuredSpeakers2 = [
  {
    id: 1,
    name: 'Tom Taylor',
    description: ' SVP of Alexa at Amazon',
    about:
      ' Tom oversees the more than 10,000 engineers, scientists and other functions working to bring Alexa.',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker3.jpeg'
  },
  {
    id: 2,
    name: 'Jane Wakely',
    description: ' CMO at Mars, Incorporated',
    about:
      ' Jane is the lead marketing officer at Mars, and the CMO at Mars Pet Nutrition.',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker4.png'
  }
]

const featuredSpeakers3 = [
  {
    id: 1,
    name: 'Brad Smith',
    description: ' President at Microsoft',
    about:
      ' Brad has been at Microsoft since Windows 95 was a project code-named "Chicago".',
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker5.png'
  },
  {
    id: 2,
    name: 'Amy Poehler',
    description: ' CMO at Mars, Incorporated',
    about: " Founder at Amy Poehler's Smart Girls",
    img1: 'img/speaker-background.jpg',
    img2: 'img/speaker6.png'
  }
]

const speakers1 = document.querySelector('.columns-row1')

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
  const featuredSpeaker1 = featuredSpeakers1[i]

  speakers1.innerHTML += `
        
      <div  id='${featuredSpeaker1.id}' class='card-wraper1 col-md-4 col-lg-4 col-xl-4  align-items-center mb-3'>
       <div class="row ">
         <div class="images1  col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
              <img class="image1 img-fluid" src="${featuredSpeaker1.img1}" alt="" width=70% height=80%>
             <img class="image2 " src="${featuredSpeaker1.img2}" alt='' width=80% height=150%>
   
         </div>
         <div class="description1 col-8 col-sm-4 col-md-8 col-lg-8 col-xl-8 no-gutters">
             <h4>${featuredSpeaker1.name}</h4>
             <h5 class='red fst-italic fw-bold'>${featuredSpeaker1.description}
             </h5>
             <h6 class='lato greyer py-1 me-4 fw-bold overflow-wrap'>${featuredSpeaker1.about}</h6>
             <span class='line2'></span>
         </div>
        </div>
         </div>               
   </div>
   `
}

const speakers2 = document.querySelector('.columns-row2')

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
  const featuredSpeaker2 = featuredSpeakers2[i]

  speakers2.innerHTML += `
        
      <div  id='${featuredSpeaker2.id}' class='card-wraper col-md-4 col-lg-4 col-xl-4  align-items-center '>
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
   `
}

const speakers3 = document.querySelector('.columns-row3')

for (let i = 0; i < featuredSpeakers1.length; i += 1) {
  const featuredSpeaker3 = featuredSpeakers3[i]

  speakers3.innerHTML += `
       
        <div  id='${featuredSpeaker3.id}' class='card-wraper  col-md-4 col-lg-4 col-xl-4 align-items-center '>
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
   `
}

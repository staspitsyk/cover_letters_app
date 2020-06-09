import axios from 'axios';

const timelyData = [
  {
    id: 1,
    projectType: ['Marketplace', 'Portal'],
    projectPlatform: ['Web', 'IOS Native'],
    functionality: ['Leaving feedback', 'Order creation', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text '],
    intro: [' I have more than 9 years of experience in designing and developing websites, I can help you with custom design for website and app of VPN service.', 'I can help with the UX design for your web application. I have finished more than 150 projects for the last 9 years.'],
    portfolioExamples: ['Strggl/Plan Like Pro/Health QUEST', 'Block Estates/RSTW/Cryptnext', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text '],
    relevantQuestions: ['Could you share the link to your web application?', 'What are your expectations from automatization?', 'When would you like to start?', 'Some question1', 'Some question2', 'Some question3', 'Some question4', 'Some question5', 'Some question6', 'Some question7']
  },
  {
    id: 2,
    projectType: ['PWA', 'E-Comerce'],
    projectPlatform: ['Android Native', 'Cross-platform'],
    functionality: ['Subscription', 'Admin Dashboard' , 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text '],
    intro: ['We have senior-level QA Engineers in our team who could provide testing for your iOS and Android apps.', '100k User load - we can provide the requried load testing for login and other experience within the site. We have QAs in our team with the average of 9 years of experience.'],
    portfolioExamples: ['Strggl/Plan Like Pro/Health QUEST', 'Block Estates/RSTW/Cryptnext', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text ', 'Some text Some text Some text Some text '],
    relevantQuestions: ['Would you  require branding for this project?', 'What is the product/service that you provide?', 'When would you like to start?', 'Some question1', 'Some question2', 'Some question3', 'Some question4', 'Some question5', 'Some question6', 'Some question7']
  }
]


function loadCompanyApi(data) {
  
  const response = {}; 
  response.data = timelyData.filter(company => company.id === +data.id)[0];

  return response;
  
  // const url = `${process.env.REACT_COMPANY_LOAD_ROUTE}?id=${data.id}`;
  // const token = localStorage.getItem('token');
  // if (!token) {
  //   console.log('No token found');
  //   return;
  // }

  // return axios
  //   .get(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((response) => response);
}

function createLetterApi(data) {
  
  const response = {
    data: {
      letter : `--- Hello ---

      We have experienced QA Engineers who can provide required testing for you.
      
      - Do you have any other requirements except that you have mentioned in the annotation?
      - What are your expectations from testing?
      
      Thanks,
      Ruslan`
    }
  }; 

  return response;
  
  // const url = `${process.env.REACT_CREATE_LETTER_ROUTE}?id=${data.id}`;
  // const token = localStorage.getItem('token');
  // if (!token) {
  //   console.log('No token found');
  //   return;
  // }

  // return axios
  //   .get(url, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((response) => response);
}


export { loadCompanyApi, createLetterApi };




// function registerTeacherApi(teacher) {
//   const url = process.env.REACT_APP_TEACHERS_REG_ROUTE;
//   const token = localStorage.getItem('token');
//   if (!token) {
//     console.log('No token found');
//     return;
//   }

//   return axios
//     .post(url, JSON.stringify(teacher), {
//       headers: { ...options.headers, Authorization: `Bearer ${token}` },
//     })
//     .then((response) => response);
// }
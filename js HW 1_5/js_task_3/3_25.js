// Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308
const forecast = {
    today: {
      low: 28,
      high: 32,
      icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
    },
    tomorrow: {
      low: 27,
      high: 31,
    },
  };
  // Change code below this line
  
  const {
    today: { high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg', },
    tomorrow: {
      high: highTomorrow,
      low: lowTomorrow,
       icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
    },
  } = forecast;
  
  
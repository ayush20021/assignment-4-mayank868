const ratingData = [
  { restaurant: "KFC", rating: 5 },
  { restaurant: "Burger King", rating: 4 },
  { restaurant: "KFC", rating: 3 },
  { restaurant: "Domino", rating: 2 },
  { restaurant: "Subway", rating: 3 },
  { restaurant: "Domino", rating: 1 },
  { restaurant: "Subway", rating: 4 },
  { restaurant: "Pizza Hut", rating: 5 },
];
//Calculate the Average rating for all the restaurants.
let finalResponse = [];
function solutionA(arr) {
  const averageRating = (restaurantName) => {
    let avgRating = arr.filter((index) => {
      if (
        index.restaurant.toLocaleLowerCase() ===
        restaurantName.toLocaleLowerCase()
      ) {
        return index.rating;
      }
    });
    let avg = 0;
    let length = avgRating.length;
    for (let i = 0; i < avgRating.length; i++) {
      avg = avgRating[i].rating + avg;
    }

    let result = avg / length;
    return result;
  };

  let restaurants = [];
  ratingData.forEach((index) => {
    if (!restaurants.includes(index.restaurant)) {
      restaurants.push(index.restaurant);
    }
  });

  const resObj = (restaurantName, restaurantRating) => {
    return {
      restaurant: restaurantName,
      averageRating: restaurantRating,
    };
  };

  for (let i = 0; i < restaurants.length; i++) {
    let avgRating = averageRating(restaurants[i]);
    finalResponse.push(resObj(restaurants[i], avgRating));
  }

  console.log(finalResponse);
}

solutionA(ratingData);

//b. List of all restuarants with average rating greater than 4.

function solutionB(value) {
  const reqList = finalResponse.filter((index) => {
    if (index.averageRating > value) {
      return index.restaurant;
    }
  });
  const resNames = reqList.map((index) => {
    return index.restaurant;
  });
  console.log(resNames);
}

console.log("The restaurant list having rating more than 4:");
//passing 4 as an argument,as we want restaurants which has rating more than 4
solutionB(4);
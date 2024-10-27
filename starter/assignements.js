// FUNCTIONS

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
  }
  
  const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
  const descGermany = describeCountry('Germany', 83, 'Berlin');
  const descFinland = describeCountry('Finland', 6, 'Helsinki');
  
  console.log(descPortugal, descGermany, descFinland);

  // FUNCTION DECLARATIONS VS EXPRESSIONS

  function percentageOfWorld1 (population) {
    return (population / 7900) * 100;
  }

  const percantageOfWorld2 = function (population) {
    return (population / 7900) * 100;
  };

  const percPortugal1 = percentageOfWorld1(10);
  const percChina1 = percentageOfWorld1(1441);
  const percUSA1 = percentageOfWorld1(332);

  console.log(percPortugal1, percChina1, percUSA1);

  // ARROW FUNCTIONS 

  const percentageOfWorld3 = population => (population / 7900) * 100;

  const percPortugal3 = percentageOfWorld3(10);
  const percChina3 = percentageOfWorld3(1441);
  const percUSA3 = percentageOfWorld3(332);

  console.log(percPortugal3, percChina3, percUSA3);
function telephoneCheck(str) {
  let firstRegex = /^\d{3}-\d{3}-\d{4}$/.test(str);
  let secondRegex = /^\(\d{3}\)\d{3}-\d{4}$/.test(str);
  let thirdRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(str);
  let fourthRegex = /^\d{3}\s\d{3}\s\d{4}$/.test(str);
  let fifthRegex = /^\d{10}$/.test(str);
  let sixthRegex = /^1\s\d{3}-\d{3}-\d{4}$/.test(str);
  let seventhRegex = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/.test(str);
  let eighthRegex = /^1\(\d{3}\)\d{3}-\d{4}$/.test(str);
  let ninethRegex = /^1\s\d{3}\s\d{3}\s\d{4}$/.test(str);
  
  
  return (firstRegex || secondRegex || thirdRegex || fourthRegex || fifthRegex || sixthRegex || seventhRegex || eighthRegex || ninethRegex);
}

telephoneCheck("555-555-5555");
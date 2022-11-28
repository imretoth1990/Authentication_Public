export function findUsernames(inputValue, userData, setFindUsername) {
  const userNames = [];
  userData.forEach((res) => {
    userNames.push(res.username);
  });

  if (userNames.includes(inputValue)) {
    setFindUsername("found");
  } else {
    setFindUsername("notFound");
  }
}

export function findEmails(inputValue, userData, setFindEmail) {
  const emailAdresses = [];
  userData.forEach((res) => {
    emailAdresses.push(res.email);
  });

  if (emailAdresses.includes(inputValue)) {
    setFindEmail("found");
  } else {
    setFindEmail("notFound");
  }
}

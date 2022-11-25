// import React, { useState } from "react";
// import { getAllUsers } from "../../client/buttons.client";

export function findUsername(inputValue, userData, setUsername) {
  const userNames = [];
  userData.forEach((res) => {
    userNames.push(res.username);
  });
  console.log(userNames);

  if (userNames.includes(inputValue)) {
    setUsername("found");
  } else {
    setUsername("notFound");
  }
}

export function findEmail(inputValue, userData, setEmail) {
  const emailAdresses = [];
  userData.forEach((res) => {
    emailAdresses.push(res.email);
  });
  console.log(emailAdresses);

  if (emailAdresses.includes(inputValue)) {
    setEmail("found");
  } else {
    setEmail("notFound");
  }
}

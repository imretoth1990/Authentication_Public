// import React, { useState } from "react";
// import { getAllUsers } from "../../client/buttons.client";

export function findUsernames(inputValue, userData, setFindUsername) {
  const userNames = [];
  userData.forEach((res) => {
    userNames.push(res.username);
  });
  console.log(userNames);

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
  console.log(emailAdresses);

  if (emailAdresses.includes(inputValue)) {
    setFindEmail("found");
  } else {
    setFindEmail("notFound");
  }
}

export function matchPasswords(inputValue, password, setMatchingPassword) {
  console.log(inputValue);
  if (inputValue === password) {
    setMatchingPassword("match");
  } else {
    setMatchingPassword("notMatch");
  }
}

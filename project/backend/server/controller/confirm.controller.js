import express from "express"
import { User } from "../database/models"

const confirmController = express.Router()

const { validateConfirmation } = require("../validator/confirm.validator")

confirmController.post("/api/confirm", (req, res) => {
  const { secureCode, username } = req.body

  const { error, value } = validateConfirmation(req.body)

  if (error) {
    console.error(error)
    return res.status(500).send(error.details)
  } else {
    // find user by code and username
    User.find({ "confirm.secureCode": secureCode, username: username }, (err, result) => {
      if (err) {
        console.error(err)
      } else {
        console.log(result)
        if (result.length === 0) {
          res.status(400).send({ message: 'No user found (possibly wrong "code" in URL)' })
        } else {
          console.log(result)
          res.status(200).send({ message: "Registrationn confirmed successfully" })
        }
      }
    })

    // if data found, setConfirmation("confirmed")
    // if data is confirmed, copy user from authEntity and insert into /user/profiledb as user/profile
    // if data is saved, send response message: "Registration confirmed successfully"
    // user should not be able to login until registration is confirmed!
  }
})

export default confirmController

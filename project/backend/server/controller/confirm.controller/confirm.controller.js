import express from "express"
import { User } from "../../database/models"

const confirmController = express.Router()

const { validateConfirmation } = require("../../validator/confirm.validator")

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
        if (result.length === 0) {
          res.status(400).send({ message: "Invalid verification link" })
        } else {
          res.status(200).send({
            message: "Registration confirmed successfully, you'll be redirected to login page...",
          })

          // user should be redirected to login page after 3 seconds

          /* setTimeout(() => {
            res.redirect("/login")
          }, 2000) */
        }
      }
    })

    // add expiration to verification link
    // if user verified account, delete verification link from database

    // if data found, setConfirmation("confirmed")
    // if data is confirmed, copy user from authEntity and insert into /user/profiledb as user/profile
    // if data is saved, send response message: "Registration confirmed successfully"
    // user should not be able to login until registration is confirmed!
  }
})

export default confirmController

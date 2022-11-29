import { useState } from "react"
import { useSearchParams } from "react-router-dom"

import { sendDataToConfirm } from "../../client/confirm.client"

export default function Confirm() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [response, setResponse] = useState("")
  const [renderResponse, setRenderResponse] = useState(false)

  function handleConfirm() {
    const code = searchParams.get("code")
    const username = searchParams.get("user")

    sendDataToConfirm(code, username, setResponse)
    setRenderResponse(true)
  }

  if (renderResponse) {
    return (
      <>
        <div className={response.includes("Invalid") ? "input-red" : "input-green"}>
          <h3>{response || "Waiting for response..."}</h3>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div>
          <h3>Confirm </h3>
          <h3>your registration!</h3>
          <br></br>
        </div>
        <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </>
    )
  }
}

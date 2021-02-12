import React from "react"

const History = (match,location,history) => (
    <div>
        <h1>{JSON.stringify(match)}</h1>
        <h1>{JSON.stringify(location)}</h1>
        <h1>{JSON.stringify(history)}</h1>
    </div>
)
export default History
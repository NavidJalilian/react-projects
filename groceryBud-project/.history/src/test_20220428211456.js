import React from 'react'

export default function Test() {
    const [name, setName] = React.useState(false);
  return (
    <div>
      {  name ? <h1>Hello</h1> : <h1>World</h1>}
    </div>
  )
}

import React from 'react'

import Question from '../../components/Questions/Question'

export default function FilledInfor() {

  const items = [
    "nguyen",
    "khannh"
  ]


  return (
    <>
    <div>FilledInfor</div>
    <Question title="Ai Dep Trai Hon" items={items} />
    </>
  )
}

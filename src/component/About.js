import React from 'react'
import styled from 'styled-components'

import { moodSlice } from '../redux/data'
import { useSelector, useDispatch } from 'react-redux'

const Topstyle = styled.div`
  margin-top: 100px;
`

export const About = (prop)=> {
  const { updateCatMood } = moodSlice.actions
  const dispatch = useDispatch()
  const currentMood = useSelector((state) => state.value)
  console.log(currentMood)
  


  const handleMoodUpdate = (e) => {
    const mood = e.target.dataset.type;
    dispatch(updateCatMood(mood))
  }

  return (
    <>
      <Topstyle>
        {currentMood}
        <button data-type="sad" onClick={handleMoodUpdate}>sad</button>
        <button data-type="shocked" onClick={handleMoodUpdate}>shocked</button>
        <button data-type="happy" onClick={handleMoodUpdate}>happy</button>
        <button data-type="blissful" onClick={handleMoodUpdate}>blissful</button>
      </Topstyle>
    </>
  )
}
import React, { useMemo } from 'react'

 const data=[
    {
        id:1,
        task:"task1",
        status:false
    },
    {
        id:2,
        task:"task1",
        status:false
    },
    {
        id:3,
        task:"task1",
        status:false
    },
]
const task = (delay)=>{
    const start = Date.now()
    while(Date.now() - start < delay){
        continue
    }
}
export const Todo = () => {
    useMemo(()=>{
        task(200)
    })
  return (
    data.map((item)=>{
      return   <h3>{item.name}</h3>
    })
  )
}

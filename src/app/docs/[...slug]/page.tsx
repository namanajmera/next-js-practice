import React from 'react'
const Docs = ({params}: {
    params: {
        slug: string[]
    }
}) => {
    console.log(params.slug);
    if (params.slug?.length === 2) {
        return (
            <div>Docs of fetaure {params.slug[0]} routing and concept {params.slug[1]}</div>
        )
    } else if (params.slug?.length === 1) {
        return (
            <div>Docs of fetaure {params.slug[0]} routing</div>
        )
    }
  return (
    <div>Docs</div>
  )
}

export default Docs;
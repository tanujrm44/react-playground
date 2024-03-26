import React, { useEffect, useRef, useState } from 'react'

export default function UseRefExample2() {
    const [name, setName] = useState('')
    const render = useRef(1)
    const prevName = useRef("")

    useEffect(() => {
        render.current = render.current + 1
        prevName.current = name
    })
    return (
        <form onSubmit={e => preventDefault()}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h3>Renders: {render.current}</h3>
            <p>PrevState: {prevName.current}</p>
        </form>
    )
}

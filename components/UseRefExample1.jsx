import React, { useRef } from 'react'

export default function UseRefExample1() {
    const inputRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        inputRef.current.value = "Hello"
        inputRef.current.style.backgroundColor = "yellow"
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" ref={inputRef} />
                <button type='submit'>Submit</button>
            </form>
            <button type='submit' onClick={() => inputRef.current.focus()}>Focus</button>
        </>
    )
}

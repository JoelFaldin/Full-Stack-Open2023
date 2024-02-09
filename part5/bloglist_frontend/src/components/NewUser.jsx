import { useState } from "react"
import blogService from '../services/blogs'

const newUser = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleAuthor = (event) => {
        setAuthor(event.target.value)
    }

    const handleUrl = (event) => {
        setUrl(event.target.value)
    }

    const handleCreate = async () => {
        try {
            const token = localStorage.getItem('loggedToken')
            await blogService.newBlog(title, author, url, token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Create a new user</h1>
            <form>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        onChange={handleTitle}
                    />
                </div>

                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        id="author"
                        type="text"
                        onChange={handleAuthor}
                    />
                </div>

                <div>
                    <label htmlFor="url">Url:</label>
                    <input
                        id="url"
                        type="text"
                        onChange={handleUrl}
                    />
                </div>
                <button onClick={handleCreate}>
                    Create
                </button>
            </form>
        </>
    )
}

export default newUser
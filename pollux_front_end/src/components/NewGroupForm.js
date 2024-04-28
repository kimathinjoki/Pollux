import { useState } from 'react';

function NewGroupForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        // TODO: Connect to API endpoints inside this function
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default NewGroupForm;
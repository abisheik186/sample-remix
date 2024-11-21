import { Form } from '@remix-run/react'
import styles from './newtask.css?url';
function NewTask () {
    return (
        <Form method = "post" id = "note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type ="text" id ="title" name ="title" required/>
            </p>
            <p>
            <label htmlFor="content">Content</label>
            <textarea id ="content" name ="content" rows='5' required/>
            </p>
            <div className = "form-actions">
                <button>Add Task</button>
            </div>
        </Form>
    );
}
export default NewTask;

export function links(){
    return [{rel:'stylesheet', href: styles }]
}
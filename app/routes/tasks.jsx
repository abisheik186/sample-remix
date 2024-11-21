import NewTask, { links as newTaskLinks } from '../components/newtask';
import { getStoredTasks,storeTasks } from '../.server/tasks.js';
import TaskList, { links as taskListLinks } from '../components/taskList';
import { json,redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
export default function taskspage() {
    const { tasks } = useLoaderData();
    return (
    <main>
        {/* <HydrationDebug /> */}
        <NewTask/>
        <TaskList tasks = {tasks} />
    </main>
    );
}

export async function loader() {
    console.log('Tasks loader called')
    const tasks = await getStoredTasks();
    console.log('loaded tasks',tasks)
    return json({tasks});
}

export async function action({request}) {
    const formData = await request.formData();
    const taskData = Object.fromEntries(formData);
    //add validations here
    if (!taskData.title || taskData.title.trim().length === 0) {
        return json(
            { message: 'Invalid title' },
            { status: 422 }
        );
    }
    const existingTasks = await getStoredTasks();
    taskData.id = new Date().toISOString();
    const updatedTasks = existingTasks.concat(taskData);
    await storeTasks(updatedTasks);
    return redirect('/tasks');
}
export function links(){
return [...newTaskLinks(),...taskListLinks()];
}
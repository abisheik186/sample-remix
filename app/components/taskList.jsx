import styles from './taskList.css?url';

function TaskList({ tasks }) {
  return (
    <ul id="note-list">
      {tasks.map((task, index) => (
        <li key={task.id} className="note">
          <article>
            <header>
              <ul className="note-meta">
                <li>#{index + 1}</li>
                <li>
                  <time dateTime={task.id}>
                    {new Date(task.id).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </li>
              </ul>
              <h2>{task.title}</h2>
            </header>
            <p>{task.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}
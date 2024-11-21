import fs from 'fs/promises';

export async function getStoredTasks() {
  const rawFileContent = await fs.readFile('app/data/tasks.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedTasks = data.tasks ?? [];
  return storedTasks;
}

export function storeTasks(tasks) {
  return fs.writeFile('tasks.json', JSON.stringify({ tasks: tasks || [] }));
}
global.fetch = jest.fn() as jest.Mock;

import {
  getTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from './tasks.service';
import { GetTaskProps, ITaskDTO, ITaskForm } from './tasks.interface';

describe('tasks.service', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  const mockResponse: ITaskDTO = {
    description: 'Task',
    id: 'id',
    status: 'Closed',
    createdAt: new Date().toISOString(),
  };

  test('getTask should fetch data from the API', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const props: GetTaskProps = {
      page: 1,
      size: 5,
      status: 'Closed',
    };
    const result = await getTask(props);

    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('/tasks'), {
      cache: 'no-store',
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  // ...

  test('getTaskById should fetch data for a specific task from the API', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const taskId = '123';
    const result = await getTaskById(taskId);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(`/tasks/${taskId}`)
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  test('createTask should send a POST request with the provided task data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const taskData: ITaskForm = {
      description: 'Updated task',
      status: 'Closed',
    };
    const result = await createTask(taskData);

    expect(fetch).toHaveBeenCalledWith(expect.stringMatching('/tasks'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  test('updateTask should send a PUT request with the updated task data', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const taskId = '123';
    const updatedTaskData: ITaskForm = {
      description: 'Updated task',
      status: 'Closed',
    };
    const result = await updateTask(taskId, updatedTaskData);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(`/tasks/${taskId}`),
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTaskData),
      }
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });

  test('deleteTask should send a DELETE request for a specific task', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const taskId = '123';
    const result = await deleteTask(taskId);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringMatching(`/tasks/${taskId}`),
      {
        method: 'DELETE',
      }
    );
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });
});

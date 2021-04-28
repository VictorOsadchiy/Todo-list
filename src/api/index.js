import { API_ENDPOINT } from 'utils/constant';

const handleResponse = async response => {
  return response.text().then(text => {
    try {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        const error = data || { message: response.statusText };
        return Promise.reject(error);
      }

      return data;
    } catch (e) {
      return Promise.reject(text || 'Something went wrong');
    }
  });
};

const requestHeader = {
  'Content-Type': 'application/json'
};

export const getTodos = async () => {
  const options = {
    method: 'GET',
    headers: requestHeader
  };

  return fetch(`${API_ENDPOINT}/todos`, options).then(handleResponse);
};

export const addTodo = async task => {
  const options = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify({ text: task })
  };

  return fetch(`${API_ENDPOINT}/todos`, options).then(handleResponse);
};

export const getCompletedTodos = async () => {
  const options = {
    method: 'GET',
    headers: requestHeader
  };

  return fetch(`${API_ENDPOINT}/todos/completed`, options).then(handleResponse);
};

export const updatedTodo = async (todoId, updatedText) => {
  const options = {
    method: 'POST',
    headers: requestHeader,
    body: JSON.stringify({ text: updatedText })
  };

  return fetch(`${API_ENDPOINT}/todos/${todoId}`, options).then(handleResponse);
};

export const deleteTodo = async todoId => {
  const options = {
    method: 'DELETE',
    headers: requestHeader
  };

  return fetch(`${API_ENDPOINT}/todos/${todoId}`, options).then(handleResponse);
};

export const markAsCompleteTodo = async todoId => {
  const options = {
    method: 'POST',
    headers: requestHeader
  };

  return fetch(`${API_ENDPOINT}/todos/${todoId}/complete`, options).then(handleResponse);
};

export const markAsIncompleteTodo = async todoId => {
  const options = {
    method: 'POST',
    headers: requestHeader
  };

  return fetch(`${API_ENDPOINT}/todos/${todoId}/incomplete`, options).then(handleResponse);
};

export const deleteAllCompleteTodos = async (todoIds = []) => {
  const promisses = todoIds.map(todoId => deleteTodo(todoId));

  return Promise.all(promisses).then(res => true);
};

export const markAllAsDoneTodos = async (todoIds = []) => {
  const promisses = todoIds.map(todoId => markAsCompleteTodo(todoId));

  return Promise.all(promisses).then(res => true);
};

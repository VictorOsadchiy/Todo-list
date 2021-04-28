import {
  addTodo,
  deleteAllCompleteTodos,
  deleteTodo,
  getTodos,
  markAllAsDoneTodos,
  markAsCompleteTodo,
  markAsIncompleteTodo,
  updatedTodo
} from 'api';
import {
  CREATE_TODO_FAILURE,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_COMPLETED_TODO_FAILURE,
  DELETE_COMPLETED_TODO_REQUEST,
  DELETE_COMPLETED_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  EDIT_TODO_FAILURE,
  EDIT_TODO_REQUEST,
  EDIT_TODO_SUCCESS,
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  MARKS_ALL_AS_COMPLETED_TODOS_FAILURE,
  MARKS_ALL_AS_COMPLETED_TODOS_REQUEST,
  MARKS_ALL_AS_COMPLETED_TODOS_SUCCESS,
  MARK_ITEM_AS_INCOMPLETED_TODO_FAILURE,
  MARK_ITEM_AS_INCOMPLETED_TODO_REQUEST,
  MARK_ITEM_AS_INCOMPLETED_TODO_SUCCESS,
  MARK_ITEM_TODO_FAILURE,
  MARK_ITEM_TODO_REQUEST,
  MARK_ITEM_TODO_SUCCESS
} from 'redux/types';

const getTodosRequest = () => ({
  type: GET_TODOS_REQUEST
});

const getTodosSuccess = todos => ({
  type: GET_TODOS_SUCCESS,
  todos
});

const getTodosFailure = error => ({
  type: GET_TODOS_FAILURE,
  error
});

export const getTodosAction = () => dispatch => {
  dispatch(getTodosRequest());

  getTodos()
    .then(res => dispatch(getTodosSuccess(res)))
    .catch(error => dispatch(getTodosFailure(error)));
};

const createTodoRequest = () => ({
  type: CREATE_TODO_REQUEST
});

const createTodoSuccess = newTodo => ({
  type: CREATE_TODO_SUCCESS,
  newTodo
});

const createTodoFailure = error => ({
  type: CREATE_TODO_FAILURE,
  error
});

export const createTodoAction = (text = '') => dispatch => {
  dispatch(createTodoRequest());

  addTodo(text)
    .then(res => dispatch(createTodoSuccess(res)))
    .catch(error => dispatch(createTodoFailure(error)));
};

const deleteTodoRequest = () => ({
  type: DELETE_TODO_REQUEST
});

const deleteTodoSuccess = deletedTodoId => ({
  type: DELETE_TODO_SUCCESS,
  deletedTodoId
});

const deleteTodoFailure = error => ({
  type: DELETE_TODO_FAILURE,
  error
});

export const deleteTodoAction = id => dispatch => {
  dispatch(deleteTodoRequest());

  deleteTodo(id)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoFailure(error)));
};

const editTodoRequest = () => ({
  type: EDIT_TODO_REQUEST
});

const editTodoSuccess = updatedTodo => ({
  type: EDIT_TODO_SUCCESS,
  updatedTodo
});

const editTodoFailure = error => ({
  type: EDIT_TODO_FAILURE,
  error
});

export const editTodoAction = (id, text) => dispatch => {
  dispatch(editTodoRequest());

  updatedTodo(id, text)
    .then(res => dispatch(editTodoSuccess(res)))
    .catch(error => dispatch(editTodoFailure(error)));
};

const markTodoAsCompleteRequest = () => ({
  type: MARK_ITEM_TODO_REQUEST
});

const markTodoAsCompleteSuccess = updatedTodo => ({
  type: MARK_ITEM_TODO_SUCCESS,
  updatedTodo
});

const markTodoAsCompleteFailure = error => ({
  type: MARK_ITEM_TODO_FAILURE,
  error
});

export const markTodoAsCompleteAction = id => dispatch => {
  dispatch(markTodoAsCompleteRequest());

  markAsCompleteTodo(id)
    .then(res => dispatch(markTodoAsCompleteSuccess(res)))
    .catch(error => dispatch(markTodoAsCompleteFailure(error)));
};

const markTodoAsIncompleteRequest = () => ({
  type: MARK_ITEM_AS_INCOMPLETED_TODO_REQUEST
});

const markTodoAsIncompleteSuccess = updatedTodo => ({
  type: MARK_ITEM_AS_INCOMPLETED_TODO_SUCCESS,
  updatedTodo
});

const markTodoAsIncompleteFailure = error => ({
  type: MARK_ITEM_AS_INCOMPLETED_TODO_FAILURE,
  error
});

export const markTodoAsIncompleteAction = id => dispatch => {
  dispatch(markTodoAsIncompleteRequest());

  markAsIncompleteTodo(id)
    .then(res => dispatch(markTodoAsIncompleteSuccess(res)))
    .catch(error => dispatch(markTodoAsIncompleteFailure(error)));
};

const deleteAllCompletedRequest = () => ({
  type: DELETE_COMPLETED_TODO_REQUEST
});

const deleteAllCompletedSuccess = deletedIds => ({
  type: DELETE_COMPLETED_TODO_SUCCESS,
  deletedIds
});

const deleteAllCompletedFailure = error => ({
  type: DELETE_COMPLETED_TODO_FAILURE,
  error
});

export const deleteAllCompletedAction = (ids = []) => dispatch => {
  dispatch(deleteAllCompletedRequest());

  deleteAllCompleteTodos(ids)
    .then(() => dispatch(deleteAllCompletedSuccess(ids)))
    .catch(error => dispatch(deleteAllCompletedFailure(error)));
};

const markAllAsDoneRequest = () => ({
  type: MARKS_ALL_AS_COMPLETED_TODOS_REQUEST
});

const markAllAsDoneSuccess = () => ({
  type: MARKS_ALL_AS_COMPLETED_TODOS_SUCCESS
});

const markAllAsDoneFailure = error => ({
  type: MARKS_ALL_AS_COMPLETED_TODOS_FAILURE,
  error
});

export const markAllAsDoneAction = (ids = []) => dispatch => {
  dispatch(markAllAsDoneRequest());

  markAllAsDoneTodos(ids)
    .then(() => dispatch(markAllAsDoneSuccess()))
    .catch(error => dispatch(markAllAsDoneFailure(error)));
};

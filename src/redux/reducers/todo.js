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

const initialState = {
  todos: [],
  loading: false,
  error: null,
  actionLoading: false,
  actionError: null
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case CREATE_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case CREATE_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: action?.newTodo?.id ? [action.newTodo, ...state.todos] : state.todos
      };
    case CREATE_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: state.todos.filter(todo => todo.id !== action.deletedTodoId)
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };

    case EDIT_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case EDIT_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: action.updatedTodo?.id
          ? state.todos.map(todo => (todo.id === action.updatedTodo.id ? action.updatedTodo : todo))
          : state.todos
      };
    case EDIT_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    case MARK_ITEM_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case MARK_ITEM_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: action.updatedTodo?.id
          ? state.todos.map(todo => (todo.id === action.updatedTodo.id ? action.updatedTodo : todo))
          : state.todos
      };
    case MARK_ITEM_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    case MARK_ITEM_AS_INCOMPLETED_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case MARK_ITEM_AS_INCOMPLETED_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: action.updatedTodo?.id
          ? state.todos.map(todo => (todo.id === action.updatedTodo.id ? action.updatedTodo : todo))
          : state.todos
      };
    case MARK_ITEM_AS_INCOMPLETED_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    case DELETE_COMPLETED_TODO_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case DELETE_COMPLETED_TODO_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: action.deletedIds?.length
          ? state.todos.filter(todo => !action.deletedIds.some(deletedId => todo.id === deletedId))
          : state.todos
      };
    case DELETE_COMPLETED_TODO_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    case MARKS_ALL_AS_COMPLETED_TODOS_REQUEST:
      return {
        ...state,
        actionLoading: true,
        actionError: null
      };
    case MARKS_ALL_AS_COMPLETED_TODOS_SUCCESS:
      return {
        ...state,
        actionLoading: false,
        todos: state.todos.map(todo => ({ ...todo, completed: true }))
      };
    case MARKS_ALL_AS_COMPLETED_TODOS_FAILURE:
      return {
        ...state,
        actionLoading: false,
        actionError: action.error
      };
    default:
      return state;
  }
};

const initialState = [
  {
    id: 1,
    todo: "Pasear al perro",
    donde: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add new todo") {
    return [...state, action.payload];
  }
  return state;
};

let todo = todoReducer();

const newTodo = {
  id: 2,
  todo: "Hacer la comida",
  donde: false,
};

const addNewTodo = {
  type: "[TODO] add new todo",
  payload: newTodo,
};

todo = todoReducer(todo, addNewTodo);
console.log(todo);

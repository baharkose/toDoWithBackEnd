const initialState = {
  // initial state olarak boş bir array verdik
  todoList: [
    {
      id: new Date().getTime(),
      text: "Learn Redux",
      completed: false,
    },
  ],
};

// ? TYPES
// tipleri belirlerken büyük harf kullandık.
export const ADD = "ADD";
export const DEL = "DEL";
export const CLR = "CLR";
export const TGL = "TGL";

// ? Action Creator Func

export const addTodo = (payload) => ({
  type: ADD, payload,
});
export const clearTodo = () => ({
  type: CLR,
});
export const deleteTodo = (payload) => ({
  type: DEL, payload,
});
export const handleTodo = (payload) => ({
  type: TGL, payload,
});

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      return {
        todoList: [
          // input alanında değişiklik olacağı için payloada ihtiyacımız var
          // initial statei aç ilk olarak ve içerisine obje olarak yeni gelen değerleri ekle.
          ...state.todoList,
          {
            id: new Date().getTime(),
            text: payload,
            completed: false,
          },
        ],
      };

    case CLR:
      return initialState;

    case DEL:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
      case TGL:
        return {
          ...state,
          todoList: state.todoList.map((todo) => 
            todo.id === payload ? {...todo, completed: !todo.completed} : todo
          ),
        };
   

    default:
      break;
  }
};

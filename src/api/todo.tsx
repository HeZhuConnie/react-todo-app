import axios from 'axios';

const TodoApi = {
    createTodo: async (content: String) => {
        await axios.post(`http://localhost:8080/todos`, content);
    }
};

export default TodoApi

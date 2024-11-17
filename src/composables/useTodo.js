import { ref } from 'vue';
import { usePKManager } from '@/composables/usePKManager';

export const useTodo = () => {
    const todoList = ref([]);
    const completeTodoList = ref([]);
    const addTodoActive = ref(false);

    const { incrementPK, getPKValue } = usePKManager();

    const setAddTodoActive = () => {
        addTodoActive.value = !addTodoActive.value;
    };

    const handleUpdateTodoList = (todoValue) => {
        incrementPK();

        const todoItem = {
            id: `todo${getPKValue()}`,
            todoValue,
        };

        todoList.value = [...todoList.value, todoItem];
    };

    const handleTodoComplete = (id, todoValue) => {
        const completeTodoItem = {
            id,
            todoValue,
        };

        completeTodoList.value = [...completeTodoList.value, completeTodoItem];
        _removeTodoItemFromList(id, todoList);
    };

    const _removeTodoItemFromList = (id, list) => {
        list.value = list.value.filter((todo) => todo.id !== id);
    };

    return {
        todoList,
        completeTodoList,
        addTodoActive,
        setAddTodoActive,
        handleUpdateTodoList,
        handleTodoComplete,
    };
};

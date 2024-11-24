import { ref } from 'vue';

export const useActiveStatus = () => {
    const activeStatus = ref(false);
    const useActiveHandler = () => {
        activeStatus.value = !activeStatus.value;
    };

    return {
        activeStatus,
        useActiveHandler,
    };
};

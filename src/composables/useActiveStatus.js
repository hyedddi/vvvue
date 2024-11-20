import { ref } from 'vue';

export const useActiveStatus = () => {
    const activeStatus = ref(false);
    activeStatus.value = !activeStatus.value;
    
    return { activeStatus }
}
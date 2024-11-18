export const activeBtnHandle = () => {
    const activeStatus = ref(false);
    activeStatus.value = !activeStatus.value;

    return {activeStatus}
}
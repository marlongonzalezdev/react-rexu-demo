const getTasks = (state) => {
    return state.tasks.tasksList || [];
};

const getIsLoadingTasks = (state) => {
    return state.tasks.loading;
};

module.exports = {
    getTasks,
    getIsLoadingTasks,
};

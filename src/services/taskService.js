const  getAllTasks =  async () => {
    return new Promise((resolve, reject) => {
        const tasks = [{
            id : 1,
            name: "Tarea 1"
        }, {
            id : 2,
            name: "Tarea 2"
        }];
        setTimeout(()=>{
            resolve(tasks);
        }, 1000);
    });
}

const addaTask = async (taks) => {
    return new Promise((resolve, reject) => {
        resolve(true);
    });
}

module.exports = {
    getAllTasks,
    addaTask,
};
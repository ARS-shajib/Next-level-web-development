const makePromise = () => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched';
        if (data) {
            resolve(data);
        } else {
            reject('failed to fetch data!');
        }
    });
};

const getPromiseData = async () => {
    const data = await makePromise();
    console.log(data);
}

getPromiseData();

//--------Json placeholder------------

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const getTodo = async (): Promise<ITodo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result);
}
getTodoData();
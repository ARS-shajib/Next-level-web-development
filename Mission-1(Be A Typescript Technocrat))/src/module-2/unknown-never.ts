const carSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(' '); //['10', 'kmh^-1']
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
}

carSpeed(10);
carSpeed(`10 kmh^-1`);

function throwError(message: string): never {
    throw new Error(message);
}

throwError('error message is Life is Ruet');
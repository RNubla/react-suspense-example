function wrapPromise<T>(promise: Promise<T>) {
    let status = 'pending'
    let response: T | Error | undefined = undefined

    const suspender = promise.then(
        (res) => {
            status = 'success'
            response = res

        },
        (err) => {
            status = 'error'
            response = err
        },
    )
    const handler = {
        pending: () => {
            throw suspender;
        },
        error: () => {
            throw response;
        },
        default: () => response,
    }

    const read = () => {
        const result = handler[status] ? handler[status]() : handler.default();
        // console.log(result)
        return result;
    }
    return { read }
}

export default wrapPromise
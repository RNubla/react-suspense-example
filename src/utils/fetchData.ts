import wrapPromise from "./wrapPromise"

function fetchData<T>(url: string) {
    let data;
    let promise = fetch(url)
        .then((res) => res.json())
        .then((res) => { data = res as T })
    return {
        read() {
            if (!data) {
                throw promise
            }
            return data as T
        }
    }
}
// function fetchData<T>(url: string) {
//     const promise = fetch(url)
//         .then((res) => res.json())
//         .then((res) => res.data as T)

//     return wrapPromise<T>(promise)
// }

export default fetchData
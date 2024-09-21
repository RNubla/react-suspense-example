
// function fetchData<T>(url: string) {
//     let data;
//     let promise = fetch(url)
//         .then((res) => { res.json() })
//         .then((res) => { data = res as T })
//     return {
//         read() {
//             if (!data) {
//                 throw promise
//             }
//             return data as T
//         }
//     }
// }
// function fetchData<T>(url: string) {
//     // const promise = fetch(url)
//     //     .then((res) => res.json())
//     //     .then((res) => res.data as T)
//     const promise = fetch(url)
//         .then((res) => res.json())
//         .then((res) => res.data)
//         .catch((err) => { throw err })
//     return wrapPromise<T>(promise)
// }
async function fetchData<T>(url: string) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            return data as T;
        }
        // console.log("text", res.text().then(text => Error(text)))
        throw new Error(res.status.toString());
    } catch (err) {
        // console.log({ err })
        throw err;
    }

}

export default fetchData
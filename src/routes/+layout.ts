// set key for the url to use in transition key
export async function load({url}) {
    return {
        key: url,
    }
}
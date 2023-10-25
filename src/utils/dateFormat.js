export default function formatDate(d){

    const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return d.toLocaleString("ru", options)
}
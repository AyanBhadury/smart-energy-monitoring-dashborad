export function disposeChart(fc, id) {
    if (fc.items && fc.items[id]) {
        fc.items[id].dispose()
    }
}

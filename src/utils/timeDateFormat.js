
export function timeFormat(date){
    let timeDate = new Date(date)
    let timeFormat = timeDate.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute: '2-digit'})
    
    return (timeFormat)
}

export function dateFormat(date){
    let timeDate = new Date(date)
    
    let dateFormat = timeDate.toLocaleDateString()
    return (dateFormat)
}
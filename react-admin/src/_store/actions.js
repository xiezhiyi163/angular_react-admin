/*
 * 
 * @actions
 * 
 */

export function setLog_a (data) {
    return (dispatch, getState) => {
        //。。。
        dispatch({ type: 'log', data: data })
    }
}
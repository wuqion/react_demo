import types from './actionTypes'

export const jiaFun=(title)=>{
    return {
        title:title,
        type:types.jia
    }
}
export const changeItem =(id)=>{
    return dispatch=>{
        setTimeout(()=>{
            console.log('dd');
            dispatch({
                id:id,
                type:types.change
            })
        },5000)
        }
}
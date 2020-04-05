import types from './actionTypes'

export const jiaFun=(title)=>{
    return {
        title:title,
        type:types.jia
    }
}
export const changeItem =(id)=>{
    return {
        id:id,
        type:types.change
    }
}
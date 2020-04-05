import types from '../actions/actionTypes'
let myState = [{
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }]
export default (state,action)=> {
    switch (action.type){
      case types.jia :{
        let tmp = [...myState];
        tmp.push({
          "userId": 1,
          "id": tmp.length + 1,
          "title": action.title,
          "completed": false
        })
        myState = tmp;
        return tmp
      }
      case types.change:{
        myState = myState.map((item)=>{
          if(item.id == action.id)
          {
            item.completed = !item.completed;
          } 
          return item;
        })

        console.log('----',myState);
        return myState
      }
      default:return myState
    }
}
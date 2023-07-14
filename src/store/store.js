import {createStore, action, actionOn} from 'easy-peasy'
import food from '../data/food'

const screenModel = {
    food: food,
    addFavorite: action((state,payload)=>{
        console.log('lll',state.food[payload.index1][1][payload.index2].checked)
        state.food[payload.index1][1][payload.index2].checked =  !state.food[payload.index1][1][payload.index2].checked
        
    })
    
}

const storeModel = {
    screenModel
}

export default createStore(storeModel)
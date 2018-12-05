
export const demoReducer = (state = [], action)=>{
    switch (action.type) {
        case 'DEMO_ACTION':
          return [
            ...state,
            {
              id: action.id,
              text: action.text
            }
          ]
        default:
          return state
    }
}
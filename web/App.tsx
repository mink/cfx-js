import {useState} from 'react'
import Widgets, {defaultWidgets} from './context/widgets'
import Widget from './Widget'

const App = () => {
    const [widgets, setWidgets] = useState(defaultWidgets)

    const closeWidget = (name) => {
        // @ts-ignore function provided by cfx
        const resource = GetParentResourceName()

        fetch(`https://${resource}/${name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({message: 'close'})
        }).then(() => {
            setWidgets({...widgets, [name]: {...widgets[name], visible: false, focus: false}})
        })
    }

    return (
        <Widgets.Provider value={{widgets, setWidgets}}>
            {Object.keys(widgets).length == 0 && <p className={"text-center text-white text-bold text-2xl"}>cfx-js</p>}
        </Widgets.Provider>
    )
}

export default App

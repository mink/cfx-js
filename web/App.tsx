import {useState} from 'react'
import Widgets, {defaultWidgets} from './context/widgets'
import Widget from './Widget'

const App = () => {
    const [widgets, setWidgets] = useState(defaultWidgets)
    return (
        <Widgets.Provider value={{widgets, setWidgets}}>
            <p className={"text-center text-white text-bold text-2xl"}>cfx-js</p>
        </Widgets.Provider>
    )
}

export default App

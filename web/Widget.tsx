import {useContext, useEffect} from 'react'
import Widgets from './context/widgets'

const Widget = ({name, children}) => {
    const {widgets, setWidgets} = useContext(Widgets)

    const handleNuiMessage = ({data}) => {
        if (data.message === name) {
            setWidgets({...widgets, [name]: {...widgets[name], visible: data.visible}})
        }
    }

    useEffect(() => {
        window.addEventListener('message', handleNuiMessage)
    }, [])

    return (
        <>{widgets[name] && widgets[name].visible && children}</>
    )
}

export default Widget

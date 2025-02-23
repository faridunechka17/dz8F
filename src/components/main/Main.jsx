import React, { useContext } from 'react'
import { ModalContext } from '../../pages/context/ModalProvider'

const Main = () => {
    const {openModal}= useContext(ModalContext)
    return (
        <div>
            <button onClick={openModal}>open modal</button>
        </div>
    )
}

export default Main
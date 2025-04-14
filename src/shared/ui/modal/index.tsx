import React, { FC, ReactNode } from "react"
import cls from "./modal.module.scss"
import { MdClose } from "react-icons/md"

interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return <>
        <div className={cls.overlay} onClick={handleOverlayClick}>
            <div className={cls.modal}>
                <div className={cls.close}>
                    <button onClick={onClose}>
                        <MdClose size={20} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    </>

}
export default Modal
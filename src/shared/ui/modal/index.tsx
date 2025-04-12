import { FC, ReactNode } from "react"
import cls from "./modal.module.scss"

interface ModalProps {
    isOpen: () => void,
    onClose: () => void,
    children: ReactNode,
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null

    return <>
        <div className={cls.overlay}>
            <div className={cls.modal}>
                <button onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    </>

}
export default Modal
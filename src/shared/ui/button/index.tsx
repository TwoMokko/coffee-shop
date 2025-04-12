import { FC, ReactNode } from "react"
import cls from "./button.module.scss"

interface ButtonProps {
    onClick: () => void,
    children: ReactNode,
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
    return <button className={cls.button} onClick={onClick}>
            {children}
        </button>
}

export default Button
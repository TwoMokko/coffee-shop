import { FC, ReactNode } from "react"
import cls from "./button.module.scss"

interface ButtonProps {
    onClick: () => void,
    className: string,
    children: ReactNode,
}

const Button: FC<ButtonProps> = ({ onClick, className, children }) => {
    return <button className={`${cls.button} ${cls[className]}`} onClick={onClick}>
            {children}
        </button>
}

export default Button
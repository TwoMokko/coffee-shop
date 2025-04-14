import {FC, ReactNode, useEffect, useRef} from "react"
import cls from "./vendingProgress.module.scss"

interface VendingProgressProps {
    progress: number,
    status: string,
    size?: number,
    strokeWidth?: number,
    circleColor?: string,
    progressColor?: string,
}

export const VendingProgress: FC<VendingProgressProps> = ({
    progress,
    status,
    size = 300,
    strokeWidth = 2,
    circleColor = '#F2F2F2',
    progressColor = '#F5D009'
}): ReactNode => {
    const progressRef = useRef<SVGCircleElement>(null)
    const radius = size / 2 - strokeWidth / 2
    const viewBox = `0 0 ${size} ${size}`

    useEffect(() => {
        if (progressRef.current) {
            const radius = size / 2 - strokeWidth / 2
            const circumference = 2 * Math.PI * radius
            const offset = circumference - (progress / 100) * circumference

            progressRef.current.style.strokeDasharray = `${circumference} ${circumference}`
            progressRef.current.style.strokeDashoffset = offset.toString()
        }
    }, [progress, size, strokeWidth])

    return <div className={cls.container} style={{width: size, height: size}}>
        <svg viewBox={viewBox}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={circleColor}
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                ref={progressRef}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={progressColor}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
        </svg>
        <div className={cls.text}>
            <div>{progress}%</div>
            <div>{status}</div>
        </div>
    </div>
}

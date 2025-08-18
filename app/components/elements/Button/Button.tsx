type ButtonProps = {
    children: React.ReactNode,
    variant: string
    onClick?: () => void
}

const Button = ({children, variant, onClick}: ButtonProps) => {
    return (
        <button 
            className={`rounded-lg cursor-pointer ${variant}`}
            onClick={onClick}
            >
                {children}
        </button>
    )
}

export default Button
type InputProps = {
    type: string
    placeholder: string
    name: string
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    value: string
    required?: boolean
}

const Input = ({ type, placeholder, name, onChange, value, required}: InputProps) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            required={required}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-yellow-600"
            />
    )
}

export default Input
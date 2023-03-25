import './TextField.css';

function TextField ({label, placeholder, value, setter}) {

    const Typing = (event) => {
        setter(event.target.value)
    };

    return (
        <div className='text-field'>
            <label>{label}</label>
            <input value={value} onChange={Typing} placeholder={placeholder}/>
        </div>
    );
}

export default TextField;
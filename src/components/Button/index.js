import './Button.css';

const Button = ({children}) => {
    return (
        <button className='create-button'>{children}</button>
    );
};

export default Button;
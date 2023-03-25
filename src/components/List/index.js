import './List.css'

const List = ({label, list, value, setter}) => {
    const Choosing = (event) => {
        setter(event.target.value)
    }

    return (
        <div className='list'>
            <label>{label}</label>
            <select value={value} onChange={Choosing}>
                <option key={''}></option>
                {list.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default List;
import List from '../List';
import TextField from '../TextField';
import Button from '../Button';
import './Form.css';
import { useState } from 'react';

function Form ({title,  newPlayer, list}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [image, setImage] = useState('');
    const [position, setPosition] = useState('');

    const Saving = (event) => {
        event.preventDefault();
        newPlayer({
            name,
            age,
            image,
            position
        })
        setImage('');
        setAge('');
        setName('');
        setPosition('');
    };

    return (
        <section className="form">
            <form onSubmit={Saving}>
                <h1>{title}</h1>
                <TextField
                    label="Nome"
                    placeholder="Insira o nome do jogador"
                    value={name}
                    setter={value => setName(value)}
                />
                <TextField
                    label="Idade"
                    placeholder="Insira a idade do jogador"
                    value={age}
                    setter={value => setAge(value)}
                />
                <TextField
                    label="Imagem"
                    placeholder="Insira o o link para imagem do jogador"
                    value={image}
                    setter={value => setImage(value)}
                />
                <List
                    label="Escolha a posição do jogador"
                    list={list}
                    value={position}
                    setter={value => setPosition(value)}
                />
                <Button>Criar card</Button>
            </form>
        </section>
    );
}

export default Form;
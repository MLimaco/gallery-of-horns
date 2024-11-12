import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function HornerBeast(props) {
    const [favorito, setFavorito] = useState(0);

    const addFavorito = () => {
        setFavorito(favorito + 1)
    };
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} onClick={addFavorito} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary">❤️ Favorito: {favorito}</Button>
                </Card.Body>
            </Card>
        </>
    )
}
export default HornerBeast;
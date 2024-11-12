import HornerBeast from './HornerBeast'
import data from '../data.json'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Gallery() {
    return (
        <>
            <Container>
                <Row xs={2} sm={3} md={4} lg={5}>
                    {
                        data.map(beast => (
                            <HornerBeast key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                            />
                        ))
                    }
                </Row>
            </Container>

        </>
    )
}
export default Gallery;
import HornerBeast from './HornerBeast'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Gallery(props) {
    return (
        <>
            <Container>
                <Row xs={2} sm={3} md={4} lg={5}>
                    {
                        props.allBeasts.map(beast => (
                            <HornerBeast key={beast._id}
                                title={beast.title}
                                imageUrl={beast.image_url}
                                description={beast.description}
                                displayAsModal={props.displayAsModal}
                            />
                        ))
                    }
                </Row>
            </Container>

        </>
    )
}
export default Gallery;
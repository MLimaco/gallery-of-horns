import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SelectedBeast(props) {
    return (
        <Modal 
            bg={"dark"} 
            text={"light"}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={props.show}
            onHide={props.handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.selectedBeast.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.selectedBeast.title}</h4>
                <img src={props.selectedBeast.image_url} alt={props.selectedBeast.title} style={{ width: '100%' }} />
                <p>
                    {props.selectedBeast.description}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default SelectedBeast;
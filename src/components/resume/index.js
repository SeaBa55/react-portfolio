import { Button, Modal } from "react-bootstrap";
import './style.css';

function Resume(props) {

    return (
        <Modal
          {...props}
          size="lg"
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="py-1" closeButton >
                <Modal.Title as="h5" id="modal-title">
                    Résumé
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center" bsPrefix>
                <img className="resume img-fluid" src="images/Sebastian_Arrazola_IT_v4.JPG" alt="Sebastian's Resume"/>
            </Modal.Body>
            <Modal.Footer className="py-1" id="modal-footer">
                <a className="btn modal-form-button" href="images/Sebastian_Arrazola_IT_v3.pdf" download="Sebastian_Arrazola.pdf">
                    <i className="fa fa-download"></i> Download
                </a>
                <Button bsPrefix className="modal-form-button" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}
  
export default Resume;
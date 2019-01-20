import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styles from '../../../../../../css/components/Technical.css';

export default function Others(props) {
  return (
    <div className={`container-fluid`}>
      <Modal isOpen={props.modal} toggle={props.toggle} className={'hello'}>
        <ModalHeader toggle={props.toggle}>Modal title</ModalHeader>
        <ModalBody>Hello there from Others</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <h4> Login With</h4>
            <Button className='mb-2' variant="outline-primary"><BsGoogle></BsGoogle> Login with google </Button>
            <Button variant="outline-secondary"><BsGithub /> Log in with Github</Button>
            <div>
                <h4>Find us on </h4>
                <ListGroup>
                    <ListGroup.Item><BsFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item><BsTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item><BsInstagram /> Instagram </ListGroup.Item>

                </ListGroup>

            </div>
            <QZone></QZone>
        </div>
    );
};

export default RightNav;
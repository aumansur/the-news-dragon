import React from 'react';
import { Button, Card, ModalTitle } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CardInsides from '../../CardInsides/CardInsides';
import { BsArrowLeft } from 'react-icons/bs';

const News = () => {
    const news = useLoaderData();
    const { title, _id, details, image_url, category_id } = news;

    return (
        <div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <BsArrowLeft></BsArrowLeft> All news in this category </Button></Link>
                </Card.Body>
            </Card>
            <CardInsides></CardInsides>
        </div>
    );
};

export default News;
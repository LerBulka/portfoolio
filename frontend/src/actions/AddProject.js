import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function AddProject() {
    const [categories, setCategory] = useState([]);
    const [subcategories, setSubcategory] = useState([]);
    

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`http://localhost:5000/categories`);
            setCategory(response.data);
        };
        getCategory();

        const getSubcategory = async () => {
            const response = await axios.get(`http://localhost:5000/subcategories`);
            setSubcategory(response.data);
        };
        getSubcategory();
        
    }, []);

    const [title, setTitle] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [categoryId, setCategoryId] = React.useState('');
    const [subcategoryId, setSubcategoryId] = React.useState('');
    const [file, setFile] = React.useState('');
    const [image, setImage] = React.useState('');
    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
        setFile(img.data.name);
    };

    const navigate = useNavigate();

    const saveProject = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/projects`, {
                title: title,
                subtitle: subtitle,
                description: description,
                category_id: categoryId,
                subcategory_id: subcategoryId,
                image_name: file,
            });
    
            let formData = new FormData();
            formData.append('file', image.data, image.data.name);
            await fetch('http://localhost:5000/image', {
                method: 'POST',
                body: formData,
            });
    
            navigate('/projecttable');
        } catch (error) {
            console.error('Error saving project:', error);
            navigate('/addproject');
        }
    };

    

    return (
        <Container style={{padding:'100px'}}>
            <Row>
                <Col>
                    <h2>Добавить новый проект</h2>
                    <div style={{maxWidth:'600px'}}>
                    <Form onSubmit={saveProject}>
                        <Form.Group controlId="title">
                            <Form.Label style={{color:"black"}}>Название проекта</Form.Label>
                            <Form.Control type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="subtitle">
                            <Form.Label style={{color:"black"}}>Короткое описание проекта</Form.Label>
                            <Form.Control type="text" name="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label >Категория проекта</Form.Label>
                            <Form.Control as="select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                                <option key={0} value={0}>Select Category{' '}</option>
                                {categories.map(category => (
                                    <option key={category.category_id} value={category.category_id}>{category.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="subcategory">
                            <Form.Label>Подкатегория проекта</Form.Label>
                            <Form.Control as="select" value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} required>
                                    <option key={0} value={0}>Select Subcategory{' '}</option>
                                    {subcategories.map(subcategory => (
                                        <option key={subcategory.subcategory_id} value={subcategory.subcategory_id}>{subcategory.name}</option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                
                        <Form.Group controlId="description">
                            <Form.Label style={{color:"black"}}>Описание проекта</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </Form.Group>
                        {image.preview && <img src={image.preview} width="100" height="100" alt="" />}
                        
                        <Form.Group controlId="image">
                            <Form.Label style={{color:"black"}}>Изображение проекта</Form.Label>
                            <Form.Control type="file" filename={file} onChange={handleFileChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{backgroundColor:'green'}}>Добавить проект</Button>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

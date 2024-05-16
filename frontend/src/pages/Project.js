import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Project() {
    const [project, setProject] = useState('');
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
          try {
              // Запрос на получение данных о проекте
              const projectResponse = await axios.get(`http://localhost:5000/projects/${id}`);
              setProject(projectResponse.data);
              
              // Запрос на получение изображений для проекта
              const imagesResponse = await axios.get(`http://localhost:5000/gallery/${id}`);
              console.log(imagesResponse.data);
              setImages(imagesResponse.data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, [id]);

    const goBack = () => {
        window.history.back(); // Назад через объект window.history
    };

  return (
    <div>
        <Container fluid style={{backgroundColor:"rgba(30, 30, 30, 1)", display:'flex', justifyContent:'center'}}>
        <div class="portfolio-container" style={{width:'1123px', marginTop:'100px', paddingBottom:'100px'}}>
        <div class="line"></div>
        <h1 style={{color:'white', marginBottom:'50px'}}>Проект - {project.title}</h1>
        <Row>
          <Col>
          <img src={`/images/${project.image_name}`} alt={project.title} style={{maxWidth:'550px'}} />
          </Col>
          <Col>
            <h3 style={{color:'white'}}>{project.title}</h3>
            <p class='white-text'>{project.subtitle}</p>
            <p class='white-text'>{project.description}</p>
            <button class="arrow-buttonWhite" onClick={goBack}>НАЗАД</button>
          </Col>
        </Row>
        
        <Row>
          {images.map(image => (
            <Col key={image.image_id}>
              <img src={image.image_url} alt={image.description} style={{ maxWidth: '100%', marginTop: '20px' }} />
            </Col>
          ))}
        </Row>
        </div>
        </Container>
      
    </div>
  )
}

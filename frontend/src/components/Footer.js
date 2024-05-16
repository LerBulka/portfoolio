import React, {Component} from 'react'
import {Container, Nav} from 'react-bootstrap';
import Content from './Content.js';

export default class Footer extends Component {
    render() {
  return (
    <footer>
        <Container fluid style={{
          display:'flex',
          height:'150px',
          alignContent:'center',
          bottom:0,
          padding:'50px 0px 70px 0px',
          color:'grey',
          justifyContent: 'center',
          }}>
          <div class="dark-container">
            <p style={{width:'400px'}}>&copy;2024«Valerija Zerebtsova | Isikliku portfolio veebisait»
Все права защищены.</p><Nav.Link href="/adminlogin">Административная панель</Nav.Link>
          </div>
        </Container>
    </footer>
  )
}
}

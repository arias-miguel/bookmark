import React from 'react';
import { Button, Container, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  Link, Route, Routes } from 'react-router-dom';
import { logoutAsync } from '../../redux/actions/actionLogin';
import { ContDivStyles } from '../formLogin/FormStyles';
import Carrusel from './Carrusel';
import MasValoradas from './MasValoradas';
import MenosValoradas from './MenosValoradas';
import Todas from './Todas';


const NavHome = () => {

    const dispatch = useDispatch()    
    return (
        <ContDivStyles>
        <Navbar collapseOnSelect className='bg-dark'expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853700/bookmarkmovies/logo-blockBuster_1_cirem6.png' alt='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                    
                <Link className='pt-2 me-3' to="/home">Todas</Link>
                <Link className='pt-2 me-3' to="/masvaloradas">Más Valoradas</Link>
                <Link className='pt-2 me-3' to="/menosvaloradas">Menos valoradas</Link>
                <div style={{margin:'5px 10px 3px 0px',width:'200px', color:'black'}}>
                    <InputGroup>
                        <FormControl style={{height:'38px'}}
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text  style={{height:'38px'}} id="basic-addon1" className="bg-warning text-dark" ><img src='https://res.cloudinary.com/dbdrkxooj/image/upload/v1652853701/bookmarkmovies/Property_1_search_o8m1ok.png' alt='logosearh'/></InputGroup.Text>
                    </InputGroup>
                </div>
                    </Nav>
                    <Button className="text-warning" type='button' variant="primary"
                    onClick={()=>dispatch(logoutAsync())}>
                            Cerrar Sesion 
                        </Button>
                    </Navbar.Collapse>
                     
                    </Container>
        
            </Navbar> 
            <Carrusel / >


            <Routes>
          <Route path="/home" element={ <Todas />}/>
          <Route path="/menosvaloradas" element={ <MenosValoradas />}/>
          <Route path="/masvaloradas" element={ <MasValoradas/>}/>
             </Routes>
        </ContDivStyles>
    
    ) 
                
                    
};

export default NavHome;
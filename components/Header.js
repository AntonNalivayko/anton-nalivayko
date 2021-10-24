import React, {useState, useEffect} from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle

  } from 'reactstrap';

const Header = ({ru, setRu}) => {
    const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle2 = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand href="/"><img src='./images/myLogo.png' style={{width: 80}}/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink href="/" className='text-uppercase'>{ru ? 'ГЛАВНАЯ'  : 'HOME'}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#feature" className='text-uppercase'>{ru ? 'СТЭК' : 'Stack'}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#scills" className='text-uppercase'>{ru ? 'СКИЛ' : 'Scills'}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#experience" className='text-uppercase'>{ru ? 'ОПЫТ' :'Experience'}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects" className='text-uppercase'>{ru ? 'ПРОЕКТЫ' : 'Projects'}</NavLink>
              </NavItem>
           
              <NavItem>
                <NavLink href="#contacts" className='text-uppercase'>{ru ? 'контакты' : 'contacts'}</NavLink>
              </NavItem>
            <NavItem>
              <Dropdown isOpen={dropdownOpen} toggle={toggle2} style={{marginTop: '-0.5rem' }} id="dropdown-Nav" >
      <DropdownToggle caret className='bg- rounded-1 shadow-sm'  >
        {ru ? 'RU' : 'EN'}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{ru ? 'Выберите язык' : 'Choose language'}</DropdownItem>
        <DropdownItem onClick={()=> setRu(false)}>English</DropdownItem>
        <DropdownItem onClick={()=> setRu(true)}>Русский</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </NavItem>
   
            </Nav>
          </Collapse>
          {/* <Dropdown isOpen={dropdownOpen} toggle={toggle2} className='d-none d-md-block'>
      <DropdownToggle caret>
        {ru ? 'RU' : 'EN'}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{ru ? 'Выберите язык' : 'Choose language'}</DropdownItem>
        <DropdownItem onClick={()=> setRu(false)}>English</DropdownItem>
        <DropdownItem onClick={()=> setRu(true)}>Русский</DropdownItem>
      </DropdownMenu>
    </Dropdown> */}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header

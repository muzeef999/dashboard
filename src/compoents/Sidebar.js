import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { IoMdLock } from 'react-icons/io';
import { GrUpgrade } from 'react-icons/gr';
import { IoMdClose } from 'react-icons/io';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <div>
        <div className='d-flex justify-content-center align-items-center pt-1'> 
          <button className="cancel-button d-flex justify-content-center align-items-center" onClick={() => toggleSidebar(false)}>
        <IoMdClose />
      </button>
      <Navbar.Brand href="/" className="sidebar-brand d-flex justify-content-center align-items-center text-center p-2">
        <b><strong>HORIZON</strong></b> FREE
      </Navbar.Brand>
      </div>

      <hr />
      <Nav className="navbar-nav">
        <Nav.Item>
          <Nav.Link href="#home"><FaHome /> &nbsp; Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#features"><FaShoppingCart /> &nbsp; NFT Marketplace</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#pricing"><BiSolidBarChartAlt2 /> &nbsp; Tables</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#kanban"><MdDashboard /> &nbsp; Kanban</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#signin"><IoMdLock /> &nbsp; Sign In</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
      <div className="sidebar-card">
        <div className="icon-container">
          <GrUpgrade size={30} color='#FFF' />
        </div>
        <div className="card-content">
          <h3>Upgrade to PRO</h3>
          <p style={{ textAlign: 'center' }}>to get access to all features! Connect with Venus World!</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
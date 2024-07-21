import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { IoIosNotificationsOutline, IoMdMenu } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { FaSearch } from "react-icons/fa"; // Import search icon
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsThreeDots } from "react-icons/bs";
import charts from './Charts';
import "../main.css"

const { Chart1, Chart2, PieChart3, TableData, TableDatadesign, Gradientgraph, ListData, Calendar } = charts;

function MainContent({ theme, toggleTheme, toggleSidebar }) {
  return (
    <Container fluid>
      <br/>
      <Row>
        <Col>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center'>
      {/* Container for the toggle button and text */}
      <div className='d-flex w-100 justify-content-between align-items-center'>
        {/* Toggle button for mobile view */}
        <div className='d-md-none me-3'>
          <Button onClick={toggleSidebar}>
            <IoMdMenu />
          </Button>
        </div>

        {/* Main content and heading */}
        <div className='flex-grow-1 d-flex justify-content-center justify-content-md-start'>
          <p className='pt-1 mb-0'>
            pages/Dashboard
            <h3><b>Main Dashboard</b></h3>
          </p>
        </div>
      </div>
     <br/>
      {/* Search and action icons */}
      <div className='d-flex flex-wrap align-items-center'>
        <div className='searchbackground d-flex align-items-center' style={{ padding: '10px', borderRadius: '50px' }}>
          <div className="input-container me-2">
            <FaSearch className="input-icon" />
            <input
              type='text'
              placeholder='&nbsp;&nbsp;    search'
              className="input-with-icon"
              style={{ padding: '5px' }}
            />
          </div>
          <IoIosNotificationsOutline size={40} className='searchicon me-2' />
          <span onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonSharp size={40} className='searchicon' /> : <IoSunny size={40} className='searchicon' />}
          </span>
          <CiCircleInfo size={40} className='searchicon me-2' />
          <CgProfile size={40} className='searchicon' />
        </div>
      </div>
    </div>
    <br/>


          <div className='grid_card'>
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>This month</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <br/>
              <center>
              <Chart1 />
              </center>
              </div>

              
            <div className='grid_item'>
              <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>Weekly Revenue</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <br/>
              <center>
              <Chart2 />
              </center>
              </div>

            <div className='grid_item'>
            <div className='d-flex justify-content-between align-items-center p-2'>
                <div><b>Check Table</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <br/>
              <center>
              <TableData/>
              </center>
              </div>

               

            <div className='grid_item'>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Daily Traffic</b></div>
                <div style={{cursor:'pointer', color:'green'}}><b>+2.45%</b></div>
              </div>
              <center>
              <Gradientgraph/>
              </center>
              </div>
            <div className='grid_item'> 
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Your Pie Chart</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <center>
              <PieChart3 />
              </center>
              </div>
            <div className='grid_item'>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Complex Table</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <br/>
              <center> <TableDatadesign/></center>  
              
              </div>

            <div className='grid_item'>
            <div className='d-flex justify-content-between align-items-center p-1'>
                <div><b>Tasks</b></div>
                <div style={{cursor:'pointer'}}><BsThreeDots /></div>
              </div>
              <br/>
              <center>
              <ListData /> 
              </center>
              </div>
            
            <div className='grid_item'><Calendar/></div>
            <div className='grid_item'>3</div>
            <div className='grid_item'>4</div>
            <div className='grid_item'>5</div>
            <div className='grid_item'>6</div>
          </div>
        </Col>
      </Row>

      
    </Container>
  );
}

export default MainContent;

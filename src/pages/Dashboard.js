import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import axios from 'axios'
import './Report.css';
import NavBar from '../components/Navbar';
import ReportButton from '../components/ReportButton';
import './Dashboard.css';
import CreateButton from '../components/CreateButton';
import PDF from '../components/PDF';

function Dashboard() {

    

        return(
            <div>
                <div className="createButtonDiv">
                    <CreateButton />
                </div>
                <div className="reportButtonDiv">
                    <ReportButton />
                </div>
                <div className='pdfDiv'>
                    <PDF />
                </div>
            </div>
        )
}

export default Dashboard;

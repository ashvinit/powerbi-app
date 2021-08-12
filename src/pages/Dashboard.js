import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import axios from 'axios'
import './Report.css';
import NavBar from '../components/Navbar';
import ReportButton from '../components/ReportButton'
import './Dashboard.css';

function Dashboard() {

    

        return(
            <div className="reportButtonDiv">
                <ReportButton />
            </div>
        )
}

export default Dashboard;

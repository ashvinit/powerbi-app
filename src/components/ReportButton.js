import React from 'react'
import './ReportButton.css'

function ReportButton() {



    return(
        <a
        className="reportButton" 
        href='https://app.powerbi.com/groups/fd3dd68f-243a-4910-9182-388116f324ba/datasets/688879c3-2f09-46f3-a43c-e6777341319e'
        target='_blank'>
            View Report
        </a>
    )
}

export default ReportButton;
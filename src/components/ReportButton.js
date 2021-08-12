import React from 'react'
import './ReportButton.css'

function ReportButton() {



    return(
        <a
        className="reportButton" 
        href='https://app.powerbi.com/reportEmbed?reportId=e99b4751-02cb-495b-9d5f-4fa07dce7dc9&autoAuth=true&ctid=4fd4fdce-f33f-4ea8-a184-17ae3e3831f8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLW5vcnRoLWNlbnRyYWwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQvIn0%3D'
        target='_blank'>
            View Report
        </a>
    )
}

export default ReportButton;
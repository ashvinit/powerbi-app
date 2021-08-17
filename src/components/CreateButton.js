import React from 'react'
import './CreateButton.css'

function CreateButton() {



    return(
        <a
        className="createButton" 
        href='https://app.powerbi.com/groups/fd3dd68f-243a-4910-9182-388116f324ba/datasets/688879c3-2f09-46f3-a43c-e6777341319e'
        target='_blank'>
            Create Report
        </a>
    )
}

export default CreateButton;
import React from 'react';
import { Grid } from '@mui/material';


function Projects(props) {

    const projectImages = props.projectImage.map(image => {
        return (
            <>
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                    <a href={image.url} target="_blank" rel="noreferrer">
                        <img className="project-image" alt={image.text} src={image.image}></img>
                    </a>
                </Grid>
            </>
        );
    })

    return (
        <>
            <div className='projectContainer'>
                <Grid container spacing={2}>
                    {projectImages}
                </Grid>
            </div>
        </>
    );
}

export default Projects;
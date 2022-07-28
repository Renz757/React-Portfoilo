import React from 'react';
import { Grid } from '@mui/material';


function Projects(props) {

    const projectImages = props.projectImage.map(image => {
        return (
            <>
                <Grid item xs={12} md={4} key={image.id}>
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
                <Grid container spacing={3}>
                    {projectImages}
                </Grid>
            </div>
        </>
    );
}

export default Projects;
const Projects = (props) => {

    const projectImages = props.projectImage.map(image => {
        return (
            <>
                <div className=''>
                    <a key={image.id} href={image.url} target="_blank" rel="noreferrer">
                        <img className="w-80 mx-auto" alt={image.text} src={image.image}></img>
                    </a>
                </div>
            </>
        );
    })

    return (
        <>
            <div className='p-16 grid gap-y-10 md:gap-x-10 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-3 lg:grid-cols-3'>
                {projectImages}
            </div>
        </>
    );
}

export default Projects;
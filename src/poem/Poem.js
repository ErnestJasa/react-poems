const Poem = (props)=>{
    return(
        <section>
            <div className='card'>
                <div className='card-header'>
                    <h2>{props.title}</h2>
                </div>
                <div className="card-body">
                    <h4>{props.author}</h4>
                    <p>{props.lines}</p>
                </div>
            </div>
        </section>
    )
}

export default Poem
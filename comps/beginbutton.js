function BeginButton (props) { // can be props.whatever but .name attribute makes sense, css from global

    return <div className='begin-button'>{props.name} 
    </div>
}

export default BeginButton
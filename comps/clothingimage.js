function ClothingImage (props) {
    return <div 
    className='clothing-image'
    style={{
        backgroundImage: 'url(../shirt.jpeg)',
        backgroundSize: 'cover',
      }}
      >
    <div className='clothing-header'>{props.name}</div>
    </div>
}

export default ClothingImage
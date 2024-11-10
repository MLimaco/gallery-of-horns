function HornerBeast(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt={props.description} title={props.title} />
            <p>{props.description}</p>
        </>
    )
}
export default HornerBeast;
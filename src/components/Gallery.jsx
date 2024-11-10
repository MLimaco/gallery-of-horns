import HornerBeast from './HornerBeast'
import data from '../data.json'

function Gallery() {
    return (
        <>
            <HornerBeast title={"Unicornio"} imageUrl={"https://images.unsplash.com/photo-1550747528-cdb45925b3f7?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} description={"Este es un Unicornio"} />
            <HornerBeast title={"Rinoceronte"} imageUrl={"https://images.unsplash.com/photo-1623766982280-a1b03854bdd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} description={"Este es un Rinoceronte"} />
            {
                data.map(beast => (
                    <HornerBeast key={beast._id} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
                ))
            }
        </>
    )
}
export default Gallery;
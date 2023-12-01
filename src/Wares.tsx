import { ProductCard } from "./ProductCard";

const testWares = [
    {
        name: 'Draught of Strength',
        img: 'https://images.uesp.net/4/41/SR-icon-potion-StrengthDraught.png',
        desc: 'Carrying capacity increases by 30 for 300 seconds',
    },
    {
        name: 'Solution of Regeneration',
        img: 'https://images.uesp.net/a/a2/SR-icon-potion-RegenerationSolution.png',
        desc: 'Health regenerates 70% faster for 300 seconds',
    }
]

export function Wares() {

    return (
        <div className="w3-container w3-row-padding">
            {testWares.map((e) => (
                <ProductCard
                    img={e.img}
                    name={e.name}
                    desc={e.desc}
                />
            ))}
        </div>
    )
}
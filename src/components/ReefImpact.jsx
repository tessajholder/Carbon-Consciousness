import bleachReef from '../assets/bleachReef.jpg';

export default function ReefImpact() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <p>Due to ocean warming and acidification, coral reefs are experiencing a phenomenon known as "bleaching," which is rooted in the surplus of carbon emissions that create these environmental issues. With bleached coral reefs, the marine food web greatly suffers, since an estimated 25% of all marine species utilize healthy coral reefs for shelter, food, and habitat. Bleaching strips coral reefs of all benefits they provide for the rest of the ecosystem. Without carbon emissions, ocean warming would not cause such a travesty for these ecosytems.</p>
            </div>
            <div className="w-1/2">
                <img src={bleachReef} alt="Image of bleached coral reef" />
            </div>
        </div>

    )
}
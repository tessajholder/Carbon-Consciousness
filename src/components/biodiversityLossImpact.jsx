import biodiversityLoss from '../assets/biodiversityLoss.svg';

export default function biodiversityLoss() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <p>Habitats and ecosystems suffer greatly from excessive carbon emissions, which has led to an alarming increase in endangered species. According to the United Nations Convention to Combat Desertification, an estimated $44 trillion of natural resources are highly vulnerable to depletion due to the increasing biodiversity loss. Without these healthy ecosystems, all life, including human, are at risk of extinction.</p>
            </div>
            <div className="w-1/2">
                <img src={biodiversityLossImpact} alt="Image of biodiversityLoss" />
            </div>
        </div>

    )
}
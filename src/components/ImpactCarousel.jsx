import { Carousel, Card } from 'antd'
import BleachReef from '../assets/bleachReef.jpg'
import biodiversityLoss from '../assets/biodiversityLoss.jpg'
import weather from '../assets/weather.jpg'
import '../ImpactCarousel.css'
import {useState} from 'react';
import BioDivDesc from '../components/Card Descriptions/BioDivDesc.jsx'
import ReefDesc from '../components/Card Descriptions/ReefDesc.jsx'
import WeatherDesc from '../components/Card Descriptions/WeatherDesc.jsx'

export default function ImpactCarousel() {

    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <div className="flex h-140 gap-x-7 ml-30 mr-30">
            <div>
                <Carousel className="w-180 pb-20" afterChange={(current) => setCurrentSlide(current)} dots={true} arrows infinite={true} >
                    <div>
                        <Card hoverable cover={<img alt="example" src={BleachReef} />}>
                            <Card.Meta title="Bleached Reefs" description="Learn about the impact of carbon emissions on reefs." />
                        </Card>
                    </div>
                    <div>
                        <Card hoverable cover={<img alt="example" src={biodiversityLoss} />}>
                            <Card.Meta title="Biodiversity Loss" description="Learn about the impact of carbon emissions on biodiversity." />
                        </Card>
                    </div>
                    <div>
                        <Card hoverable cover={<img alt="example" src={weather} />}>
                            <Card.Meta title="Extreme Weather" description="Learn about the impact of carbon emissions on weather." />
                        </Card>
                    </div>
                </Carousel>
            </div>
            {currentSlide === 0 && <ReefDesc />}
            {currentSlide === 1 && <BioDivDesc />}
            {currentSlide === 2 && <WeatherDesc />}
        </div>
    )
}
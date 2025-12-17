import weather from '../assets/weather.jpg';

export default function WeatherImpact() {
    return (
        <div className="flex">
            <div className="w-1/2">
                <p>Extreme weather events such as hurricanes, floods, and wildfires are becoming more frequent and severe due to climate change from carbon footprinting. These events cause immediate damage to communities and have long-term impacts on ecosystems and economies. Rising global temperatures contribute to the intensity of these weather phenomena. This leads to increased risks for vulnerable populations and infrastructure.</p>
            </div>
            <div className="w-1/2">
                <img src={weather} alt="Image of extreme weather" />
            </div>
        </div>

    )
}
import {useState} from 'react';
//import InputBase from '@mui/material/InputBase';
import { CarOutlined, ThunderboltOutlined } from '@ant-design/icons';

export default function Calculator(){
    const[inputs, setInputs] = useState({
        carMilesPerWeek: '',
        electricityKwhPerMonth: '',
    });
    const [footprint, setFootprint] = useState(null);

    const handleChange = (e) =>{
        setInputs({ ...inputs, [e.target.name]: e.target.value});
    };
    const calculateFootprint = () => {
        const car = Math.max(parseFloat(inputs.carMilesPerWeek || 0),0)*0.404; //average gasoline vechile emits 0.404 kilograms
        const electricity = Math.max(parseFloat(inputs.electricityKwhPerMonth || 0),0)*0.417//*12;

        const daily = car/7 + electricity/30;
        const rounded = daily.toFixed(2);

        let message = "";
        let color = "";

        if (daily <= 6.8){
            message ="🌿 Great job! Your carbon footprint is below the recommended level.";
            color = "text-green-600";
        }else if (daily <= 15){
                message = "⚠️ Your footprint is moderate. Try reducing car miles or energy use.";
                color = "text-yellow-600";
        }else{
            message = "🔥 Your footprint is high. Consider using renewable energy or public transport.";
            color = "text-red-600";
        }
        setFootprint({value:rounded,message,color});
        
    };


    const handleHomeClick = () => {
        window.location.href = '/';
    }

return(
    <div className="flex flex-col gap-y-7 text-4xl h-screen mt-10">
        <p className="title !text-6xl mb-20">Carbon Footprint Calculator</p>
            <label className="flex flex-col gap-y-4">
                <p><CarOutlined /> Car miles per week:</p>
                <input
                type="number"
                name="carMilesPerWeek"
                value={inputs.carMilesPerWeek}
                onChange={handleChange}
                min="0"
                className= "border-2 border-green-400 bg-green-50 text-green-900 rounded p-2 mt-1 focus:outline-none focus:border-green-600 focus:bg-white transition text-center"
                />
            </label>

            <label className="flex flex-col gap-y-4">
                <p><ThunderboltOutlined /> Electricity use (kWh/month):</p>
                <input
                type="number"
                name="electricityKwhPerMonth"
                value={inputs.electricityKwhPerMonth}
                onChange={handleChange}
                min="0"
                className= "border-2 border-green-400 bg-green-50 text-green-900 rounded p-2 mt-1 mb-7 focus:outline-none focus:border-green-600 focus:bg-white transition text-center"
                />
            </label>

            <button onClick={calculateFootprint} className="mb-10">Calculate</button>
            {footprint && (
            <div className="mb-10 text-center">
                <p>Your estimated daily carbon footprint is <strong>{footprint.value} kg CO₂</strong>.</p>
                <p className={`mt-3 font-semibold !text-2xl ${footprint.color}`}>{footprint.message}</p>
            </div>
            )}

            
            <button onClick={handleHomeClick} style={{ marginBottom: '20px' }}>
                Home
            </button>
    </div>
);
}
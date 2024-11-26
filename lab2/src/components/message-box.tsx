import {PositionType} from "../hooks/useGeolocation.ts";

export default function MessageBox({longitude, latitude}:PositionType){
    return (
        <div
            className="bg-white shadow-xl rounded-3xl w-96 h-36 p-6 flex flex-col justify-center items-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">Your Location</h2>
            <div className="flex justify-between w-full">
                <div className="flex flex-col text-gray-600">
                    <span className="font-bold text-gray-800">Latitude: </span>
                    {latitude ? latitude.toFixed(6) : 'N/A'}
                </div>
                <div className="flex flex-col  text-gray-600">
                    <span className="font-bold text-gray-800">Longitude: </span>
                    {longitude ? longitude.toFixed(6) : 'N/A'}
                </div>
            </div>
        </div>
    )
}
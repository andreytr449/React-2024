import {useGeolocation} from "../hooks/useGeolocation.ts";
import MessageBox from "./message-box.tsx";
import Loading from "./loading.tsx";
import Error from "./error.tsx";

export default function AppComponent(){
  const {position, isLoading, isError} = useGeolocation()


    if(isLoading)
        return <Loading />
    if(isError)
        return <Error />

    return (
        <div className="flex flex-col items-center mt-16">
            <MessageBox latitude={position.latitude} longitude={position.longitude} />
        </div>
    )
}
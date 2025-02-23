import { useSearchParams } from "react-router-dom";

function Task(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description')
    return(
        <div className="h-screen w-screen bg-slate-500 p-6">
            {/* <h1>{title}</h1>
            <h1>{description}</h1> */}
            <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
                <div className="w-[500px] space-y-4">
                    <h1 className="text-3xl text-slate-100 font-bold text-center">Task Details</h1>

                    <div className="bg-slate-200 p-4 rounded-md">
                        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                        <p className="text-slate-600">{description}</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Task
import Error from "../error.js"
import useFetchHeaders from "../../hooks/useFetchHeaders.js"
import Film from "../cards/Film.js"
import NoContent from "../noContent.js"
const Films = ({ peticion }) => {

    const [films, error] = useFetchHeaders(peticion)

    if(error) {
        return <Error />
    }
    if(!films) {
        return (
            <div className="flex items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        )
    }
    if(films.length === 0) {
        return <NoContent />
    }

    return (
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
            {
                films.map(c => 
                    <Film 
                        key={c.id}
                        title={c.title}
                        year={c.year}
                        image={c.image}
                    />
                )       
            }   
        </div>
        
    )
}
export default Films
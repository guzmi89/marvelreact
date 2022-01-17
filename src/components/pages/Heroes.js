import Error from "../error.js"
import useFetch from "../../hooks/useFetch.js"
import Character from "../cards/Character.js"
import NoContent from "../noContent.js"
const Heroes = ({ peticion }) => {

    const [heroes, error] = useFetch(peticion)

    if(error) {
        return <Error />
    }
    if(!heroes) {
        return (
            <div className="flex items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        )
    }
    if(heroes.length === 0) {
        return <NoContent />
    }

    return (
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
            {
                heroes.map(c => 
                    <Character 
                        key={c.id}
                        name={c.name}
                        image={c.thumbnail.path+'.'+c.thumbnail.extension}
                    />
                )       
            }   
        </div>
        
    )
}
export default Heroes
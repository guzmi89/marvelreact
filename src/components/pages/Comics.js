import Error from "../error.js"
import useFetch from "../../hooks/useFetch.js"
import NoContent from "../noContent.js"
import Comic from "../cards/Comic.js"
const Comics = ({ peticion }) => {

    const [comics, error] = useFetch(peticion)

    if(error) {
        return <Error />
    }
    if(!comics) {
        return (
            <div className="flex items-center justify-center ">
                <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
            </div>
        )
    }
    if(comics.length === 0) {
        return <NoContent />
    }

    return (
        <div className="flex flex-wrap justify-center mt-4 bg-slate-300 dark:bg-gray-700 gap-x-2 gap-y-2 p-3">
            {
                comics.map(c => 
                    <Comic
                        key={c.id}
                        title={c.title}
                        image={c.thumbnail.path+'.'+c.thumbnail.extension}
                        url={c.urls[0].url}
                    />
                )       
            }   
        </div>
        
    )
}
export default Comics
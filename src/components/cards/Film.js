import propTypes from "prop-types"

const Film = ({ title, year, image}) => {
    return (
        <div className="flex justify-center w-64 hover:scale-105 transitio-all duration-500">
            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                    <img className="rounded-t-lg w-64 h-96" src={image} alt={title} title={title} />
                <div className="p-2 text-center">
                    <h5 className="text-gray-900 dark:text-gray-300 text-lg font-medium mb-2">{title}</h5>
                    <span className="text-gray-900 dark:text-gray-300 text-base font-medium mb-2">({year})</span>
                </div>
            </div>
        </div>
    )
}

Film.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    image: propTypes.string
}

Film.defaultProps = {
    image: "https://previews.123rf.com/images/iqoncept/iqoncept1509/iqoncept150900010/44627040-sello-defecto-en-el-c%C3%ADrculo-rojo-estilo-grunge-ronda-para-advertirle-de-un-producto-malo-o-mercanc%C3%ADa.jpg"
}

export default Film
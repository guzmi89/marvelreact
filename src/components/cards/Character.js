import propTypes from "prop-types"

const Character = ({ name, image}) => {
    return (
        <div className="flex justify-center hover:scale-105 transition-all duration-500">
            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                <a href="#!">
                    <img className="rounded-t-lg w-80 h-80" src={image.replace('http','https')} alt={name} title={name} />
                </a>
                <div className="p-2">
                    <h5 className="text-gray-900 dark:text-gray-300 text-xl font-medium mb-2">{name}</h5>
                </div>
            </div>
        </div>
    )
}

Character.propTypes = {
    name: propTypes.string.isRequired,
    image: propTypes.string
}

Character.defaultProps = {
    image: "https://previews.123rf.com/images/iqoncept/iqoncept1509/iqoncept150900010/44627040-sello-defecto-en-el-c%C3%ADrculo-rojo-estilo-grunge-ronda-para-advertirle-de-un-producto-malo-o-mercanc%C3%ADa.jpg"
}

export default Character
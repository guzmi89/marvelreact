import propTypes from "prop-types"

const Comic = ({ title, image, url}) => {
    return (
        <div className="flex justify-center hover:scale-105 transitio-all duration-500">
            <div className="rounded-lg shadow-lg bg-white dark:bg-gray-600">
                <a href="#!">
                    <img className="rounded-t-lg w-72 h-96" src={image.replace('http','https')} alt={title} title={title} />
                </a>
                <div className="p-2 w-72">
                    <a target="_blank" href={url} rel="noreferrer"><span className="text-gray-900 dark:text-gray-300 text-base font-medium mb-2">{title}</span></a>
                </div>
            </div>
        </div>
    )
}

Comic.propTypes = {
    title: propTypes.string.isRequired,
    image: propTypes.string,
    url: propTypes.string
}

Comic.defaultProps = {
    image: "https://previews.123rf.com/images/iqoncept/iqoncept1509/iqoncept150900010/44627040-sello-defecto-en-el-c%C3%ADrculo-rojo-estilo-grunge-ronda-para-advertirle-de-un-producto-malo-o-mercanc%C3%ADa.jpg"
}

export default Comic
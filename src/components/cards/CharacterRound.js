import propTypes from "prop-types"

const CharacterRound = ({name, image}) => {
    return (
        <img className="transition-all duration-500 hover:shadow-lg hover:shadow-white w-32 h-32 rounded-full hover:animate-pulse hover:brightness-125 hover:border-2 hover:-translate-y-5" title={name} src={image.replace('http','https')} alt={name} />
    )
}

CharacterRound.propTypes = {
    name: propTypes.string.isRequired,
    image: propTypes.string
}

CharacterRound.defaultProps = {
    image: "https://previews.123rf.com/images/iqoncept/iqoncept1509/iqoncept150900010/44627040-sello-defecto-en-el-c%C3%ADrculo-rojo-estilo-grunge-ronda-para-advertirle-de-un-producto-malo-o-mercanc%C3%ADa.jpg"
}

export default CharacterRound
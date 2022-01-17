import BannerCharacter from "../BannerCharacters.js"
const Home = () => (
    <>
        <div className="bg-gray-200 text-black mt-4 p-4 text-center font-marvel text-xl dark:bg-gray-600 dark:text-white italic">
        El universo Marvel es un mundo amplio plagado de superhéroes y creado por el difunto "Stan Lee"
    </div>
    <div className="flex flex-wrap container mx-auto justify-center mt-4">
        <div className="text-center w-full md:w-1/4">
            <img src={require("../../img/stanlee.png")} alt="Stan Lee" />
        </div>
        <div className="text-center w-full md:w-3/4 pl-2 pr-2">
            <p className="text-black dark:text-zinc-50 font-marvel text-xl">
                Es principalmente conocido por haber creado personajes icónicos del mundo del cómic tales como Spider-Man, X-Men, Los 4 Fantásticos, Hulk, Iron Man, Thor, Daredevil, Doctor Strange, Black Panther, Ant-Man y Bruja Escarlata, entre otros muchos superhéroes, casi siempre acompañado de los dibujantes Steve Ditko y Jack Kirby. El trabajo de Stan Lee fue fundamental para expandir Marvel Comics, llevándola de una pequeña casa publicitaria a una gran corporación multimedia. Todavía hoy, los cómics de Marvel se distinguen por indicar siempre «Stan Lee presenta» en los rótulos de presentación. También tuvo un programa televisivo en History Channel en donde buscaba superhumanos «reales».
            </p>
        </div>
    </div>
    <BannerCharacter peticion="characters?series=22547&limit=12&ts=1" />
    <div className="flex flex-wrap justify-center p-1 bg-gray-400 dark:bg-gray-800">
        <iframe className="w-full md:w-1/2 aspect-video rounded-2xl p-1" src="https://www.youtube.com/embed/ldMn-1iQzKE?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="w-full md:w-1/2 text-center p-4 font-marvel text-2xl text-black dark:text-slate-50 self-start align-middle">
            <img className="w-2/3 container mx-auto" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/deiulh2-e958d335-e034-4117-8cdb-329a9a4e8562.png/v1/fill/w_1430,h_556,strp/spider_man_no_way_home___logo_png_oficial_2021_by_andrewvm_deiulh2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU2IiwicGF0aCI6IlwvZlwvYTU4YTc3MTktMGRjZi00ZTBiLWI3YmItZDJiNzI1ZGJiYjhlXC9kZWl1bGgyLWU5NThkMzM1LWUwMzQtNDExNy04Y2RiLTMyOWE5YTRlODU2Mi5wbmciLCJ3aWR0aCI6Ijw9MTQzMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wLc9rO5SeHn-fjYrQMTMboZEgBvWEi8jmLfIKL0wrEY" alt="Logo" />
            <p>
                Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado, y por tanto, ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un superhéroe. Cuando pide ayuda al Doctor Strange, los riesgos pasan a ser aún más peligrosos, obligándole a descubrir lo que realmente significa ser él. Secuela de 'Spider-Man: Far From Home'.
            </p>
        </div>

    </div>
    </>
)

export default Home
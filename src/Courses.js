import { useTranslation } from "react-i18next";


function MyCourses() {

    const {t} = useTranslation();

    return (
        <div className="courses">
            <h1> { t ('MyCourses') } </h1>
            <p>  { t ('InfoLoading') } </p>
        </div>
    )
}

export default MyCourses;
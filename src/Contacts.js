import { useTranslation } from "react-i18next";

function MyContacts() {

    const {t} = useTranslation();
        
    return (
        <div className="contacts">
            <h1> { t ('Contacts') }  </h1>
            <h2>  { t ('Mail') } olik-tigra13@yandex.ru </h2>
            <h2> { t ('whatsup') }  +7 (965) 078-72-13 </h2>
        </div>
    )
}

export default MyContacts;
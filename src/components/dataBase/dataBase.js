const DataBase = () => { 
    const buttonsData = [
        { id: "home", link: "#home", label: "Головна" },
        { id: "service", link: "#service", label: "Послуги" },
        { id: "prices", link: "#prices", label: "Ціни" },
        { id: "parts", link: "#home", label: "Запчастини" },
        {id:"contacts", link:"#footer",label:"Контакти"}
    ]
    
    const menuInfo =  [
        {
            
            subheader_text: "Ремонтуємо як для себе",
            adress: "м. Київ, вул. Гродненська, 24",
            hours: "09:00 до 19:00",
            telNumber: "380981212011",
            telegram: "pro_s_tar",
        }
    ]

   
    return {buttonsData,menuInfo,}
}

export default DataBase
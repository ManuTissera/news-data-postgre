

const table_news_name = document.querySelector('.table_news_name');


const viewNews = async () =>{
    let petition = await fetch(`http://localhost:3025/view_news`).then(res=>res.json()).then(res=>res);

    for(titles of petition){
        
        let row =`
            <tr>
                <td>${titles.id_new_name}</td>
                <td>${titles.new_name}</td>
                <td>${titles.new_value}</td>
                <td>${titles.new_ac}</td>
            </tr>    
        `;

        table_news_name.innerHTML += row;
    }

};

viewNews();





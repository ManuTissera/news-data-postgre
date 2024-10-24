
// const h1_tabla = document.querySelector('.h1_tabla');
// const container_box_data_table = document.querySelector('.container_box_data_table');
// const container_content_table_news = document.querySelector('.container_content_table_news');
// //const id_new_URL = ((window.location.search).match(/\w/g)).join('');

// ==================== ELEMENTOS FORMULARIO ==================

const inp_form_date = document.querySelector('.inp_form_date');
const select_form_hour = document.querySelector('.select_form_hour');
const inp_form_actual = document.querySelector('.inp_form_actual');
const inp_form_expected = document.querySelector('.inp_form_expected');
const inp_form_previous = document.querySelector('.inp_form_previous');
const btn_form_table = document.querySelector('.btn_form_table');


const view = async () =>{
    let dataTitle = await fetch(`http://localhost:3025/view_data_news_table/${id_new_URL}`).then(res=>res.json()).then(res=>res);

    h1_tabla.textContent = dataTitle[0].new_name

    const dataHTML = ` 
                <span class="span_box_data">${dataTitle[0].new_name} </span><br>
                <span class="span_box_data">Valoraciona de dato = ${dataTitle[0].new_value} </span><br>
                <span class="span_box_data">Frequencia de publicacion   ${dataTitle[0].frequency} </span><br><br>
                <span class="span_box_data">Link de la fuente    ${dataTitle[0].new_site} </span><br>
                <a class="span_box_data" href="${dataTitle[0].new_site}" target="_blank"> Ir a la fuente </a><br>
    `
    container_box_data_table.innerHTML = dataHTML;
    console.log(dataTitle[0]);
}

const insertDataForm = async () =>{

    console.log(`CORREGIR      2024-09-18 Inventarios de petróleo crudo de la AIE 0.8330  0.9000 -6.8730`)

    fetch(`http://localhost:3025/add_new_news`,{
        method: 'POST',
        body: JSON.stringify({
        "publication_date":`${inp_form_date.value}`,
        "publication_time":`${select_form_hour.value}`,
        "actual_value":`${inp_form_actual.value}`,
        "expected_value":`${inp_form_expected.value}`,
        "previous_value":`${inp_form_previous.value}`,
        "id_new_name":`${id_new_URL}`
        }),
        headers:{'Content-Type': 'application/json'}
    }).then(res=>res.text()).then(res=>console.log(res));
}


const viewTitlesTable = async () =>{

    let petition = await fetch(`http://localhost:3025/view_titles_table/${id_new_URL}`).then(res=>res.json()).then(res=>res);

    let cant = 0;

    for(let titles of petition){
        cant++
        let date = (titles.publication_date.match(/\w{4}\-\w{2}\-\w{2}/g)).join()
        let year = (date.match(/\w{4}/g)).join()
        let month = (date.match(/\-\w{2}\-/g)).join()
        let day = (date.match(/\-\w{2}/g)[1]).match(/\w{2}/g)[0];
        //let name = titles.new_name;
        let actual = titles.actual_value;
        let expected = titles.expected_value;
        let previous = titles.previous_value;
        const articleRow = `
            <article class="art_table_news">
                 <label class="label_table_news lab_date">${day+month+year}</label>
                 <label class="label_table_news lab_actual">${actual} </label>
                 <label class="label_table_news lab_expected">${expected}  </label>
                 <label class="label_table_news lab_previous">${previous}</label>
            </article>
        
        `;
        container_content_table_news.innerHTML += articleRow;
    }
    //console.log(cant);
}

btn_form_table.addEventListener("click",()=>{
    insertDataForm()
})

//view();
//viewTitlesTable()


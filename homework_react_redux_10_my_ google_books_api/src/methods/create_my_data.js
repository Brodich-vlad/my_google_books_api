import img_alt from '../image/background/no_cover.jpg';


export function createMyData(data){
    if(!Array.isArray(data)){return}
    
    const newArr = [];

    data.forEach((el)=>{

        if(!newArr.find((e)=>{return e.id === el.id})){

            newArr.push(
            {
                id:el.id,
                title:el.volumeInfo.title,
                authors: el.volumeInfo.authors && el.volumeInfo.authors.join(', '),
                publisher: el.volumeInfo.publisher,
                publishedDate: el.volumeInfo.publishedDate && el.volumeInfo.publishedDate,
                description: el.volumeInfo.description,
                categories: el.volumeInfo.categories,
                image: el.volumeInfo.imageLinks ?
                `${ el.volumeInfo.imageLinks.thumbnail}&w=1280` : 
                    img_alt,
                language: el.volumeInfo.language,
            })

        }
    })
    return newArr;

};



const resolve_reject_func = (resolve, reject)=>{
    resolve ([
        {id : 1, title : "Name Of The Wind"},
        {id : 2, title: "The Wise Man's Fear"},
        {id : 3, title : "The Boy Who Cried Wolf"},
        {id : 4, title : "Beauty and The Beast"}
    ]),
    reject("Error Getting Books!")
}

export const mockBookList = ()=>{
    return new Promise(resolve_reject_func)
}
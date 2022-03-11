const initialState={
    mentorData:[
        {
        name:"Amjed Sir",
        image:"https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200089/114296480-icono-de-avatar-de-empresario-logotipo-de-profesi%C3%B3n-personaje-masculino-un-hombre-de-traje-especiali.jpg",
        desc:"ALL-ROUNDER-TEACHER"
        },
        {
        name:"Afroz Sir",
        image:"https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200089/114296480-icono-de-avatar-de-empresario-logotipo-de-profesi%C3%B3n-personaje-masculino-un-hombre-de-traje-especiali.jpg",
        desc:"ENGLISH TEACHER"
       },
        {
        name:"Khawaja Sir",
        image:"https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200089/114296480-icono-de-avatar-de-empresario-logotipo-de-profesi%C3%B3n-personaje-masculino-un-hombre-de-traje-especiali.jpg",
        desc:"REACT AND REDUX TEACHER"
        },
        {
        name:"Yasin Sir",
        image:"https://previews.123rf.com/images/ihorbiliavskyi/ihorbiliavskyi1812/ihorbiliavskyi181200089/114296480-icono-de-avatar-de-empresario-logotipo-de-profesi%C3%B3n-personaje-masculino-un-hombre-de-traje-especiali.jpg",
        desc:"HTML & CSS TEACHER"
        },
    ],
};

export const mentorReducer=(state=initialState,action)=>{
if(action.type==="ADD_MENTOR"){
    return{
        ...state,
        mentorData:[...state.mentorData,action.data]
    }

} else return state;
}
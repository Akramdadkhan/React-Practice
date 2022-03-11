const initState={
    myData:[
        { name: "HTML",
         link: "https://html.com/",
         target: "_self" 
        },

        {
          name: " CSS",
          link: "https://www.w3.org/Style/CSS/Overview.en.html",
          target: "_blank",
        },

        { name: "JAVASCRIPT",
         link: "https://www.javascript.com/",
         target: "_self" 
        },

        { name: "REACT",
         link: " https://reactjs.org/",
         target: "_blank" 
        },
    ],
};

export const navReducer=(state=initState,action)=>{
if (action.type==="ADD_NAV_LINK"){
    return{
        ...state,
        myData:[...state.myData,action.navData]
    };
}else return state;
}
export const Store = {
    forms : [
        {
            title:"Form 1",
            id:1,
            form_Sections:[
                {
                    component:"Form",
                    label:"Form 1 - 1",
                    id:1,
                    fields:[
                        {
                            component: "text",
                            label: "First Name",
                            placeholder: "First Name",
                            type: "text",
                            required:true,
                            id:1,
                            value:''
                        },
                        {
                            component: "text",
                            label: "Last Name",
                            placeholder: "Last Name",
                            type: "text",
                            required:true,
                            id:2,
                            value:''
                        },
                        {
                            component: "text",
                            label: "Email",
                            placeholder: "Email",
                            type: "text",
                            required:true,
                            id:3,
                            value:''
                        },
                        {
                            component: "text",
                            label: "Password",
                            placeholder: "Password",
                            type: "Password",
                            required:true,
                            id:4,
                            value:''
                        },
                        {
                            component: "dropdown",
                            label: "Gender",
                            type: "dropdown",
                            required:true,
                            id:7,
                            value:'Male',
                            options:[
                                {
                                    value:"Male",
                                    text:"Male",
                                    id:5
                                },
                                {
                                    value:"Female",
                                    text:"Female",
                                    id:6
                                }
                            ]
                        }
                    ]
                },
                {
                    component:"Form",
                    label:"Form 1 - 2",
                    id:2,
                    fields:[
                        {
                            component: "text",
                            label: "Adress",
                            placeholder: "Adress",
                            type: "text",
                            required:true,
                            id:8,
                            value:''
                        },
                        {
                            component: "dropdown",
                            label: "Country",
                            type: "dropdown",
                            value:'US',
                            options:[
                                {
                                    value:"Morocco",
                                    text:"Morocco",
                                    id:9
                                },
                                {
                                    value:"US",
                                    text:"US",
                                    id:10
                                },
                                {
                                    value:"France",
                                    text:"France",
                                    id:11
                                },
                                {
                                    value:"Germany",
                                    text:"Germany",
                                    id:12
                                }
                            ],
                            required:true,
                            id:13
                        },
                        {
                            component: "dropdown",
                            label: "City",
                            type: "dropdown",
                            value:'',
                            options:[
                                {
                                    value:"Marrakesh",
                                    text:"Marrakesh",
                                    id:14
                                },
                                {
                                    value:"NewYork",
                                    text:"New york",
                                    id:15
                                },
                                {
                                    value:"Paris",
                                    text:"Paris",
                                    id:16
                                },
                                {
                                    value:"Berlin",
                                    text:"Berlin",
                                    id:17
                                }
                            ],
                            required:true,
                            id:18
                        }
                    ]
                },
                {
                    component:"Form",
                    label:"Form 1 - 3",
                    id:3,
                    fields:[
                        {
                            component: "dropdown",
                            label: "City",
                            type: "dropdown",
                            value:'',
                            options:[
                                {
                                    value:"Marrakesh",
                                    text:"Marrakesh",
                                    id:20
                                },
                                {
                                    value:"NewYork",
                                    text:"New york",
                                    id:21
                                },
                                {
                                    value:"Paris",
                                    text:"Paris",
                                    id:22
                                },
                                {
                                    value:"Berlin",
                                    text:"Berlin",
                                    id:23
                                }
                            ],
                            required:true,
                            id:24
                        },

                        {
                            component: "choices",
                            label: "Status",
                            type: "radio",
                            required:true,
                            id:27,
                            value:'',
                            options:[
                                {
                                    value:"Yes",
                                    text:"Yes",
                                    id:25,
                                    name:"Status",
                                    type: "radio",
                                },
                                {
                                    value:"No",
                                    text:"No",
                                    id:26,
                                    name:"Status",
                                    type: "radio"
                                }
                            ]
                        },
                        {
                            component: "choices",
                            label: "Confirm All",
                            type: "checkbox",
                            required:true,
                            id:30,
                            value:'',
                            options:[
                                {
                                    value:"Yes",
                                    text:"Yes",
                                    id:29,
                                    name:"Confirm",
                                    type: "checkbox"
                                },
                                {
                                    value:"No",
                                    text:"No",
                                    id:28,
                                    name:"Confirm",
                                    type: "checkbox"
                                }
                            ]
                        }
                        
                    ]
                },
                {
                    component:"Form",
                    label:"Form 1 - 4",
                    id:4,
                    fields:[
                        {
                            component: "accordion",
                            label: "Accordion",
                            type: "accordion",
                            value:'',
                            required:true,
                            id:134,
                            fieldGroup:[
                                {
                                    component:"Accordion",
                                    label:"Personal information",
                                    id:130,
                                    fields:[{
                                        component: "text",
                                        label: "First Name",
                                        placeholder: "First Name",
                                        type: "text",
                                        required:true,
                                        id:131,
                                        value:''
                                    },
                                    {
                                        component: "text",
                                        label: "Last Name",
                                        placeholder: "Last Name",
                                        type: "text",
                                        required:true,
                                        id:132,
                                        value:''
                                    },
                                    {
                                        component: "text",
                                        label: "Email",
                                        placeholder: "Email",
                                        type: "text",
                                        required:true,
                                        id:133,
                                        value:''
                                    }]
                                },
                                {
                                    component:"Accordion",
                                    label:"Business informations",
                                    id:136,
                                    fields:[{
                                        component: "text",
                                        label: "First Name",
                                        placeholder: "First Name",
                                        type: "text",
                                        required:true,
                                        id:137,
                                        value:''
                                    },
                                    {
                                        component: "text",
                                        label: "Last Name",
                                        placeholder: "Last Name",
                                        type: "text",
                                        required:true,
                                        id:138,
                                        value:''
                                    },
                                    {
                                        component: "text",
                                        label: "Email",
                                        placeholder: "Email",
                                        type: "text",
                                        required:true,
                                        id:139,
                                        value:''
                                    }]
                                }
                            ]
                        },

                        {
                            component: "choices",
                            label: "Status",
                            type: "radio",
                            required:true,
                            id:137,
                            value:'',
                            options:[
                                {
                                    value:"Yes",
                                    text:"Yes",
                                    id:125,
                                    name:"Status",
                                    type: "radio",
                                },
                                {
                                    value:"No",
                                    text:"No",
                                    id:126,
                                    name:"Status",
                                    type: "radio"
                                }
                            ]
                        },
                        {
                            component: "choices",
                            label: "Confirm All",
                            type: "checkbox",
                            required:false,
                            id:130,
                            value:'',
                            options:[
                                {
                                    value:"Yes",
                                    text:"Yes",
                                    id:129,
                                    name:"Confirm",
                                    type: "checkbox"
                                },
                                {
                                    value:"No",
                                    text:"No",
                                    id:128,
                                    name:"Confirm",
                                    type: "checkbox"
                                }
                            ]
                        }
                        
                    ]
                }
            ]
        }
    ],
    errors:[],
    globalRefs:[]
}
import moment from 'moment';
var addVehicleAssignmentFormConfig = {
            fields: [                
                {
                    name: "vehicle_id",
                    title: "Vehicle *",
                    value:"",
                    type: "select",  
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "user_id",
                    title: "Driver *",
                    value:"",
                    type: "select",  
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "start_time",
                    title: "Start Time",
                    timeCaptionTitle: "Start Time",
                    value:"",
                    type: "time", 
                    timeInterval: 15,
                    format: "LT", 
                    showOnForm: false,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "end_time",
                    title: "End Time",
                    timeCaptionTitle: "End Time",
                    value:"",
                    type: "time",
                    timeInterval: 15,
                    format: "LT",  
                    showOnForm: false,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "description",
                    title: "Short Description *",
                    value:"",
                    type: "textarea", 
                    placeholder: "Description", 
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-12',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "vehicle_assignment_id",
                    title: "",
                    value:"",
                    type: "hidden",  
                    showOnForm: true,
                },
            ],
            data: {
                vehicle_id_data:[],
                user_id_data:[],
                // start_time:moment(),
                // end_time:moment()
            },
           handlers:{               
           }
        };
        
export default addVehicleAssignmentFormConfig;
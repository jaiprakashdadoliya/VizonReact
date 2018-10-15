import moment from 'moment';
var jobInfoFormConfig = {
            fields: [
                {
                    name: "job_title",
                    title: "Job Title",
                    value:"",
                    type: "text",
                    placeholder: 'Job Title',
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:false,
                            msg:'Required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "employee_number",
                    title: "Employee Number",
                    value:"",
                    type: "text",
                    placeholder: 'Employee Number',
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:false,
                            msg:'Required.'
                        }
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "employee_start_date",
                    title: "Start Date",
                    value: "",
                    type: "date",  
                    showOnForm: true,
                    placeholder: 'Start date',
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "employee_end_date",
                    title: "End Date",
                    value: "",
                    type: "date",  
                    showOnForm: true,
                    placeholder: 'End date',
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                }
            ],
            data: {
                employee_start_date:moment(),
                employee_end_date:moment(),
            },
           handlers:{               
           }
        };
        
export default jobInfoFormConfig;
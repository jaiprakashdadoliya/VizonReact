import moment from 'moment';
var licenseInfoFormConfig = {
            fields: [
                {
                    name: "driver_license_number",
                    title: "Driver License Number",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    placeholder:"Driver License Number",
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "driver_license_class",
                    title: "License Class",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "driver_license_state",
                    title: "License State/Province/Region",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "license_expiry",
                    title: "Driver License Expiry",
                    value:"",
                    type: "date",  
                    showOnForm: true,
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                }
            ],
            data: {
                license_expiry:moment(),
            },
           handlers:{               
           }
        };
        
export default licenseInfoFormConfig;
import moment from 'moment';
var licenseInfoFormConfig = {
            fields: [
                {
                    name: "driver_license_number",
                    title: "Driver License Number",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    placeholder:"Driver license number",
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "driver_license_class",
                    title: "License Class",
                    placeholder: "License class",
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
                    placeholder:"License state/province/region",
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
                    placeholder:"Driver license expiry",
                    value:"",
                    type: "date",  
                    showOnForm: true,
                    format: 'DD/MM/YYYY',
                    disableDate: 'after',
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
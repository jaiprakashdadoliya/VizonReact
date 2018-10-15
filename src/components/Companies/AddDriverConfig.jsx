import moment from 'moment';
var formConfig = {
            fields: [ 
                {
                    name: "profile_picture",
                    placeholder: "Browse Image",
                    title:"Upload Image",
                    value:"",
                    type: "file", 
                    showOnForm: true,
                    accept:"image/png,image/jpeg,image/jpg,image/gif",
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        inputClass:'yellow btn text-btn',
                        labelClass:'form-group',
                        browseButtonGroupClass: 'col-md-12',
                    },
                    validations:[
                        {
                            isRequired:false,
                            msg:'This field is required.'
                        }
                    ],
                },               
                {
                    name: "company_name",
                    title: "Company Name *",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    placeholder: 'Company name',
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
                    name: "last_name",
                    title: "Last Name *",
                    value:"",
                    type: "text",  
                    placeholder: 'Last name',
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
                    name: "mobile",
                    title: "Mobile *",
                    restrictType: "digitsOnly",
                    value:"",
                    type: "text",
                    placeholder: '9876543210',
                    showOnForm: true,
                    maxLength:10,
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        },
                        {
                            pattern:/[0-9]{10}/,
                            msg:'Please enter a valid 10 digits mobile number.'
                        },
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                },
                {
                    name: "email",
                    title: "Email *",
                    value:"",
                    type: "text",                    
                    showOnForm: true,
                    placeholder: "username@domainname.com",
                    validations:[
                        {
                            isRequired:true,
                            msg:'This field is required.'
                        },
                        {
                            pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            msg:'Please enter a valid email address.'
                        },
                    ],
                    cssClasses:{
                        inputParentClass:'col-md-6',
                        labelClass:'control-label',
                        inputContainerClass:''
                    },
                    clearFix: true
                },
                {
                    name: "address",
                    title: "Address",
                    value:"",
                    type: "text",
                    placeholder: 'Address',
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
                    name: "city",
                    title: "City",
                    value:"",
                    type: "text",
                    placeholder: 'City',
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
                    name: "state",
                    title: "State",
                    value:"",
                    type: "text",
                    placeholder: 'State',
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
                    name: "postcode",
                    title: "Postcode",
                    value:"",
                    type: "text",
                    placeholder: 'Postcode',
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
                    name: "user_id",
                    title: "",
                    value:"",
                    type: "hidden",  
                    showOnForm: true,
                },
            ],
            data: {
                user_type_data: [
                    { value: 'driver', label: 'Driver' },
                    { value: 'admin', label: 'Admin' },
                    { value: 'assistant', label: 'Assistant' }
                ],
                gender_data:[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'transgender', label: 'Transgender' }
                 ],
                user_group_data:[
                    { value: 'group1', label: 'Group1' },
                    { value: 'group2', label: 'Group2' },
                    { value: 'group3', label: 'Group3' }
                 ],
            },
           handlers:{               
           }
        };
        
export default formConfig;
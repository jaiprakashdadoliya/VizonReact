import moment from 'moment';
var addVehicleFormConfig = {
            fields: [
                {
                    name: "vehicle_name",
                    title: "Vehicle Name *",
                    value:"",
                    type: "text",  
                    showOnForm: true,
                    placeholder: 'Car',
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
                    name: "insurance_number",
                    title: "VIN/SN *",
                    value:"",
                    type: "text", 
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
                    clearFix: true,
                }, 
                {
                    name: "registration_number",
                    title: "Registration Number *",
                    value:"",
                    type: "text", 
                    showOnForm: true,
                    placeholder: 'MP 09 GH 0916',
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
                    name: "vehicle_type",
                    title: "Type *",
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
                    clearFix: true,
                },
                {
                    name: "vehicle_year",
                    title: "Year",
                    restrictType: "digitsOnly",
                    maxLength:4,
                    value:"",
                    type: "text",
                    placeholder: '2005',
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
                    name: "vehicle_make",
                    title: "Make",
                    value:"",
                    type: "text",
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
                    name: "vehicle_model",
                    title: "Model",
                    value:"",
                    type: "text",
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
                    name: "vehicle_trim",
                    title: "Trim",
                    value:"",
                    type: "text",
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
                    name: "vehicle_sate",
                    title: "Registration State/Province",
                    value:"",
                    type: "select",  
                    showOnForm: true,
                    validations:[
                        {
                            isRequired:false,
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
                    name: "vehicle_primary_meter",
                    title: "Primary Meter",
                    placeholder: "Primary meter",
                    value:"",
                    type: "text",
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
                    name: "vehicle_fuel_unit",
                    title: "Fuel Unit",
                    placeholder: "Fuel unit",
                    value:"",
                    type: "text",
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
                     clearFix:true
                }, 
                {
                    name: "vehicle_avatar",
                    placeholder: "Browse Image",
                    title:"Upload Image",
                    value:"",
                    type: "file", 
                    showOnForm: true,
                    accept:"image/png,image/jpeg",
                    cssClasses:{
                        inputParentClass:'col-md-12',
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
                    clearFix:true
                },
                {
                    name: "vehicle_id",
                    title: "",
                    value:"",
                    type: "hidden",  
                    showOnForm: true,
                },
            ],
            data: {
                vehicle_type_data: [
                    { value: 'bus', label: 'Bus' },
                    { value: 'mini-bus', label: 'Mini-bus' },
                    { value: 'van', label: 'Van' }
                ],
                vehicle_sate_data:[
                    { value: 'alabama', label: 'Alabama' },
                    { value: 'alaska', label: 'Alaska' },
                    { value: 'arizona', label: 'Arizona' }
                 ],
            },
           handlers:{               
           }
        };
        
export default addVehicleFormConfig;
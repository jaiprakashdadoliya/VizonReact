import React from 'react';
import FxFormElement from './FxFormElement';

/*
 * *****************************************************************************
 * FxFomr All field types
 * *****************************************************************************
 * hidden
 * number
 * password
 * checkbox
 * textarea
 * datetime
 * date
 * select
 * file
 * autocomplete
 * tags
 * default(text)
 * /

/*
 * *****************************************************************************
 * FxFomr Config Format
 * *****************************************************************************
 * var formConfig = {
 *           fields: [
 *               {
 *                   name: field name,
 *                   title: field title(label value),
 *                   type: field tyep,   // 
 *                   value: field value,
 *                   showOnForm: true/false,
 *                   clearFix:true/false,
 *                   placeholder: place holder text,
 *                   accept:"application/pdf", // aplicable only for file input
 *                   format:"DD/MM/YYYY", // aplicable only for date and datetime input
 *                   idField: Id filed for data, // aplicable only for autocomplete 
 *                   validations:[
 *                       {
 *                           isRequired:true,
 *                           msg:'This field is required.'
 *                       },
 *                       {
 *                           // You can pass any patern to 
 *                           pattern:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
 *                           msg:'Please enter valid message.'
 *                       }
 *                   ]
 *                   cssClasses:{
 *                               inputParentClass:'col-md-12',
 *                               labelClass:'col-md-9',
 *                               inputContainerClass:'col-md-3',
 *                               inputGroupClass:'form-group checkbox-listing checkbox-formgroup'
 *                          }
 *               }
 *           ],
 *           data: {
 *               [file_name]_data: [
 *                   { value: '1', label: 'Male' },
 *                   { value: '2', label: 'Female' },
 *                   { value: '3', label: 'Transgender' }
 *                ]
 *           },
 *          handlers:{    
 *              [file_name]_handle: You can pass any custom function to call in input onchange
 *              we are currently only handle this form select input          
 *          }
 *       };
 */

export class FxForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.defaultInputParentClass = 'col-sm-6 col-md-6 col-xs-12';
        this.defaultInputGroupClass = 'form-group';
        this.defaultInputClass = 'form-control';
        this.defaultLabelClass = 'control-label';
        this.defaultBrowseButtonGroupClass = 'col-sm-6 col-md-6 col-xs-12';
        this.defaultImagePreviewGroupClass = 'col-sm-6 col-md-6 col-xs-12';

        this.config = this.props.config;
        this.fields = this.setDefaultOptions(this.config.fields);        
        this.items = {};
        this.isEditing = false;       
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set default option for FxForm
     * @param                 Filds which comes from parent component
     * @return                JSON OBJECT
     */
    setDefaultOptions(fields){
        for(let key in fields){
            let field = fields[key];
            if(field.type == 'group'){
                let groupsfields =  field.fields;               
                if (typeof field.cssClasses == 'undefined'){
                    field['cssClasses'] = {};
                }
                if (typeof field.cssClasses == 'undefined'){
                    field['groupHeadClass'] = '';
                }
                if (typeof groupsfields.cssClasses == 'undefined'){
                    field['groupContainerClass'] = '';
                }
                for(let gkey in groupsfields){
                    let gfield = groupsfields[gkey];
                    if (typeof gfield.cssClasses == 'undefined'){
                        gfield['cssClasses'] = {};
                    }
                    if (typeof gfield.cssClasses.inputParentClass == 'undefined'){
                        gfield['cssClasses']['inputParentClass'] = this.defaultInputParentClass;
                    }
                    if (typeof gfield.cssClasses.inputGroupClass == 'undefined'){
                        gfield['cssClasses']['inputGroupClass'] = this.defaultInputGroupClass;
                    }
                    if (typeof gfield.cssClasses.inputClass == 'undefined'){
                        gfield['cssClasses']['inputClass'] = this.defaultInputClass;
                    }
                    if (typeof gfield.cssClasses.labelClass == 'undefined'){
                        gfield['cssClasses']['labelClass'] = this.defaultLabelClass;
                    }
                    if (typeof gfield.cssClasses.inputContainerClass == 'undefined'){
                        gfield['cssClasses']['inputContainerClass'] = '';
                    }
                    if (typeof gfield.cssClasses.selectClass == 'undefined'){
                        gfield['cssClasses']['selectClass'] = '';
                    }
                    if (typeof gfield.cssClasses.browseButtonGroupClass == 'undefined'){
                        gfield['cssClasses']['browseButtonGroupClass'] = this.defaultBrowseButtonGroupClass;
                    }
                    if (typeof gfield.cssClasses.imagePreviewGroupClass == 'undefined'){
                        gfield['cssClasses']['imagePreviewGroupClass'] = this.defaultImagePreviewGroupClass;
                    }
                    field.fields[gkey] = gfield;
                }
            }else{
                if (typeof field.cssClasses == 'undefined'){
                     field['cssClasses'] = {};
                }
                if (typeof field.cssClasses.inputParentClass == 'undefined'){
                    field['cssClasses']['inputParentClass'] = this.defaultInputParentClass;
                }
                if (typeof field.cssClasses.inputGroupClass == 'undefined'){
                    field['cssClasses']['inputGroupClass'] = this.defaultInputGroupClass;
                }
                if (typeof field.cssClasses.inputClass == 'undefined'){
                    field['cssClasses']['inputClass'] = this.defaultInputClass;
                }
                if (typeof field.cssClasses.labelClass == 'undefined'){
                    field['cssClasses']['labelClass'] = this.defaultLabelClass;
                }
                if (typeof field.cssClasses.inputContainerClass == 'undefined'){
                    field['cssClasses']['inputContainerClass'] = '';
                }
                if (typeof field.cssClasses.selectClass == 'undefined'){
                    field['cssClasses']['selectClass'] = '';
                }
                if (typeof field.cssClasses.browseButtonGroupClass == 'undefined'){
                    field['cssClasses']['browseButtonGroupClass'] = this.defaultBrowseButtonGroupClass;
                }
                if (typeof field.cssClasses.imagePreviewGroupClass == 'undefined'){
                    field['cssClasses']['imagePreviewGroupClass'] = this.defaultImagePreviewGroupClass;
                }
            }
        }
        return fields;
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set data on input change
     * @param                 array of object
     * @return                Nothing
     */
    setData(data){
        const  items = this.items;
        for(let key in items){
            if (items.hasOwnProperty(key)){
                let item = items[key];
                item.setValue(data[key]);
            }
        }
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set data on input change
     * @param                 array of object
     * @return                Nothing
     */
    setFieldData(data){
        const  items = this.items;
        let keys = Object.keys(data);
        let key = keys.length > 0 ? keys[0] :'';
        if(key !='' && items.hasOwnProperty(key) && data.hasOwnProperty(key)){
            items[key].setValue(data[key]);
        }
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to get all form data
     * @param                 Nothing
     * @return                Arra of json object
     */
    getData(){    
        const  items = this.items;
        const data = {};
        var noErrorInForm = true;
        for(let key in items){
            if (items.hasOwnProperty(key)){
                let item = items[key];
                if(item != null){
                    if(item.hasError(item)){
                        if(noErrorInForm){
                            noErrorInForm = false;
                        }                    
                    }else{
                        if(typeof item.props.config.idField !== 'undefined'){
                            if(item.props.config.idField !== 'undefined'){
                                data[item.props.config.idField] = item.getValueId();
                            }
                        }
                        let itemValue = item.getValue();
                        if(item.props.config.type == 'date'){
                            itemValue = itemValue == null ? '': itemValue;
                        } else if(item.props.config.type == 'time'){
                            itemValue = itemValue == null ? '': itemValue;
                        }

                        var dataValue = (item.props.config.type == 'date' || item.props.config.type == 'time') && typeof itemValue === 'object' && itemValue !== null && itemValue !== '' ? itemValue.format(item.props.config.format) : itemValue;
                        data[key] = dataValue;
                    }
              }
            }
        }
        
        if(!noErrorInForm){
            return noErrorInForm;
        }else{
            return data;
        }   
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to clear all values
     * @param                 Nothing
     * @return                Nothing
     */
    clearForm(){
        const  items = this.items;
        for(let key in items){
            if (items.hasOwnProperty(key)){
                let item = items[key];
                item.clearValue();
            }
        }
    }

    render() {
        return (                
            <React.Fragment>                
                {        
                    this.fields.map((item) => { 
                         if(item.type == 'group' && item.showOnForm){   
                                return (
                                    <div key={"g_"+item.name}>
                                        <h3 key={"gh_"+item.name} className={item.cssClasses.groupHeadClass}>{item.title}</h3>
                                        {item.fields.map((itemf) => { 
                                            if(itemf.showOnForm){
                                             return (                                                
                                                    <div key={"p_"+itemf.name}
                                                        className={itemf.cssClasses.inputParentClass}>
                                                       <FxFormElement key={"fe_"+itemf.name} ref={(itm) => {
                                                           this.items[itemf.name] = itm
                                                       }} config={ itemf }
                                                       inputData={this.props.config.data[itemf.name+'_data']} 
                                                       inputHandle={this.props.config.handlers[itemf.name+'_handle']}        
                                                       />
                                                   </div>
                                             );  
                                            }
                                         })}
                                         {item.showBottomHR &&
                                            <hr className="fxform-froup-hr"/>
                                          }
                                    </div>
                                )                       
                         }else if(item.showOnForm && item.type != 'group'){
                            return (   
                                     <div key={"mp_"+item.name}>
                                        <div key={"p_"+item.name}
                                            className={item.cssClasses.inputParentClass}>
                                           <FxFormElement key={"fe_"+item.name} ref={(itm) => {
                                               this.items[item.name] = itm
                                           }} config={ item } 
                                           inputData={this.props.config.data[item.name+'_data']} 
                                           inputHandle={this.props.config.handlers[item.name+'_handle']}        
                                           inputFormName={this.props.config.hasOwnProperty('formName') ? this.props.config.formName : ''}        
                                           />
                                        </div>
                                        
                                        {item.clearFix &&
                                                    <div className="clearfix"  key={"cl_"+item.name}></div>
                                          }
                                     </div>
                                );
                            }  
                    })
                    
                }
            </React.Fragment>
        );
    }
}
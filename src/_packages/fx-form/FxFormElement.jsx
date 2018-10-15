import React from "react";
import DatePicker from 'react-datepicker';
import moment from "moment";
import 'react-datepicker/dist/react-datepicker.css';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import Select from 'react-select';
import { configConstants }  from '../../_constants';

const errorStyle = {
    border: '1px solid red'
};

export default class FxFormElement extends React.Component {
    constructor(props) {
        super(props);

        let value = props.config.value;        
        this.dtFormat = '';
        
        //Simple Hack to Maintain SQL Format for Dates format
        if (props.config.type === "datetime") {
            this.dtFormat = props.config.format;
            value = value && moment(value).format(props.config.format);
        } else if (props.config.type === "date") {
            this.dtFormat = props.config.format;
            if(value == "" || value == null){
                value = null;
            }else if(typeof value == 'string' && value != '' && value!= undefined) {

                value = value && moment(value);
            }
            
        }else if (props.config.type === "time") {
            this.dtFormat = props.config.format;
            if(value == "" || value == null){
                value = null;
            }else if(typeof value == 'string' && value != '' && value!= undefined) {

                value = value && moment(value).format(props.config.format);
            }
            
        }else if(props.config.type ==='tags'){
            if(value == undefined ){
                value = [];
            }
        }
        this.state = {
            value: value,
            hasError: false,
        };

        this.isRequired                 = this.props.config.isRequired;
        this.onCheckBoxValueChanged     = this.onCheckBoxValueChanged.bind(this);
        this.onMultiCheckBoxChanged     = this.onMultiCheckBoxChanged.bind(this);
        this.handleFileClick            = this.handleFileClick.bind(this);
        this.handleFileChange           = this.handleFileChange.bind(this);
        this.handleSelectAutocomplete   = this.handleSelectAutocomplete.bind(this);
        this.restrictCharacters         = this.restrictCharacters.bind(this);
        this.handleDelete            = this.handleDelete.bind(this);
        this.handleAddition          = this.handleAddition.bind(this);
        this.handleDrag              = this.handleDrag.bind(this);
        this.handleSelectAutocompleteRunTime = this.handleSelectAutocompleteRunTime.bind(this);
        this.handleChangeSearchAutocompleteRunTime = this.handleChangeSearchAutocompleteRunTime.bind(this);
        this.triggerChangeAutocompleteRunTime = this.triggerChangeAutocompleteRunTime.bind(this);
        this.timer = null;
        this.renderItems = this.renderItems.bind(this);
        this.loadingFalse = this.loadingFalse.bind(this);

    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set state value
     * @param                 Nothing
     * @return                Nothing
     */
    setValue(value) {
        this.setState({
            value: value,
            hasError: this.hasErrors(value)
        });
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to clear state value
     * @param                 Nothing
     * @return                Nothing
     */
    clearValue() {
        this.setState({
            value: "",
            hasError: false
        });
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to get state value
     * @param                 Nothing
     * @return                Nothing
     */
    getValue() {
        return this.state.value;
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to get id from state 
     *                        only in case of autocomplete 
     * @param                 Nothing
     * @return                Nothing
     */
    getValueId() {
        return this.state.id;
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to check error in object  
     * @param                 Nothing
     * @return                Nothing
     */
    hasError() {
        let errors = this.state.hasError;
        if (this.props.config.hasOwnProperty('validations')){
            let validations = this.props.config.validations;  
            let showOnForm = this.props.config.showOnForm;      
            for(let key in validations){
                let validation = validations[key];
                if (validation.isRequired && !this.state.value && showOnForm) {
                    this.setState({
                        value: this.state.value,
                        hasError: this.hasErrors(this.state.value)
                    });
                    errors = validation.msg;
                }
            }
        }
        return errors;
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to check error in object  
     * @param                 Nothing
     * @return                Nothing
     */
    hasErrors(value) {
        if (this.props.config.hasOwnProperty('validations')){
            let validations = this.props.config.validations;    
            let showOnForm = this.props.config.showOnForm;    
            for(let key in validations){
                let validation = validations[key];
                if (validation.isRequired && !value && showOnForm) {
                    return validation.msg;
                }
                
                if((validation.pattern && validation.isRequired) || (validation.pattern && value!='' &&  !validation.isRequired && showOnForm)) {
                    const re = new RegExp(validation.pattern);
                    if(value.match(re) == null){
                        return validation.msg;
                    }
                }
            }
        }
        return false;
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from inputs  
     * @param                 Nothing
     * @return                Nothing
     */
    onValueChanged(event) {
        let value = event.target.value;

        let restrictType = (event.target.dataset.hasOwnProperty('restricttype') && event.target.dataset.restricttype != '') ? event.target.dataset.restricttype :'';
        let dataHandle = (event.target.dataset.hasOwnProperty('handle') && event.target.dataset.handle != '') ? event.target.dataset.handle :'';
        let status = restrictType!= ''  ? this.restrictCharacters(event.target.value,restrictType) : true;
        let oldValue = this.state.value;
        if(status || value == ''){
            this.setState({
                value: value,
                hasError: this.hasErrors(value),
            });
            
            this.props.onChange && this.props.onChange(value);
            
        }else{
            this.setState({
                value: oldValue,
                hasError: this.hasErrors(oldValue),
            });
            this.props.onChange && this.props.onChange(oldValue);
             
        }
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from inputs callback function  
     * @param                 Nothing
     * @return                Nothing
     */
    onTextValueChanged(that,name,callbackFunction) {
        let restrictType = (that.target.dataset.hasOwnProperty('restricttype') && that.target.dataset.restricttype != '') ? that.target.dataset.restricttype :'';
        let inputFormName = (that.target.dataset.hasOwnProperty('formname') && that.target.dataset.formname != '') ? that.target.dataset.formname :'';
        let value = that.target.value;
        let status = restrictType!= ''  ? this.restrictCharacters(value,restrictType) : true;
        let oldValue = this.state.value;
        if(status || value == ''){
            this.setState({
                value: value,
                hasError: this.hasErrors(value),
            });
            
            this.props.onChange && this.props.onChange(value);
            if(typeof callbackFunction != 'undefined' && callbackFunction !=''){
                callbackFunction(that,inputFormName);
            }
        }else{
            this.setState({
                value: oldValue,
                hasError: this.hasErrors(oldValue),
            });
            this.props.onChange && this.props.onChange(oldValue);
            that.target['value'] = oldValue;
             if(typeof callbackFunction != 'undefined' && callbackFunction !=''){
                callbackFunction(that,inputFormName);
            }
        }
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from Select  
     * @param                 Nothing
     * @return                Nothing
     */
    handleSelectChange(selectedOption, name, callbackFunction) { 
        this.setState({
            value: selectedOption.value,
            hasError: this.hasErrors(selectedOption.value)
        });
        this.props.onChange && this.props.onChange(selectedOption.value);
        if(typeof callbackFunction != 'undefined'){
            callbackFunction(selectedOption.value, selectedOption.label);
        }
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from Date  
     * @param                 Nothing
     * @return                Nothing
     */
    onDateValueChanged(fn, date) {
        this.setState({
            value: date,
            hasError: this.hasErrors(date)
        });
        this.props.onChange && this.props.onChange(date);

        if(typeof fn != 'undefined'){
            fn(date);
        }
    }

    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from Datetime
     * @param                 Nothing
     * @return                Nothing
     */
    onDateTimeValueChanged(date) {
        const dateTime = moment(date).format(this.dtFormat);
        this.setState({
            value: dateTime,
            hasError: this.hasErrors(dateTime)
        });
        this.props.onChange && this.props.onChange(dateTime);
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to get array diff for custom checkbox  
     * @param                 Nothing
     * @return                Nothing
     */
    getArrayDifference(currentKey, events){
        return events.filter(function (i) {
            return currentKey.indexOf(i) === -1;
        });
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from custom checkbox  
     * @param                 Nothing
     * @return                Nothing
     */
    onCheckBoxValueChanged(event) {
        let initialValue = this.state.value;
        let value = this.getArrayDifference(initialValue, event);
        
        this.setState({
            value: value,
            hasError: this.hasErrors(value)
        });
        this.props.onChange && this.props.onChange(value);
    }

    /**
     * @DateOfCreation        25 July 2018
     * @ShortDescription      This function is responsible to set values from multi checkbox  
     * @param                 Nothing
     * @return                Nothing
     */
    onMultiCheckBoxChanged(event, callbackFunction) {
        let value = event;
        this.setState({
            value: value,
            hasError: this.hasErrors(value)
        });
        this.props.onChange && this.props.onChange(value);

        if(typeof callbackFunction != 'undefined'){
            callbackFunction(value);
        }
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from file input  
     * @param                 Nothing
     * @return                Nothing
     */
    handleFileChange(event) { 
        let value = event.target.files[0];
        let fileName = event.target.files[0].name;

        let reader  = new FileReader();
        let file = event.target.files[0];

        var allowedImageExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if(!allowedImageExtensions.exec(fileName)){
            this.setState({
                value: value,
                fileName:fileName,
                hasError: this.hasErrors(value)
            });
        } else{
            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result,
                    value: value,
                    fileName:fileName,
                    hasError: this.hasErrors(value)
                });
            }
            
            reader.readAsDataURL(file)
        }

   
        this.props.onChange && this.props.onChange(value);
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to trigger file browser open  
     * @param                 Nothing
     * @return                Nothing
     */
    handleFileClick(name){   
        if(this.refs[name].value){
             this.refs[name].value = "";
        }
        this.refs[name].click();
        return false;
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to hangle change event on autocomplete  
     * @param                 Nothing
     * @return                Nothing
     */
    handleChangeAutocomplete(event, id) {
       const { value } = event.target;        
        this.setState({
            id:'',
            value: value,
            hasError: this.hasErrors(value)
        });
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from autocomplete  
     * @param                 Nothing
     * @return                Nothing
     */
    handleSelectAutocomplete(value, callbackFunction, id) {
        let dataValue = '';
    	dataValue = value.split('__');
        this.setState({
            id:dataValue[1],
            value: dataValue[0],
            hasError: this.hasErrors(dataValue[0])
        });

        if(typeof callbackFunction != 'undefined'){
            callbackFunction(dataValue[1], dataValue[0]);
        }
    }

    restrictCharacters(value,restrictType) {
        if(restrictType =='digitsOnly'){
             var restrictionType = /^\d+$/;
        }else if(restrictType =='digitsWithDotOnly'){
            var restrictionType = /^[0-9\.]+$/;
        }else{
            return true;
        }
        let character = value;
       
        if (restrictionType.test(character)) {
            return true;
        } else {
            return false;
        }
        
    }
    
    /**
     * @DateOfCreation        02 July 2018
     * @ShortDescription      This function is responsible to set values from autocomplete  
     * @param                 Nothing
     * @return                Nothing
     */
    handleSelectAutocompleteRunTime(value) {        
        let dataValue = '';
        dataValue = value.split('__');
        this.setState({
            id:dataValue[1],
            value: dataValue[0],
            hasError: this.hasErrors(dataValue[0])
        });
    }

    /**
     * @DateOfCreation        26 June 2018
     * @ShortDescription      This function is responsible to handle load filtered common all input after user stop writing
     * @return                Nothing
     */
    handleChangeSearchAutocompleteRunTime(event, name, callbackFunction){
        clearTimeout(this.timer)
        const { value } = event.target;        
        this.setState({
            id:'',
            value: value,
            loading:true,
            hasError: this.hasErrors(value)
        });
        if(typeof callbackFunction != 'undefined'){
            this.timer = setTimeout(this.triggerChangeAutocompleteRunTime.bind(null,value,name,callbackFunction),1000);
        }
    }

    /**
     * @DateOfCreation        26 June 2018
     * @ShortDescription      This function is responsible to call filter api
     * @return                Nothing
     */
    triggerChangeAutocompleteRunTime(value,name,callbackFunction){
        if(typeof callbackFunction != 'undefined'){
            callbackFunction(value, name);
            setTimeout(this.loadingFalse,1000);
        }
    
    }

    /**
    * @DateOfCreation        17 Aug 2018
    * @ShortDescription      This function is responsible to handle delete tags
    * @return                Nothing
    */
    handleDelete(i){
        const { value } = this.state;
        this.setState({
            value: value.filter((tag, index) => index !== i),
            hasError : this.hasErrors(value)
        });
    }

    /**
    * @DateOfCreation        17 Aug 2018
    * @ShortDescription      This function is responsible to add tags in state array
    * @return                Nothing
    */
    handleAddition(tag){
        this.setState({ 
            value: [...this.state.value,tag] 
        });
    }

    /**
    * @DateOfCreation        17 Aug 2018
    * @ShortDescription      This function is responsible to manage change tags position
    * @return                Nothing
    */
    handleDrag(tag, currPos, newPos) {
        const value     = [...this.state.value];
        const newTags   = value.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        this.setState({
            value:newTags,
            hasError: this.hasErrors(newTags)
        })
    }

    /**
    * @DateOfCreation        17 Aug 2018
    * @ShortDescription      This function is responsible to manage AutocompleteRunTime itme list show
    * @return                item object
    */
    renderItems(items){
        return items.map(function (item, index) {
             return item;
          });
    }

    /**
    * @DateOfCreation        17 Aug 2018
    * @ShortDescription      This function is manage to AutocompleteRunTime loading lable hide
    * @return                Nothing
    */
    loadingFalse(){
        let state = this.state;
        this.setState({ 
            ...state,
            loading:false
        });
    }

    render() {
        const config = this.props.config;
        const err = this.state.hasError;
        const inputData = this.props.inputData;
        const inputHandle = this.props.inputHandle;
        const inputFormName = this.props.inputFormName;
        switch (config.type) {
            
            case "hidden":
                return (
                     <input key={"fi_"+config.name} type="hidden" 
                               className={config.cssClasses.inputClass} 
                               name={config.name} 
                               value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                        /> 
                );
            case "number":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " " + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <input key={"fi_"+config.name} type="number" 
                               className={config.cssClasses.inputClass} 
                               name={config.name} 
                               value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                               placeholder={config.placeholder ? config.placeholder : config.title }
                               
                        /> 
                        <span className="help-block">{err}</span>
                    </div>
                );
            case "password":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <input key={"fi_"+config.name} type="password" 
                               className={config.cssClasses.inputClass} 
                               name={config.name} 
                               value={this.state.value}
                               onChange={this.onValueChanged.bind(this)}
                               placeholder={config.placeholder ? config.placeholder : config.title }
                        />
                        <span className="help-block">{err}</span>
                    </div>
                );
            case "customcheckbox":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " checkbox-listing "  + (err ? "has-error" : "")}>
                        <div key={"fl_"+config.name} className={config.cssClasses.labelClass}>{config.title}</div>
                        <div key={"fi_"+config.name} className={config.cssClasses.inputContainerClass}>
                            <CheckboxGroup
                                checkboxDepth={2} 
                                name={config.name}
                                value={this.state.value} 
                                onChange={this.onCheckBoxValueChanged} >                                        
                                {
                                    inputData && inputData.map(checkOptions => {
                                        return (
                                            <label key={checkOptions.value}><Checkbox className="option-input checkbox" value={checkOptions.value} /><span>{checkOptions.label}</span></label>
                                        )
                                    }) 
                                }
                            </CheckboxGroup>
                        </div>
                    </div>                    
                );
            case "checkbox":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " checkbox-listing "  + (err ? "has-error" : "")}>
                        <div key={"fl_"+config.name} className={config.cssClasses.labelClass}>{config.title}</div>
                        <div key={"fi_"+config.name} className={config.cssClasses.inputContainerClass}>
                            <CheckboxGroup
                                checkboxDepth={2} 
                                name={config.name}
                                value={this.state.value} 
                                onChange={(value, fn) => this.onMultiCheckBoxChanged(value, inputHandle)} >                                        
                                {
                                    inputData && inputData.map(checkOptions => {
                                        return (
                                            <label key={checkOptions.value}><Checkbox className="option-input checkbox multiple-checkbox" value={checkOptions.value} /><span>{checkOptions.label}</span></label>
                                        )
                                    }) 
                                }
                            </CheckboxGroup>
                        </div>
                    </div>                    
                );
            case "textarea":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <textarea key={"fi_"+config.name} 
                                  className={config.cssClasses.inputClass} 
                                  name={config.name} 
                                  value={this.state.value}
                                  onChange={this.onValueChanged.bind(this)}
                                  placeholder={config.placeholder ? config.placeholder : config.title }
                        />
                        <span className="help-block">{err}</span>
                    </div>
                );
            case "datetime":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <Datetime key={"fi_"+config.name} 
                                  name={config.name} 
                                  value={this.state.value}
                                  onChange={this.onDateTimeValueChanged.bind(this)}
                                  dateFormat="DD/MM/YYYY"
                                  timeFormat="hh:mm:ss"
                                  closeOnSelect={true}
                                  inputProps={{placeholder:config.placeholder ? config.placeholder : config.title , readOnly: true}}

                                  
                        />
                        <span className="help-block">{err}</span>
                        {/* More props, refer to: https://github.com/YouCanBookMe/react-datetime */}
                    </div>
                );
            case "date":
                 if(config.hasOwnProperty('disableDate') && config.disableDate ==='before'){
                            var valid = {maxDate:moment()}
                }else if(config.hasOwnProperty('disableDate') && config.disableDate ==='after'){
                     var valid = {minDate:moment()}
                }else if(config.hasOwnProperty('disableDate') && config.disableDate ==='weekend'){
                    var valid = {filterDate:this.isWeekday}
                }
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <DatePicker
                            selected={this.state.value}
                            dateFormat={config.format}
                            name={config.name}                            
                            onChange={this.onDateValueChanged.bind(this, inputHandle)}
                            peekNextMonth
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"                            
                            placeholderText={config.placeholder ? config.placeholder : config.title}
                            className="custom-datepicker"
                            {...valid}
                        />
                        <span className="help-block">{err}</span>
                        {/* More props, refer to https://github.com/YouCanBookMe/react-datetime */}
                    </div>
                );
            case "time":
                var valid = function( current ){
                            return current;
                        }; 
                if(config.hasOwnProperty('disableDate') && config.disableDate ==='before'){
                            var valid = function( current ){
                            return current.isBefore( );
                        };
                }else if(config.hasOwnProperty('disableDate') && config.disableDate ==='after'){
                    var yesterday = Datetime.moment().subtract(1, 'day');
                    var valid = function( current ){
                            return current.isAfter(yesterday);
                        };
                }else if(config.hasOwnProperty('disableDate') && config.disableDate ==='weekend'){
                    var valid = function( current ){
                        return current.day() !== 0 && current.day() !== 6;
                    };
                }
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <DatePicker
                            selected={this.state.value}
                            dateFormat={config.format}
                            name={config.name}                            
                            onChange={this.onDateValueChanged.bind(this, inputHandle)}
                            placeholderText={config.placeholder ? config.placeholder : config.title}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={config.timeInterval}
                            timeCaption={config.timeCaptionTitle}
                            className="custom-datepicker"
                        />
                        <span className="help-block">{err}</span>
                        {/* More props, refer to https://github.com/YouCanBookMe/react-datetime */}
                    </div>
                );
            case "select":
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                      <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                      <Select
                         key={"fi_"+config.name}
                         className={config.cssClasses.selectClass + " custom-select"}
                         options={inputData}
                         value={this.state.value}
                         name={config.name}
                         onChange={(value, name, fn) => this.handleSelectChange(value, config.name, inputHandle)}
                      />
                      <span className="help-block">{err}</span>
                    </div>
                );
            case "file":
                var hideDiv  = '';
                var imageUrl = this.state.imagePreviewUrl;
                if(this.state.imagePreviewUrl != undefined && this.state.imagePreviewUrl != ''){
                    imageUrl = this.state.imagePreviewUrl;

                } else if(this.state.value != undefined && this.state.value != '' ){
                    imageUrl = this.state.value;
                } 

                if(imageUrl != undefined && imageUrl != ''){
                    hideDiv = 'hide';
                }

                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <div key={"fg1_"+config.name} className={config.cssClasses.browseButtonGroupClass + " "  + (err ? "has-error" : "")}>
                            <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                            <input type="file" id="file" ref={config.name} style={{display: "none"}} accept={config.accept} onChange={this.handleFileChange}/>
                            <div className={"classNameroom-img"} onClick={this.handleFileClick.bind(null,config.name)}>
                                <div className="upload-img">
                                    <i className={hideDiv+ " fa fa-cloud-upload-alt fa-3x"}></i><br/>
                                    <div className="green-color">{(imageUrl != undefined && imageUrl != '' ) ? <img src={imageUrl} width='70% ' />:''}</div>
                                    <div className="green-color">{(this.state.fileName != '' && this.state.fileName != undefined) ? this.state.fileName:''}</div>
                                    <div>
                                        Click here to upload photo
                                    </div>
                                </div>
                            </div>
                            {/*<button className={config.cssClasses.inputClass}  >{config.placeholder}</button>*/}
                        </div>
                        <span className="help-block">{err}</span>
                    </div>
                );
            default :
                return (
                    <div key={"fg_"+config.name} className={config.cssClasses.inputGroupClass + " "  + (err ? "has-error" : "")}>
                        <label key={"fl_"+config.name} className={config.cssClasses.labelClass} htmlFor={config.name}>{config.title}</label>
                        <input key={"fi_"+config.name} type="text" 
                               className={config.cssClasses.inputClass} 
                               name={config.name} 
                               value={this.state.value == undefined ? '' : this.state.value}
                               placeholder={config.placeholder ? config.placeholder : config.title }
                               data-restricttype = {(config.hasOwnProperty('restrictType') && config.restrictType) ? config.restrictType : '' }
                               data-formname = {inputFormName !== undefined && inputFormName!== '' ? inputFormName :''}
                               onChange={(value, name, fn) => this.onTextValueChanged(value, config.name,inputHandle)}
                               maxLength = {config.maxLength != '' &&  config.maxLength!=null ? config.maxLength :''}
                               readOnly = {config.readOnly == undefined ? false :config.readOnly}
                        />
                        <span className="help-block">{err}</span>
                    </div>
                );
        }

    }
}
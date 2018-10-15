import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {configConstants} from "../../_constants";
import Websocket from 'react-websocket';
import { driverActions, headerActions } from '../../_actions';
import { utilityHelper } from '../../_helpers';
var markers = [];
var user_id = utilityHelper.getUserInfo().user_id;
var connection = new WebSocket('ws://18.188.210.10:3001/'+user_id+'/'+user_id+'/company');
var map;
var infoWindow = new google.maps.InfoWindow();
var currentLocation;
var icon;
class LiveMap extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.handleLiveCam = this.handleLiveCam.bind(this);
        this.state = {
            markerArray : [],
            loader : false,
            currentLat: null,
            currentLong: null,
        }

    }
    handleData(data) {
        let result = JSON.parse(data);
        let user_id = result.user_id;
        let broadcast = result.b;
        const index = this.state.markerArray.findIndex(
            i =>
                i.user_id == user_id
        );

        if(index != -1) {
            if(result.ol == 0){
                if(markers[user_id] != undefined){
                    markers[user_id].setMap(null);
                }
                markers[user_id] = undefined;
            } else {
                let arr = this.state.markerArray;
                arr[index].b = result.b;
                this.setState({
                    markerArray:arr
                }, function () {
                    var heading = google.maps.geometry.spherical.computeHeading(markers[user_id].getPosition(),new google.maps.LatLng(result.lat, result.long));
                    icon.rotation = heading;
                    markers[user_id].setIcon(icon);
                    markers[user_id].animateTo( new google.maps.LatLng(result.lat, result.long));
                });
            }
        } else {
            let arr = this.state.markerArray;
            arr.push(result);
            this.setState({
                markerArray:arr
            }, function () {
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        prevState.markerArray.map(function(item, i){
            if(typeof markers[item.user_id] == "undefined") {

                var userData = {};
                if(prevProps.userList != undefined && prevProps.userList.length > 0 && typeof prevProps.userList === 'object'){
                    const userDetailsKey = prevProps.userList.findIndex(
                        i =>
                            i.user_id == item.user_id
                    );

                    userData = prevProps.userList[userDetailsKey];
                }

                var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
                icon = {
                    path: car,
                    scale: .7,
                    strokeColor: 'white',
                    strokeWeight: .10,
                    fillOpacity: 1,
                    fillColor: '#40C4FF',
                    offset: '5%',
                    anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
                };

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.lat, item.long),
                    map: map,
                    title: item.user_id,
                    icon:icon
                });
                //Attach click event to the marker.
                (function (marker, item) {
                    google.maps.event.addListener(marker, "click", function (e) {
                        const index = prevState.markerArray.findIndex(
                            i =>
                                i.user_id == marker.title
                        );
                        var cam = "<a href='#' id='live_cam_" + item.user_id + "' name='" + item.user_id + "' >View live streaming</a >";
                        var html =
                            '<div class="vehicle-map-details" id="live_cam_outer_' + marker.title +'">'
                            +'<div class="vehicle-number">' + userData.first_name + ' '+userData.last_name+'</div>'
                            +'<div class="vehicle-status">Status: <span>Moving</span></div>'
                            +'<div class="vehicle-status">Duration: <span>2 minutes</span></div>'
                            + cam
                            +'</div>';
                        infoWindow.setContent(html);
                        infoWindow.open(map, marker);
                    }.bind(this));
                })(marker, item);
                markers[item.user_id] = marker;
            } else {
                console.log('');
            }
        });

        const { dispatch }  = this.props;
        if(this.props.isUserNotValid){
          dispatch(headerActions.logout());
        }
    }

    handleLiveCam(user_id){
        let streamingUrl = configConstants.API_BASE_PATH+'live-streaming/'+user_id;        
        document.getElementById('live_cam_outer_'+user_id).innerHTML="<iframe style='margin-left: 11px;' width='388px' height='266' margin='0' padding='0' src='"+streamingUrl+"' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen>Loading......</iframe>";               
    }

    componentDidMount(){

        const { dispatch }   = this.props;
        var userType = utilityHelper.getUserInfo().user_type;
        dispatch(driverActions.getUserList(0, -1, '', '', userType));

        /*if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    this.setState({ currentLat: position.coords.latitude, currentLong: position.coords.longitude},
                    function(){*/
                        map = new google.maps.Map(this.refs.mapContainer, {
                            zoom: 12,
                            center: { lat: 39.61792809, lng: -104.89796343 },
                            mapTypeId: 'terrain',
                            fullscreenControl:false
                        });

                        var controlUI = document.createElement('div');
                        controlUI.style.backgroundColor = '#fff';
                        controlUI.style.border = '2px solid #fff';
                        controlUI.style.borderRadius = '3px';
                        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
                        controlUI.style.cursor = 'pointer';
                        controlUI.style.marginTop = '9px';
                        controlUI.style.marginRight = '9px';
                        controlUI.style.textAlign = 'center';
                        controlUI.title = 'Click to view full screen map';
                        controlUI.class = 'gm-control-active gm-fullscreen-control';

                        // Set CSS for the control interior.
                        var controlText = document.createElement('div');
                        controlText.class = 'gm-control-active gm-fullscreen-control';
                        controlText.style.color = 'rgb(25,25,25)';
                        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
                        controlText.style.fontSize = '16px';
                        controlText.style.lineHeight = '38px';
                        controlText.style.paddingLeft = '5px';
                        controlText.style.paddingRight = '5px';
                        controlText.innerHTML = 'Full Screen';
                        controlUI.appendChild(controlText);
                        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(controlUI);
                        var elem = document.getElementById("card-block");
                        controlUI.addEventListener('click', function() {
                            var classa =document.getElementsByClassName('gm-fullscreen-control');
                            classa[0].click();
                        });

                        google.maps.event.addListener(map, 'idle', function(){
                            var bounds =  map.getBounds();
                            var ne = bounds.getNorthEast();
                            var sw = bounds.getSouthWest();

                            var msg = {
                                "action":"set_geofence",
                                "ne_lat":ne.lat(),
                                "ne_long":ne.lng(),
                                "sw_lat":sw.lat(),
                                "sw_long":sw.lng(),
                                "user_id":user_id
                            }
                            
                            setTimeout(function(){
                                connection.send(JSON.stringify(msg));
                            }, 3000); 
                        });

                        google.maps.event.addDomListener(this.refs.mapContainer, 'click', function(evt) {
                            if(evt.target.id == 'live_cam_'+evt.target.name) {
                                this.handleLiveCam(evt.target.name);
                                var msg = {
                                    "action":"send_brodcast_request",
                                    "from":'admin',
                                    "requested_user_id":evt.target.name,
                                }
                                connection.send(JSON.stringify(msg));
                            }
                        }.bind(this));
                    /*});
                },
                error => console.log(error)
            );
        }*/
    }
    render() {
        return (
            <div className="page-container">
                <SideMenu/>
                <HeaderContainer />

                <div className="main-content">
                    <div className="wrap-inner-content">
                        <div className="col-md-12">
                            <div className="inner-content">
                                <div className="row page-header">
                                    <div className="col-md-12">
                                        <h1 className="page-title">Live Map</h1>
                                        <div className="card map-holder">
                                            <div className="card-block" ref="mapContainer" />
                                            <Websocket url={'ws://18.188.210.10:3001/'+user_id+'/'+user_id+'/company'} onMessage={this.handleData.bind(this)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * @DateOfCreation        23 August 2018
 * @ShortDescription      This function is responsible to connect store to props
 * @return                View
 */
function mapStateToProps(state) {
    const { userList, submitted, error_message, isUserNotValid } = state.driverReducer;
    return {
        submitted,
        error_message,
        userList,
        isUserNotValid
    };
}

// Connection with State
const connectedLiveMap = connect(mapStateToProps)(LiveMap);
export { connectedLiveMap as LiveMap };


google.maps.Marker.prototype.animateTo = function(newPosition, options) {
    var defaultOptions = {
        duration: 1000,
        easing: 'linear',
        complete: null
    }
    var options = options || {};

    // complete missing options
    for (var key in defaultOptions) {
        options[key] = options[key] || defaultOptions[key];
    }

    // throw exception if easing function doesn't exist
    if (options.easing != 'linear') {
        if (typeof jQuery == 'undefined' || !jQuery.easing[options.easing]) {
            throw '"' + options.easing + '" easing function doesn\'t exist. Include jQuery and/or the jQuery easing plugin and use the right function name.';
            return;
        }
    }

    window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    // save current position. prefixed to avoid name collisions. separate for lat/lng to avoid calling lat()/lng() in every frame
    this.AT_startPosition_lat = this.getPosition().lat();
    this.AT_startPosition_lng = this.getPosition().lng();
    var newPosition_lat = newPosition.lat();
    var newPosition_lng = newPosition.lng();

    // crossing the 180° meridian and going the long way around the earth?
    if (Math.abs(newPosition_lng - this.AT_startPosition_lng) > 180) {
        if (newPosition_lng > this.AT_startPosition_lng) {
            newPosition_lng -= 360;
        } else {
            newPosition_lng += 360;
        }
    }

    var animateStep = function(marker, startTime) {
        var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = ellapsedTime / options.duration; // 0 - 1
        var easingDurationRatio = durationRatio;

        // use jQuery easing if it's not linear
        if (options.easing !== 'linear') {
            easingDurationRatio = jQuery.easing[options.easing](durationRatio, ellapsedTime, 0, 1, options.duration);
        }

        if (durationRatio < 1) {
            var deltaPosition = new google.maps.LatLng( marker.AT_startPosition_lat + (newPosition_lat - marker.AT_startPosition_lat)*easingDurationRatio,
                marker.AT_startPosition_lng + (newPosition_lng - marker.AT_startPosition_lng)*easingDurationRatio);
            marker.setPosition(deltaPosition);

            // use requestAnimationFrame if it exists on this browser. If not, use setTimeout with ~60 fps
            if (window.requestAnimationFrame) {
                marker.AT_animationHandler = window.requestAnimationFrame(function() {animateStep(marker, startTime)});
            } else {
                marker.AT_animationHandler = setTimeout(function() {animateStep(marker, startTime)}, 17);
            }

        } else {

            marker.setPosition(newPosition);

            if (typeof options.complete === 'function') {
                options.complete();
            }

        }
    }

    // stop possibly running animation
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(this.AT_animationHandler);
    } else {
        clearTimeout(this.AT_animationHandler);
    }

    animateStep(this, (new Date()).getTime());
}


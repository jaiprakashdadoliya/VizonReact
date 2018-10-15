import React from 'react';
import {Button, Modal, Alert, bsStyle } from 'react-bootstrap';
import moment from 'moment';
import { utilityHelper } from '../../_helpers';
import {Loading} from '../Common/Loading';
const user_details = utilityHelper.getUserInfo();
const s3_user_id= utilityHelper.getUserInfo().s3_user_id;

export const Messages = (props) => {
    let height = props.payload.containerHeight;
    return (
        <div className="main-content">
            <div className="wrap-inner-content">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="messaging">
                                <div className="inbox_msg">
                                    <div className="inbox_people">
                                        <div className="user_details">
                                            <div className="user_photo"><img src={user_details.profile_picture}/></div>
                                            <div className="user_name">{user_details.company_name} <span>Online</span></div>
                                        </div>
                                        <div className="chat_list_search">
                                            <i className={"fa fa-search"}></i>
                                            <input type="text" className="form-control" placeholder="Search"/>
                                        </div>
                                        <div className="inbox_chat" style={{maxHeight:height-190, minHeight:height-190}}>

                                            { props.payload.conversationList.length > 0 && props.payload.conversationList.map((list, index) => {
                                                let selected_class;
                                                if( props.payload.selected_tab == index){
                                                    selected_class = 'chat_list active'
                                                } else {
                                                    selected_class = 'chat_list'
                                                }
                                                return (
                                                    <a onClick={props.getConversationHistory.bind(null, index, list)} key={index}>
                                                        <div className={selected_class} >
                                                            <div className="chat_people">
                                                                <div className="chat_img">
                                                                    <img className="img-rounded" src={list.profile_picture}/>
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>{list.name}</h5>
                                                                    <p>{list.last_message}</p>
                                                                </div>
                                                                <div className="unread_text">
                                                                    99
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                )
                                            })
                                            }
                                        </div>
                                    </div>
                                    <div className="mesgs">
                                        <div className="selected_user">
                                            <div className="col-md-6 ">
                                                <div className="selected_user_name">
                                                    <img src={user_details.profile_picture}/>
                                                    <div className="chat-list-user-name">{user_details.company_name}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="user_icons">
                                                    <li><img src={require('../../assets/images/group.svg')}/></li>
                                                    <li><img src={require('../../assets/images/call.svg')}/></li>
                                                    <li><img src={require('../../assets/images/video.svg')}/></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="msg_history" id="msg_history" style={{height:height-208}}>
                                            <div id="top">
                                                { props.chatHistory.length > 0 && props.chatHistory.map((list, index) => {
                                                    if(list.user_id != s3_user_id){
                                                        return(
                                                            <div className="incoming_msg" key={index} id={"msg_"+index}>
                                                                <div className="incoming_msg_img"> <img src={props.payload.receiver_profile_picture} alt=""/> </div>
                                                                <div className="received_msg">
                                                                    <div className="received_withd_msg">
                                                                        <span className="time_date"> {moment(list.created_at).format('h:mm:ss a, MMMM Do YYYY, dddd')}</span>
                                                                        <p>{list.message}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    } else {
                                                        return(
                                                            <div className="outgoing_msg" key={index} id={"msg_"+index}>
                                                                <div className="outgoing_msg_img">
                                                                    <img src={user_details.profile_picture} alt=""/> </div>
                                                                <div className="sent_msg">
                                                                    <span className="time_date">{moment(list.created_at).format('h:mm:ss a, MMMM Do YYYY, dddd')} </span>
                                                                    <p>{list.message}</p>

                                                                </div>
                                                            </div>
                                                        )
                                                    }

                                                })
                                                }
                                            </div>
                                            <div id="bottom"></div>
                                        </div>

                                        <div className="type_msg" id="type_msg">
                                            <div className="input_msg_write">
                                                <div className="col-md-11 col-sm-11 rrp">
                                                    <input type="text" name="message" className="write_msg" placeholder="Type a message" onChange = {props.onInput} value={props.payload.message} />
                                                </div>
                                                <div className="col-md-1 col-sm-1">
                                                    <button className="msg_send_btn" type="button" onClick={props.sendMessage.bind(null, props.payload.conversation_id, props.payload.receiver_id)}> <i className={"fa fa-paper-plane"}></i></button>
                                                </div>
                                            </div>
                                        </div>
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
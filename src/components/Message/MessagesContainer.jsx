import React from 'react';
import { connect } from 'react-redux';
import {Messages} from './Messages';
import {HeaderContainer} from '../Header';
import {SideMenu} from '../SideMenu';
import {headerActions} from '../../_actions';
import {messagesActions} from './messagesActions';
import { utilityHelper } from '../../_helpers';
const user_id = utilityHelper.getUserInfo().user_id;
const s3_user_id= utilityHelper.getUserInfo().s3_user_id;
var firstRequest = true;
class MessagesContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            chatHistory:[],
            message: '',
            user_id: user_id,
            selected_tab:0,
            conversation_id:null,
            receiver_id:null,
            conversationList:[],
            containerHeight:window.innerHeight,
            page : 0,
            receiver_profile_picture:''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.onInput = this.onInput.bind(this);
        this.getConversationHistory = this.getConversationHistory.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.updateLastMessage = this.updateLastMessage.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.connection = new WebSocket('ws://18.188.210.10:3001/'+user_id+'/0/company');//Websocket connection object

    }

    /* Method responsible to mount just after render */
    componentWillMount(){
        const { dispatch } = this.props;
        dispatch(messagesActions.getConversationList(''));
        //Receiving message from socket
        this.connection.onmessage = function(evt){
            let received_msg = JSON.parse(evt.data);
            console.log(received_msg);
            let conversation_id = received_msg.conversation_id;
            let message = received_msg.message;
            let sendMessage = {'sender_id':received_msg.s, 'message':received_msg.message}
            //let requestData = {'conversation_id':conversation_id, 'user_id':received_msg.s, 'message':message}
            //dispatch(messagesActions.sendMessage(requestData));
            if(conversation_id == this.state.conversation_id){
                this.setState({chatHistory: [...this.state.chatHistory, sendMessage]});
                this.scrollToBottom();
            } else {
                this.updateLastMessage(conversation_id, message);
            }
        }.bind(this);
        //Receiving message from socket
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to redirect unauthorise users
     * @return                Redirect
     */
    componentDidUpdate(){
        const { dispatch }  = this.props;
        if(this.props.isUserNotValid){
            dispatch(headerActions.logout());
        }
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to receive props
     * @return                Redirect
     */
    componentWillReceiveProps(nextProps){
        if(nextProps.conversationHistory.length > 0){
            let prevHistory = this.state.chatHistory;
            let nextHistory = nextProps.conversationHistory;
            let chatHistory = nextHistory.concat(prevHistory);
            //let il = this.state.chatHistory.concat(nextProps.conversationHistory);
            this.setState({
                    ...this.state,
                    chatHistory:chatHistory,
                },function(){
                }
            );
            //this.setState({chatHistory:  nextProps.conversationHistory});
        }
        this.setState({conversationList:nextProps.conversationList}, function(){
            if(firstRequest && nextProps.conversationList[0] != undefined){
                const { dispatch } = this.props;
                let defaultUser = nextProps.conversationList[0];
                console.log(defaultUser);
                defaultUser.page = this.state.page;
                defaultUser.resource_type = 'web';
                dispatch(messagesActions.getConversationHistory(defaultUser));
                firstRequest = false;
                this.setState({
                    conversation_id:nextProps.conversationList[0].conversation_id,
                    receiver_id:nextProps.conversationList[0].user_id,
                    receiver_profile_picture: nextProps.conversationList[0].profile_picture,
                }, function(){
                    this.scrollToBottom();
                })

            }
        });
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to run things when component completely mounted
     * @return                Redirect
     */
    componentDidMount(){
        const list = document.getElementById('msg_history');
        list.addEventListener('scroll', this.handleScroll);
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to handle scroll on message history
     * @return                Redirect
     */
    handleScroll(ev) {
        if (document.getElementById('msg_history').scrollTop == 0 || document.getElementById('msg_history').scrollTop == 0)
        {
            let details = {};
            let currentPage = this.state.page;
            currentPage = currentPage+1;
            this.setState({
                page:currentPage
            }, function(){
                details.page = this.state.page;
                details.resource_type = 'web';
                details.conversation_id = this.state.conversation_id;
                const { dispatch } = this.props;
                dispatch(messagesActions.getConversationHistory(details));
            });
        }
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to send message
     * @return                Redirect
     */
    sendMessage(conversation_id, receiver_id){
        if (!this.state.message)
            return

        //sending message to socket
        let socketMessage = {"action":"send_message", message: this.state.message, s:s3_user_id, conversation_id:conversation_id, r:receiver_id}
        this.connection.send(JSON.stringify(socketMessage));


        //Updating last message on side menu
        this.updateLastMessage(conversation_id, this.state.message);

        //Sending message to chat thread
        let sendMessage = {'user_id':s3_user_id, 'message':this.state.message}
        this.setState({chatHistory: [...this.state.chatHistory, sendMessage]}, function(){
            this.scrollToBottom();
        });
        this.setState({message:''});
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to change input state
     * @return                Redirect
     */
    onInput(e) {
        this.setState({
            message: e.target.value,
        })
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      Get Conversation history
     * @return                Redirect
     */
    getConversationHistory(index, details){
        this.setState({
            selected_tab:index,
            conversation_id:details.conversation_id,
            receiver_id:details.user_id,
            receiver_profile_picture: details.profile_picture,
            chatHistory:[],
            page:0
        }, function(){
            this.scrollToBottom();
        })
        const { dispatch } = this.props;
        details.page = 0;
        details.resource_type = 'web';
        dispatch(messagesActions.getConversationHistory(details));
        this.scrollToBottom();
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to set view to bottom when receive or sending message
     * @return                Redirect
     */
    scrollToBottom() {
        if(this.state.chatHistory.length > 0){
           //document.getElementById('msg_'+parseInt(this.state.chatHistory.length-1)).scrollIntoView({ behavior: 'smooth' });
        }
    }

    /**
     * @DateOfCreation        01 October 2018
     * @ShortDescription      This function is responsible to last message in conversation
     * @return                Redirect
     */
    updateLastMessage(conversation_id, message) {
        const index = this.state.conversationList.findIndex(
            i => i.conversation_id == conversation_id);
        if(index != -1) {
            this.state.conversationList[index].last_message = message;
            this.setState(this.state);
        }
    }

    /* Responsible to render on the view */
    render() {
        return (
            <div className="page-container">
                <SideMenu/>
                <HeaderContainer />
                <Messages
                    driverList = {this.props.driverList}
                    payload                    = {this.state}
                    loader = {this.props.loader}
                    sendMessage = {this.sendMessage}
                    onInput={this.onInput}
                    chatHistory = {this.state.chatHistory}
                    conversationList = {this.props.conversationList}
                    getConversationHistory = {this.getConversationHistory}
                />
            </div>
        )
    }
}


/**
 * @DateOfCreation        01 October 2018
 * @ShortDescription      This function is responsible to connect store to props
 * @return                View
 */
function mapStateToProps(state) {
    const { driverList, submitted, error_message, isUserNotValid } = state.vehicleAssignmentReducer;
    const { conversationList, conversationHistory} = state.messagesReducer;
    return {
        submitted,
        error_message,
        driverList,
        isUserNotValid,
        conversationList,
        conversationHistory
    };
}

// Connection with State
const connectedMessagesContainer = connect(mapStateToProps)(MessagesContainer);
export { connectedMessagesContainer as MessagesContainer };


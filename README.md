import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EventSelectionTopBar from '../eventSelectionTopBar/EventSelectionTopBar';
import {X_DARK_FONT} from '../../../assets/colors/Colors';

import OngoingEventCarousel from './ongoingEvents/OngoingEventCarousel';
import SubscriptionList from './subscriptionList/SubscriptionList';
import {subscribeToUserSubscriptions} from '../../../actions/eventSelectionActions/subscribeToUserEventSubscriptions';
import {unsubscribeToUserEventSubscriptions} from '../../../actions/eventSelectionActions/unsubscribeToUserEventSubscriptions';
import {useDispatch} from 'react-redux';
import * as EventSelectionActions from '../../../actions/eventSelectionActions/_index';
// mentionning the types of the function properties
EventSubscriptions.propTypes = {
    userEventList: PropTypes.object,
    selectEventList: PropTypes.func.isRequired
};

/**
 * List of events
 * @param {Object} props
 * @param {Object} props.userEventList
 * @param {Function} props.selectEventList
 * @return {JSX.Element}
 * @constructor
 */
function EventSubscriptions(props) {
    //destructuring the props into 2  variables
    const {userEventList, selectEventList} = props;
    //using the state inside a functional componant
    const [ongoingEvents, setOngoingEvents] = useState([]);
    const [notOngoingEvents, setNotOngoingEvents] = useState([]);
     //use dispatch for calling the redux actions
    const dispatch = useDispatch();
   //useeffect is called once when the component mount 
    useEffect(() => {
        //calling the eventselectionactions to subscribe and to get the user event list
        dispatch(EventSelectionActions.subscribeToUserEventSubscriptions());
   // the return call is used to clean up after the component unmounts 
        return () => {
            //unsubscribing to the user event after the component unmounts
            dispatch(EventSelectionActions.unsubscribeToUserEventSubscriptions());
        };
    }, []);
  //this use effect is called when the userEventList is updated by the first use effect
    useEffect(() => {

        const newOngoingEvents = [];
        const newNotOngoingEvents = [];
        //for each element in the userEvent list if the int value of the starting date is less than the
        //current date and the endingdate is higher or equal than the current date it pushes the event in the new on going events list
        // or else it goes in the newnotongoingevents list
        userEventList.data.forEach((event) =>
            parseInt(event['startingDate']) <= Date.now() && parseInt(event['endingDate']) >= Date.now() ?
                newOngoingEvents.push(event) : newNotOngoingEvents.push(event)
        );
        //setting the state of the variables 
        setOngoingEvents(newOngoingEvents);
        setNotOngoingEvents(newNotOngoingEvents);
    }, [userEventList]);

    return (
        //the Container is a styled component 
        <Container>
             {//the eventSelectionTopBar is a component to select an event
}
            <EventSelectionTopBar
                underlined={1}
                selectEventList={selectEventList}
                selectEventSubscriptions={null}
            />
         {
             //if ongoing event contains events it displays a carousel of the different ongoing events
         }
            {ongoingEvents.length > 0 && <OngoingEventCarousel ongoingEvents={ongoingEvents}/>}
            {//a subscription list of all the  not ongoingEvents
}
            <SubscriptionList notOngoingEvents={notOngoingEvents}/>

        </Container>
    );
}

export default EventSubscriptions;
//the diffintion of the container component
const Container = styled.View`
    flex: 1;
    display: flex;
    background-color: ${X_DARK_FONT};
`;

// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'
import { Link } from 'react-router'
// style
import style from './style.js'
import 'bootstrap/dist/css/bootstrap.css'
import '../../css/font-awesome.min.css'
import '../../css/fonts.css'
// components
import Form from '../Form'
import ReloadingGraphic from '../ReloadingGraphic'
import DashboardLeftSidebar from '../DashboardLeftSidebar'
import DashboardHeader from '../DashboardHeader'
import UserProfileMenu from '../UserProfileMenu'
import ChatBox from '../ChatBox'
import { Label, Table, Col, Tabs, Tab } from 'react-bootstrap'
// exports
export class TimeClock extends Form {
  constructor(props) {
    super(props)
		this.state = {showhide:'myProfile', profile:false}
		
  }
  componentWillMount() {
    const { dispatch, session } = this.props
    dispatch({
      type: 'GET_TIME_CARD',
       payload: {
		loginToken: session.loginTokenDetails.token
      }
    })
	dispatch({
		type: 'TIME_CARD_STARTED'
	})
  }
  editProfile(field, e) {
	if (field == 'myProfile') {
        this.setState({showhide:'myProfile'})
      } 
    if (field == 'timeClock') {
        this.setState({showhide:'timeClock'})
      }
    if (field == 'myPayRoll') {
        this.setState({showhide:'myPayRoll'})
      }
    if (field == 'empDocuments') {
        this.setState({showhide:'empDocuments'})
      }
    if (field == 'trainingCenter') {
      this.setState({showhide:'trainingCenter'})
    }
  }   
	getTIme(data) {
    var d = new Date(data)
    var hours = d.getHours()
    var minutes = d.getMinutes()
    var ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0'+minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    
    return strTime
  }
  getTImeDifference(startTime, endTime) {
    var startTime = new Date(startTime)
    var endTime = new Date(endTime)
    var hourDiff = endTime - startTime
    var minDiff = hourDiff / 60 / 1000 //in minutes
    var hDiff = hourDiff / 3600 / 1000 //in hours'
    var hours = Math.floor(hDiff)
    var minutes = minDiff - 60 * hours
    var timeDiff = hours + ':' + minutes
    
    return timeDiff
  }
  render() {
  const { form } = this.props
  var timeCardData = form.data
  var userTimeCard = timeCardData.userTimeCard
  var timeCardBreak = timeCardData.timeCardBreak
  var checkIn = null, checkOut = null, timeCardDate = null
  if (timeCardData.length != 0) {	
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]
    var checkInData = userTimeCard.clock_in
    var checkOutData = userTimeCard.clock_out
    var universalDate = new Date(userTimeCard.date)
    var date = universalDate.getDate()
    var month = monthNames[universalDate.getMonth()]
    var year = universalDate.getFullYear()
    timeCardDate = month + ' ' + date + ', ' + year
    checkIn = this.getTIme(checkInData)
    checkOut = this.getTIme(checkOutData)
    var breakData = []
    if (timeCardBreak.length != 0) {
      for (var key in timeCardBreak) {
        var keyValue = key
        var row  = timeCardBreak[key]
        var startTIme = this.getTIme(row.start_time)
        var endTIme = this.getTIme(row.end_time)
        var timeDiff = this.getTImeDifference(row.start_time, row.end_time)
        breakData.push(<timeSection className='col-xs-12 col-sm-11 col-md-11 pull-right' style={[ style.colbreak, style.padding0, style.pullRight]}>
          <time-brk1 style={style.breakClass}>
            <time style={style.graybg}>{startTIme}</time>
            <beginbreakicon style={style.beginbreakicon}> &nbsp;</beginbreakicon>
          </time-brk1>
          <time-brk2 style={style.breakClass}>
            <time style={style.graybg}>{endTIme}</time>
            <endbreakicon style={style.endbreakicon}> &nbsp;</endbreakicon>
          </time-brk2>
          <equal style={style.equal}> &#61;  </equal>
          <time-brk3 style={style.breakLast}>
            <time style={style.graybgLast}>00:00</time>
          </time-brk3>
        </timeSection>
        )
      }
    }
  }
  
  return (
		<wrapper style = {[style.wrapper, style.displayBlock]} >
		{form.isSubmitting == true ? <loader style={style.loader}><ReloadingGraphic customStyle = {style.loaderImage} /></loader>:''}
			<DashboardHeader/>
          <content-section style = {style.contentSection} >
						<contentTop className='container' style = {style.contentTop}>
							<rowDiv className="row">
                <DashboardLeftSidebar/>
								<contentSectionMiddle style = {[style.contentSectionMiddle,style.marginleft20]} className = 'col-xs-12 col-sm-8  col-md-4'>
								<UserProfileMenu/> 

        <timeCardWrapper style={style.timeWrapper} className = 'col-xs-12 col-sm-12 col-md-8'>
        <time-card style={style.clockWrapper}>
        <headerSection className='col-xs-12 col-sm-8 col-md-12'>
        <timeCardHeader style={style.h1}>Time Card for {timeCardDate}</timeCardHeader>
        </headerSection>
        <clear style={style.clr}></clear>
        <innerBackground style={style.innerbg} className='col-sm-11 col-md-10'>
        <nameSection className='col-xs-12 col-sm-12 col-md-12' style={style.margin0}>
        <name-header style={style.h2}> John Smith</name-header>
        </nameSection>
        <clockSection className='col-xs-12 col-sm-12 col-md-12' style={[style.colCentered, style.padding0, style.borderTop]}>
        <clockIn style={style.blue}> {checkIn}</clockIn>
        <clock style={style.clocktxt}>Clock In</clock>
        </clockSection>
        {breakData}
        <clockSection className="col-xs-12 col-sm-12 col-md-12" style={[style.colCentered, style.padding0]}>
        <clockOut style={style.blue}>{checkOut}</clockOut>
        <clock style={style.clocktxt}>Clock Out</clock>
        </clockSection>
        </innerBackground>
        </time-card>
        </timeCardWrapper>
        </contentSectionMiddle>
        </rowDiv>
		<ChatBox />
        </contentTop>
        </content-section>	
      </wrapper>
    )
  }
}

TimeClock.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session,
    form: state.timeCard
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(TimeClock))

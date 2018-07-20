
const style = {
  displayBlock : {
    display: 'block'
  },
  thanks: {
    backgroundColor: '#2197f0',
    padding: '30px 0',
    fontWeight: '400'
  },
  heading: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '20px',
    textAlign: 'center'
  },
  formCol: {
    marginBottom: '10px'
  },
  leftCol: {
    float: 'left'
  },
  btnLogin: {
    backgroundColor: '#7dc855'
  },
  clr: {
    clear: 'both',
    display : 'block'
  },
  qusCol: {
    background: 'rgb(43,159,247) url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/backgrounds/onboard-bg.jpg) no-repeat',
    backgroundSize: '100% 50%',
    paddingTop: '50px',
    paddingBottom: '20px'
  },
  content : {
    width: '80%',
    margin: '0 auto'
  },
  left: {
    width: '40%',
    float: 'left',
    marginLeft: '14.5%',
    padding:'15px'
  },
  right: {
    width: '40%',
    float: 'left',
    padding:'15px'
  },
  next: {
    padding: '10px 0',
    marginBottom: '40px',
    textAlign: 'right'
  },
  col35: {
    width: '35%'
  },
  col65: {
    width: '65%'
  },
  col50: {
    width: '50%'
  },
  fieldsContainer: {
    display: 'flex',
    flex: '1 1 100%',
    alignItems: 'flex-start'
  },
  dropDownList: {
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: 'white',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    WebkitBoxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
    WebkitTransition: 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
    OTransition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
    transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
    width: '100%'
  },
  skipButton: {
    marginLeft:'28px'
  },
  permissions: {
    wrapper: {
      backgroundColor: '#248bd8',
      borderRadius: '4px',
      marginLeft: '14.5%',
      padding: '10px',
      width: '74.5%',
      marginTop: '10px',
      display: 'block'
    },
    header: {
      wrapper: {
        paddingBottom: '10px'
      },
      h2: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: '24px',
        float: 'left',
        width: '50%'
      }
    },
    branchesList:{
      float: 'right',
      width: '50%'
    },
    level: {
      backgroundColor: '#2298f0',
      padding: '10px'
    },
    circle: {
      backgroundColor: '#248bd8',
      borderRadius: '100%',
      height: '52px',
      marginLeft: '28px',
      marginBottom: '5px',
      width: '52px',
      display: 'inline-block'
    },
    circleActive: {
      backgroundColor: '#fff'
    },
    description: {
      color: '#fff',
      fontSize: '15px',
      textAlign: 'center',
      display: 'block'
    },
    iconCommon: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center'
    },
    reportIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/reports.png)',
    },
    reportActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/reportsActive.png)',
      backgroundColor: '#fff'
    },
    billingIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/billing.png)',
    },
    billingActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/billingActive.png)',
      backgroundColor: '#fff'
    },
    hrIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/hr.png)',
    },
    hrActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/hrActive.png)',
      backgroundColor: '#fff'
    },
    clinicalIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/clinical.png)',
    },
    clinicalActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/clinicalActive.png)',
      backgroundColor: '#fff'
    },
    salesIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/sales.png)',
    },
    salesAvtiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/salesActive.png)',
      backgroundColor: '#fff'
    },
    inventoryIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventory.png)',
    },
    inventoryActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/inventoryActive.png)',
      backgroundColor: '#fff'
    },
    accountingIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/accounting.png)',
    },
    accountingActiveIcon: {
      backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/lyferx-web/images/icons/accountingActive.png)',
      backgroundColor: '#fff'
    },
    allAccess: {
      padding: '20px 0 10px 37px',
      display: 'block',
    },
    accessHeading: {
      color: '#fff',
      display: 'inline-block',
      float: 'left',
      fontSize: '16px',
      lineHeight: '1.8',
      padding: '0 10px 0 0'
    },
    labelSwitch: {
      position: 'relative',
      display: 'inline-block',
      width: '50px',
      height: '24px',
      margin: '10px 0px 5px 0px'
    },
    switchCheckbox: {
      display:'none',
    },
    slider: {
      position: 'absolute',
      cursor: 'pointer',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: '#ccc',
      WebkitTransition: '.4s',
      transition: '.4s'
    },
    sliderBefore: {
      position: 'absolute',
      content: '\'\'',
      height: '16px',
      width: '16px',
      left: '4px',
      bottom: '4px',
      backgroundColor: 'white',
      WebkitTransition: '.4s',
      transition: '.4s',
      borderRadius: '100%'
    },
    round: {
      borderRadius: '34px',
    },
    roundBefore: {
      borderRadius: '50%'
    },
    checked: {
      backgroundColor: 'rgb(55, 176, 71)'
    },
    checkedBefore: {
      WebkitTransform: 'translateX(26px)',
      MsTransform: 'translateX(26px)',
      transform: 'translateX(26px)'
    },
    accessTable: {
      background: '#fff',
      padding: '10px',
      boxSizing: 'border-box',
      display:'block'
    },
    li: {
      boxSizing: 'border-box',
      display: 'inline-block',
      width: '14%'
      
    },
    branchSection: {
      marginTop: '10px',
      marginBottom: '5px',
      display: 'flex'
    },
    button: {
      float: 'right',
      position: 'relative',
      top: '15px',
      padding: '6px 25px'
    },
    table: {
      width: '100%'
    },
    td: {
      padding: '10px 30px'      
    },
    center:{
      textAlign: 'center',
      width: '10%'
    },
    tr: {
      borderBottom:'1px solid #f2f2f3'
    },
    addBranches: {
      width: '70%',
      height: '55px',
      overflowY: 'auto',
      background: '#fff',
      borderRadius: '4px',
      margin: '10px 10px 10px 0px',
      padding: '4px 10px'
    },
    branchWrapper: {
      padding: '5px 5px 0px 5px',
      color: '#248bd8',
      width: 'auto',
      margin: '5px 5px',
      textAlign: 'center',
      float: 'left',
      height: '20px',
      borderRadius: '3px',
      fontWeight: 'normal'
    },
    closebtn: {
      marginLeft: '7px',
      color: '#248bd8',
      fontWeight: 'bold',
      float: 'right',
      fontSize: '22px',
      lineHeight: '11px',
      cursor: 'pointer',
      transition: '0.3s'
    },
    branchButton: {
      marginLeft: '15px',
      marginTop: '5px',
      marginRight: '13px',
      marginBottom: '33px'
    }
  },
		employee: {
			added:{
				backgroundColor: '#248bd8',
				borderRadius: '4px',
				marginLeft: '14.5%',
				padding: '10px',
				width: '74.5%',
				marginTop: '30px',
				display: 'block'
			},
			head:{
				display: 'block'
			},
			permission:{
				display: 'block',
				fontSize: '21px',
				fontWeight: 'normal',
				color: '#fff',
				paddingBottom: '10px',
				float: 'inherit'
			},
			tableAdd:{
				display: 'block',
				background: '#fff',
				padding: '10px'
			},
			table: {
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: '0',
        display: 'block',
        fontSize: '12px'
      },
      thead: {
        width: '100%'
      },
      tbody: {
        maxHeight: '500px',
        overflowY: 'auto'
      },
      tr: {
        display: 'flex',
        flex: '1 1 100%',
        justifyContent: 'space-between',
        borderBottom: '1px solid #e7e9ed',
      },
      td: {
        width: '25%',        
        textAlign: 'left',
        padding: '20px 10px',
        wordWrap: 'break-word',
        color: '#354052'
      },
      th: {
        width: '25%',
        textAlign: 'left',
        padding: '10px',
        color: '#7f8fa4'
      },
      right:{
        textAlign: 'right'
      },
      btnWrap: {
        marginLeft: '14.5%',
				width: '74.5%'
      }
		},
    btnAdj: {
      marginRight: '15px'
    }
}

export default style

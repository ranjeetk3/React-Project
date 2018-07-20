// dependencies
import React, { Component, PropTypes } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import Radium from 'radium'

// style
import style from './style.js'
// components
import Form from '../Form'
import Button from '../Button'
import FormInput from '../FormInput'
import FormBlock from '../FormBlock'
import FormLine from '../FormLine'
// exports

var imageArray = []
var preImageCounter = 0
export class ImageComponent extends Component {
	constructor(props) {
		super(props)
		var self = this
		this.state = ({imagePreviewUrl:'', imgArray:[]})
		this.removeImage = this.removeImage.bind(this)
	}
	componentWillReceiveProps() {
		var self = this
		imageArray = []
		self.setState({imgArray:imageArray})
	}
	handleImage(e) {
		var self = this
		let reader = new FileReader()
		var files = e.target.files
		for (var i = 0; i < files.length; i++) {
            var file = files[i];
            //Only pics
            if (!file.type.match('image')) continue;
            var picReader = new FileReader();
            picReader.addEventListener("load", function (event) {
                var picFile = event.target
                imageArray.push(picFile.result)
				self.setState({imgArray:imageArray})
            });
            //Read the image
            picReader.readAsDataURL(file)
        }
	}
	removeImage(imageIndex) {
		var self = this
		//var imageArray = imageArray
		var remainingImagesArray = imageArray.splice(imageIndex, 1)
		self.setState({imgArray:imageArray})
	}
  render()
  {
	var self = this
	const { previouseImages } = self.props
	var imageListArray = []
	if (imageArray.length == 0) {
		imageListArray = imageArray = previouseImages
	} else {
		imageListArray = self.state.imgArray
	}
	var imgList = []
	imageListArray.map(function(data, index){
		imgList.push(<inputWrapper><addedImages style={style.image}> <img src={data} style={style.dragimg}/> <span style={style.cross} key = {index} onClick={self.removeImage.bind(this, index)}> x </span></addedImages> <input type="hidden" value={data}/> </inputWrapper>)
	})
	return (
	<uploaderArea>
		<imageArea style={style.imageArea} onChange={(e) => { self.handleImage(e) }}>
		<uploadBox style={style.uploadText}>
			<imageField style={style.inputFile}>
			<upload style = {style.upload}>
				<input type="file" name="image" id="filePhoto" multiple="multiple" style = {[style.input, style.displayBlock]}/>
			</upload>
			</imageField>
			<fileText style={style.fileText}> Drag an image here or browse for an image to upload.</fileText>
			</uploadBox>
			<imagesList style={style.imagesList}>
				{imgList}
			</imagesList>
		</imageArea>
	</uploaderArea>
	)
}
}
ImageComponent.propTypes = {
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

// the default export is the redux-connected component
export default connect(mapStateToProps)(Radium(ImageComponent))

import React, { Component } from 'react'

export class UploadImages extends Component {

    state={
        profileImg: 'https://source.unsplash.com/random'
    }

    render() {
        const {profileImg} = this.state
        return (
            <div className="">
                <h1>Upload image</h1>
                <div className="img-holder">
                    <img src={profileImg} alt="" id="img"/>
                </div>
                <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile"/>
                <label className="btn btn-primary" for="customFile">Choose file</label>
                </div>
            </div>
        )
    }
}

export default UploadImages


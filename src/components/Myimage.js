import React, { useState } from 'react'

const Myimage = ({ img = [{ url: " " }] }) => {
    const [mainImage, setMainImage] = useState(img[0]);

    return (
        <div className='row gx-2'>
            <div className='col-3'>
                {
                    img.map((curElm, index) => {
                        return (
                            <img
                                src={curElm.url}
                                alt={curElm.filename}
                                className="box-image-style"
                                key={index}
                                onClick={() => setMainImage(curElm)}
                            />
                        )
                    })
                }
            </div>
            <div className='col-9 single-image-main'>
                <img src={mainImage.url} alt={mainImage.filename} />
            </div>
        </div>
    )
}

export default Myimage

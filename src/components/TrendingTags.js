import React from 'react'

export default function TrendingTags() {
  return (
    <>
    <div className="TrendingTags">
        <div className="TrendingTags-header">
            <span>Explore Tags</span>
            <a>More Tags +</a>
        </div>
        {/* <div className='MoreTags'>
        <a>More Tags +</a>
        </div> */}
        <div className="TrendingTags-container">
            <div className='Tag' href='#'>
                <div className='Tag-title'>
                    <img src='https://i.imgur.com/LjiOCqJ_d.jpg?maxwidth=800&shape=thumb&fidelity=high'></img>
                    <div className='Tag-name'>Ocean</div>
                    <div className='Tag-post'>
                        <p>FEATURED -
                        6,115
                        Posts</p>
                    </div>
                </div>
            </div>
            <div className='Tag' href='#'>
                <div className='Tag-title'>
                    <img src='https://i.imgur.com/v2L4vnj_d.jpg?maxwidth=800&shape=thumb&fidelity=high'></img>
                    <div className='Tag-name'>Wine</div>
                    <div className='Tag-post'>
                        <span>FEATURED -
                        6,115
                        Posts</span>
                    </div>
                </div>
            </div>
            <div className='Tag' href='#'>
                <div className='Tag-title'>
                    <img src='https://i.imgur.com/m7y2XsW_d.jpg?maxwidth=800&shape=thumb&fidelity=high'></img>
                    <div className='Tag-name'>Books</div>
                    <div className='Tag-post'>
                        <span>FEATURED -
                        6,115
                        Posts</span>
                    </div>
                </div>
            </div>
            <div className='Tag' href='#'>
                <div className='Tag-title'>
                    <img src="https://i.imgur.com/HMZMNek_d.jpg?maxwidth=800&shape=thumb&fidelity=high"></img>
                    <div className='Tag-name'>Nature</div>
                    <div className='Tag-post'>
                        <span>FEATURED -
                        6,115
                        Posts</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    </>
    
  )
}

import styled from 'styled-components'
import { useState } from 'react';


const Main = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    return ( 
    <Container>
        <ShareBox>
        Share
        <div>
            <img src='/images/user.svg' alt=''  />
            <button>Start a post</button>
        </div>

        <div>
        <div>
        <input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button onClick={() => document.getElementById('fileInput').click()}>
            <img src='/images/photo-icon.svg' alt="" />
            <span>Photo</span>
  </button>

  {/* <div>
  <button onClick={handleFileUpload}>
    <img src='/images/photo-icon.svg' alt="" />
    <span>Photo</span>
  </button>
</div> */}
  
</div>

<div>
<input
            type="file"
            id="fileInput"
            style={{ display: 'none' }}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button onClick={() => document.getElementById('fileInput').click()}>
            <img src='/images/video-icon.svg' alt="" />
            <span>Video</span>
  </button>
  </div>

            <button>
                <img src='/images/event-icon.svg' alt='' />
                <span>Event</span>
            </button>

            <button>
                <img src='/images/article-icon.svg' alt='' />
                <span>Write article</span>
            </button>
        </div>
        </ShareBox>
        <div>
            <Article>
                <SharedActor>
                    <a>
                        <img src='https://i.ibb.co/vLPNsS1/how.jpg' alt='' />
                        <div>
                            <span>Yogesh</span>
                            <span>Inception</span>
                            <span>11-09-23</span>
                        </div>
                    </a>
                    <button>
                        <img src='/images/ellipsis.svg' alt='' />
                    </button>
                </SharedActor>
                <Description>"Christopher Nolan's 'Inception' is a mind-bending masterpiece, <br></br>
                seamlessly weaving intricate storytelling with stunning visuals, leaving <br></br> 
                audiences captivated by its layers of dreams and reality."</Description>
                <SharedImg>
                    <a>
                        <img src='https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMovieGraphicArtPoster5.jpg?v=1685581998' alt='' />
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' 
                            alt='' />
                            <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'  
                            alt=''/>
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                            2 comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img src='/images/like-icon.svg' alt='' />
                    <span>Like</span>
                </button>
                <button>
                    <img src='/images/comment-icon.svg' alt='' />
                    <span>Comments</span>
                </button>
                <button>
                    <img src='/images/share-icon.svg' alt='' />
                    <span>Share</span>
                </button>
                <button>
                    <img src='/images/send-icon.svg' alt='' />
                    <span>Send</span>
                </button>
                </SocialActions>
            </Article>
            <Article>
                <SharedActor>
                    <a>
                        <img src='https://i.ibb.co/kmpDQ0C/Screenshot-2024-01-10-214015.png' alt='' />
                        <div>
                            <span>Dakshu</span>
                            <span>Into The Wild</span>
                            <span>11-09-23</span>
                        </div>
                    </a>
                    <button>
                        <img src='/images/ellipsis.svg' alt='' />
                    </button>
                </SharedActor>
                <Description>"Sean Penn's 'Into the Wild' is a poignant exploration and self-discovery,<br></br> 
                beautifully capturing the human spirit's pursuit of authenticity and connection."</Description>
                <SharedImg>
                    <a>
                        <img src='https://th.bing.com/th/id/R.9cc86b27318f5a9e63ffa451809a5d48?rik=BHKYubITC37lig&riu=http%3a%2f%2finsessionfilm.com%2fwp-content%2fuploads%2f2013%2f08%2fInto-the-Wild.jpg&ehk=auNbVHIMEUg2iqKEhuIVKszzX%2b8J0aeec8%2fqblrk0Io%3d&risl=&pid=ImgRaw&r=0' alt='' />
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' 
                            alt='' />
                            <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'  
                            alt=''/>
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                            2 comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img src='/images/like-icon.svg' alt='' />
                    <span>Like</span>
                </button>
                <button>
                    <img src='/images/comment-icon.svg' alt='' />
                    <span>Comments</span>
                </button>
                <button>
                    <img src='/images/share-icon.svg' alt='' />
                    <span>Share</span>
                </button>
                <button>
                    <img src='/images/send-icon.svg' alt='' />
                    <span>Send</span>
                </button>
                </SocialActions>
            </Article>
            <Article>
                <SharedActor>
                    <a>
                        <img src='https://i.ibb.co/YDvDw9p/Screenshot-2024-01-10-213749.png' alt='' />
                        <div>
                            <span>Lovish</span>
                            <span>Being a child</span>
                            <span>11-09-23</span>
                        </div>
                    </a>
                    <button>
                        <img src='/images/ellipsis.svg' alt='' />
                    </button>
                </SharedActor>
                <Description>Description</Description>
                <SharedImg>
                    <a>
                        <img src='https://th.bing.com/th/id/OIP.p1b4pvf-XUM_TnfhaYPuqwHaFH?rs=1&pid=ImgDetMain' alt='' />
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' 
                            alt='' />
                            <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'  
                            alt=''/>
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                            2 comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img src='/images/like-icon.svg' alt='' />
                    <span>Like</span>
                </button>
                <button>
                    <img src='/images/comment-icon.svg' alt='' />
                    <span>Comments</span>
                </button>
                <button>
                    <img src='/images/share-icon.svg' alt='' />
                    <span>Share</span>
                </button>
                <button>
                    <img src='/images/send-icon.svg' alt='' />
                    <span>Send</span>
                </button>
                </SocialActions>
            </Article>

            <Article>
                <SharedActor>
                    <a>
                        <img src='https://i.ibb.co/4Kn8bXj/Screenshot-2024-01-10-214625.png' alt='' />
                        <div>
                            <span>Yogesh</span>
                            <span>Into The Wild</span>
                            <span>11-09-23</span>
                        </div>
                    </a>
                    <button>
                        <img src='/images/ellipsis.svg' alt='' />
                    </button>
                </SharedActor>
                <Description>Description</Description>
                <SharedImg>
                    <a>
                        <img src='https://th.bing.com/th/id/OIP.lvRu5amkOl6jiCuPGnuBjwHaLH?rs=1&pid=ImgDetMain' alt='' />
                    </a>
                </SharedImg>
                <SocialCounts>
                    <li>
                        <button>
                            <img src='https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb' 
                            alt='' />
                            <img src='https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f'  
                            alt=''/>
                            <span>75</span>
                        </button>
                    </li>
                    <li>
                        <a>
                            2 comments
                        </a>
                    </li>
                </SocialCounts>
                <SocialActions>
                <button>
                    <img src='/images/like-icon.svg' alt='' />
                    <span>Like</span>
                </button>
                <button>
                    <img src='/images/comment-icon.svg' alt='' />
                    <span>Comments</span>
                </button>
                <button>
                    <img src='/images/share-icon.svg' alt='' />
                    <span>Share</span>
                </button>
                <button>
                    <img src='/images/send-icon.svg' alt='' />
                    <span>Send</span>
                </button>
                </SocialActions>
            </Article>
        </div>
        </Container>
        );
};

const Container = styled.div`
    grid-area: main;
`;

const CommonCard =styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
    `;

const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div {
    button {
        outline: none;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    &:first-child {
        display: flex;
        align-items: center;
        padding: 8px 16px 0px 16px;
        img {
            width: 48px;
            border-radius: 50%;
            margin-right: 8px;
        }
        button {
            margin: 4px 0;
            flex-grow: 1;
            border-radius: 35px;
            padding-left: 16px;
            border: 1px solid rgba(0, 0, 0, 0.15);
            border-radius: 35px;
            background-color: white;
            text-align: left;
        }
    }
    &:nth-child(2) {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         padding-bottom: 4px;

         button {
            img {
                 margin: 0  4px 0 -2 ;
            }

            span {
                color: #70b5f9;
                
            }
         }
    }
}
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;
`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
    

        img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
        }
        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span  {
                text-align: left;
                &:first-child {
                     font-size: 14px;
                     font-weight: 700;
                     color: rgba(0, 0, 0, 1);
                }

                &:nth-child(n+1) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);

                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;
}
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImg =styled.div`
    margin-top: 8px;
    width: 400px;
    display: block;
    position: relative;
    background-color: #f9fafb;
    img {
        object-fit: contain;
        width: 100%;
        height: 400px;
    }
`;

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    align-items: flex-start;
    overflow: auto;
    margin: 0 16px;
    padding: 8px 0;
    border-bottom: 1px solid #e9e5df;
    list-style: none;

    li {
        margin-right: 5px;
        font-size: 12px;
        button {
            display: flex;
        }
    }
`;

const handleFileUpload = () => {
    // Perform the necessary actions with the selected file (e.g., upload to a server)
    if (selectedFile) {
      // You can perform actions like uploading the file here
      console.log('Selected File:', selectedFile);
    }
  };

const SocialActions = styled.div`
    align-items: cneter;
    display: flex;
    justify-content: flex-start;
    margin: 0;
    min-height: 40px;
    padding: 4px 8px;
    button {
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;

        /* this media is for desktop therfore min width */
        @media (min-width: 768px) {
            span {
                 margin-left: 8px;
            }
        }
    }
`;

export default Main;
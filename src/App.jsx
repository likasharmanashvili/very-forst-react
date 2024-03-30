
import React from 'react'
import './App.css'
import './Components/Header/Header'
import Header from './Components/Header/Header'
import Container from './Components/Content/Container1/Container1'
import img from './images/woods.jpg'
import image from './images/bridge.jpg'
import Footer from './Components/Footer/Footer'
import ContainerFoo from './Components/Content/Container1/Container2'
import avatar from "./images/avatar_g.jpg"
import PostsContainer from "./Components/Content/Container1/Container3"
import img1 from "./images/workshop.jpg"
import img2 from "./images/gondol.jpg"
import img3 from "./images/skies.jpg"
import img4 from "./images/rock.jpg"
import PostContentFirst from "./Components/Content/Container1/Container4"
function App() {


  return (
    <>
   <Header />
    
    <div className='card1'>
    <img className="image" src={img} alt="Image" />
   <Container 
      
      title="TITLE HEADING"
      titleHeading="Title description, April 7, 2014"
      text="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
      button="READ MORE >>"
      comments="Comments"
   />
   </div>

   <div className='card1'>
   <img className="image" src={image} alt="Image" />
    <Container
      title="BLOG ENTRY"
      titleHeading="Title description, April 7, 2014"
      text="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
      button="READ MORE >>"
      comments="Comments" />
   </div>
     
     <div className="cardNum2">
     <img className="img" src={avatar} alt="Image" />
      
        <ContainerFoo
        nameValue="My Name"
        p_text="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
        />
     </div>

<div className='Posts'>
  <h1 className='inputText'> Popular Posts</h1>
<div className='input1'>
<img className='img1' src={img1} alt="image" />
<PostsContainer 
  textC="Lorem"
  PtextContent="Sed mattis nunc"
      />    
</div>
<hr />

<div className='input1'>
<img className='img1' src={img2} alt="image" />
<PostsContainer 
  textC="Ipsum"
  PtextContent="Praes tinci sed"
      />    
</div>
<hr />

<div className='input1'>
<img className='img1' src={img3} alt="image" />
<PostsContainer 
  textC="Dorum"
  PtextContent="Ultricies congue"
      />
      
</div>
<hr />
<div className='input1'>
<img className='img1' src={img4} alt="image" />
<PostsContainer 
  textC="Mingsum"
  PtextContent="Ultricies congue"
      />  
</div>
</div>

<PostContentFirst />
    <div>
    <Footer />
    </div>
   

    </>


  )
}

export default App

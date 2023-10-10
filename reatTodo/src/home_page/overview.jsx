import './overview.css'
import grocery from '../../src/assets/grocery2.jpg'
import grocery1 from '../../src/assets/groceery1.jpg'
function Oerview(){
    return(
        <div className='home_container'>
            <div className='home_left'>
            <h1>This is the Fastest and the cheapest <span>Delivery.</span> </h1>
            <p>We understand that your time is valuable, that is why we prioritize speed and affordability in our delivery process.Do you need your yummy yummy delivered, BodaBoda Delivery has got you covered.

Our team of experienced delivery bodaboda riders are dedicated to ensuring that your items are delivered to you in a timely and professional manner. You can trust us to handle your items with care and deliver them to you safely.</p>
</div>
        <img className='home_img' src={grocery1} alt="home_image"/>
        </div>
    )
}

export default Oerview
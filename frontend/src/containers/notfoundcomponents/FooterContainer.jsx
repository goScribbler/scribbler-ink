import React from 'react'
import Instagram from '../assets/img/instagram.png'
import Facebook from '../assets/img/facebook.png'
import Twitter from '../assets/img/twitter.png'
import "./FooterContainer.css"

function FooterContainer(props) {
    return (
        <footer>
        <div className="wrapper">
          <div className="footerpromos">
            <div className="instagram">
              <div className="instagramheader">
                <h2>Instagram</h2>
              </div>
              <div className="instagramcontent">
                {/* LightWidget WIDGET */}
                <iframe title="LightWidget" src="https://cdn.lightwidget.com/widgets/0085a09862ad57b9820c0d53e69afb2c.html" scrolling="no" className="lightwidget-widget" style={{width: '100%', border: 0, overflow: 'hidden'}} />
              </div>
            </div>
            <div className="subboxad">
              <div className="boxadheader">
                <h2>Box of Magic</h2>
              </div>
              <div className="boxadcontent">
                <a rel="noopener noreferrer" href="https://www.goscribbler.com" target="_blank">
                  <img alt="" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="//s3.amazonaws.com/cratejoy_vendor_images/scribbler/fashion_mobile-copy-0/images/BoxPromo1.jpg" />
                </a>
              </div>
            </div>
          </div>
          <div className="footercontent">
            <div className="topfooterrow">
              <div className="newsandspecialoffers">
                <h2>For News and Special Offers</h2>
                {/* Begin MailChimp Signup Form */}
                <div id="mc_embed_signup">
                  <form action="https://goscribbler.us17.list-manage.com/subscribe/post?u=30c0ddc540538cd484db6d9eb&id=8e0d01458b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email Address" required />
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_30c0ddc540538cd484db6d9eb_8e0d01458b" tabIndex={-1} defaultValue /></div>
                      <div className="clear"><input type="submit" defaultValue="Subscribe To Our Newsletter" name="subscribe" id="mc-embedded-subscribe" className="button2" /></div>
                    </div>
                  </form>
                </div>
                {/*End mc_embed_signup*/}
                {/*<div class="newsandspecialoffersinput">
							<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL2" placeholder="Email" required="">
						</div>
						<div class="newsandspecialoffersbutton">
							<a href="#">Sign Up</a>
						</div>*/}
              </div>
              <div className="online">
                <h2>Online</h2>
                <ul>
                  <li><a rel="noopener noreferrer" href="https://www.instagram.com/goscribbler/" target="_blank">Instagram</a></li>
                  <li><a rel="noopener noreferrer" href="https://twitter.com/goscribbler" target="_blank">Twitter</a></li>
                  <li><a rel="noopener noreferrer" href="https://www.facebook.com/goScribbler/" target="_blank">Facebook</a></li>
                </ul>
              </div>
              <div className="information">
                <h2>Information</h2>
                <ul>
                  <li><a href="/about">About</a></li>
                  <li><a href="/wholesale">Wholesale</a></li>
                </ul>
              </div>
              <div className="customercare">
                <h2>Customer Care</h2>
                <ul>
                  <li><a href="mailto:hello@goscribbler.com">Contact</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="botfooterrow">
              <div className="giftcards">
                <div className="giftcardtitle">
                  <h2>Shop Gift Cards</h2>
                </div>	
                <div className="giftcardcontent">The Perfect Gift for Writers</div>
                <div className="giftcardbutton">
                  <a rel="noopener noreferrer" href="/shop/product/1861206911">Buy Now</a>
                </div>
              </div>
              <div className="address">
                <p>1722 Routh St, Suite 900</p>
                <p>Dallas, TX 75201</p>
              </div>
              <div className="charity">
                <div className="charitytitle">
                  <h2>Support Children in Need</h2>
                </div>	
                <div className="charitycontent">A portion of the proceeds from each Scribbler box go to support Community Partners of Dallas, whose mission is to ensure safety, restore dignity and inspire hope for the abused and neglected children served by Dallas County Child Protective Services.</div>
                <div className="charitybutton">
                  <a rel="noopener noreferrer" href="https://donatenow.networkforgood.org/communitypartnersdallas" target="_blank">Donate Today</a>
                </div>
              </div>
            </div>
          </div>
          <div className="BottomNav">
            <div className="BottomNavText">
              <div className="Copyright">	
                Copyright 2018 Scribbler, LLC. All Rights Reserved
              </div>
              <div className="Policies">
                <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms and Conditions</a>
              </div>
            </div>
            <div className="BottomNavIcons">
              <div className="ctr">
                <div className="FooterInstagramLogo">
                  <a rel="noopener noreferrer" href="https://www.instagram.com/goscribbler/" target="_blank">
                    <img alt="" src={Instagram}/>
                  </a>
                </div>
                <div className="FooterFacebookLogo">
                  <a rel="noopener noreferrer" href="https://www.facebook.com/goScribbler/" target="_blank">
                    <img alt="" src={Facebook}/>
                  </a>
                </div>
                <div className="FooterTwitterLogo">
                  <a rel="noopener noreferrer" href="https://twitter.com/goscribbler" target="_blank">
                    <img alt="" src={Twitter}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default FooterContainer
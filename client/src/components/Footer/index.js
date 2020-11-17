import React from 'react';

function Footer() {
    return (
        <footer id="main-footer-bottom">
				<div className="container">
					<div className="d-flex justify-content-between flex-row-reverse flex-md-row">
						<div className="footer-suffix bg-maroon foot-left">
							<p className="soft-text">State sales tax will be charged on all orders shipped to the following states: NJ.</p>
							<p className="soft-text">*** Results may vary.</p>
							<p className="copyright">All products are registered trademarks of Chamonix Skin Care.<br/>
								Eyeseryl<sup>®</sup> is a registered trademark of LIPOTEC, S.A.U.<br/>
								©2019 Chamonix Skin Care. All Rights Reserved.
							</p>
							<p className="copyright">By using this site, you agree to the <a href="https://www.genucel.com/privacy-policy.html">Privacy Policy</a>.</p>
						</div>
					</div>
				</div>
			</footer>
    )
}

export default Footer;
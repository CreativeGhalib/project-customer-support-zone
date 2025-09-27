import Container from './Container';
const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12 ">
      <Container>
        <div className="grid md:grid-cols-5 gap-8 container ">
          <div>
            <h3 className="text-white font-semibold mb-2">CS — Ticket System</h3>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Saled</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm">
              <ul class="space-y-2 text-sm">
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="mr-2"
                  >
                    <g clip-path="url(#clip0_41_774)">
                      <path
                        d="M10 0C4.47734 0 0 4.47734 0 10C0 15.5227 4.47734 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47734 15.5227 0 10 0Z"
                        fill="white"
                      />
                      <path
                        d="M11.0941 9.09531L15.375 4.11914H14.3606L10.6435 8.43989L7.67468 4.11914H4.25049L8.73993 10.6529L4.25049 15.8712H5.26498L9.19033 11.3083L12.3256 15.8712H15.7498L11.0939 9.09531H11.0941ZM5.6305 4.88284H7.1887L14.361 15.1422H12.8029L5.6305 4.88284Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_774">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{' '}
                  <span>@CS — Ticket System</span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="mr-2"
                  >
                    <g clip-path="url(#clip0_41_780)">
                      <path
                        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                        fill="white"
                      />
                      <path
                        d="M15.975 10.8052V14.928H13.5847V11.0815C13.5847 10.1157 13.2396 9.45615 12.3741 9.45615C11.7137 9.45615 11.3213 9.9002 11.1481 10.3302C11.0851 10.4838 11.0689 10.6972 11.0689 10.9127V14.9278H8.67845C8.67845 14.9278 8.71054 8.41316 8.67845 7.7388H11.0691V8.75755C11.0643 8.76558 11.0575 8.77342 11.0532 8.78109H11.0691V8.75755C11.3867 8.26877 11.9533 7.56999 13.2234 7.56999C14.796 7.56999 15.975 8.59748 15.975 10.8052ZM6.17783 4.27344C5.36015 4.27344 4.8252 4.81018 4.8252 5.51537C4.8252 6.20559 5.34464 6.75784 6.14645 6.75784H6.16196C6.99568 6.75784 7.51406 6.20559 7.51406 5.51537C7.4982 4.81018 6.99568 4.27344 6.17783 4.27344ZM4.96727 14.928H7.35684V7.7388H4.96727V14.928Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_780">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{' '}
                  <span>@CS — Ticket System</span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="mr-2"
                  >
                    <g clip-path="url(#clip0_41_787)">
                      <path
                        d="M20 10C20 14.9914 16.343 19.1285 11.5625 19.8785V12.8906H13.8926L14.3359 10H11.5625V8.12422C11.5625 7.3332 11.95 6.5625 13.1922 6.5625H14.4531V4.10156C14.4531 4.10156 13.3086 3.90625 12.2145 3.90625C9.93047 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C3.65703 19.1285 0 14.9914 0 10C0 4.47734 4.47734 0 10 0C15.5227 0 20 4.47734 20 10Z"
                        fill="white"
                      />
                      <path
                        d="M13.8926 12.8906L14.3359 10H11.5625V8.12418C11.5625 7.33336 11.9499 6.5625 13.1921 6.5625H14.4531V4.10156C14.4531 4.10156 13.3088 3.90625 12.2146 3.90625C9.93043 3.90625 8.4375 5.29063 8.4375 7.79688V10H5.89844V12.8906H8.4375V19.8785C8.94664 19.9584 9.46844 20 10 20C10.5316 20 11.0534 19.9584 11.5625 19.8785V12.8906H13.8926Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_787">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{' '}
                  <span>@CS — Ticket System</span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="mr-2"
                  >
                    <g clip-path="url(#clip0_41_793)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 0C15.5229 0 20 4.47715 20 10C20 15.5229 15.5229 20 10 20C4.47715 20 0 15.5229 0 10C0 4.47715 4.47715 0 10 0ZM16.3477 13.8766V6.44445L12.6314 10.1605L16.3477 13.8766ZM4.44625 14.028H15.554L12.1591 10.6332L10.8653 11.9268C10.8025 11.9894 10.7175 12.0245 10.6289 12.0245H9.37113C9.32725 12.0245 9.28379 12.0159 9.24323 11.9992C9.20268 11.9824 9.16582 11.9578 9.13477 11.9268L7.84094 10.6332L4.44609 14.028H4.44625ZM3.65234 6.44422V13.8768L7.36863 10.1605L3.65234 6.44422ZM15.8752 5.97199H4.125L9.50953 11.3565H10.4907L15.8752 5.97199Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_41_793">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{' '}
                  <span>support@cst.com</span>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="text-left md:text-center text-gray-500 text-sm mt-8">
          © 2025 CS — Ticket System. All rights reserved.
          <br className="block md:hidden" /> All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

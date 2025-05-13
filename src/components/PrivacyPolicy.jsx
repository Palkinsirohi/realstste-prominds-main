import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const containerStyles = {
    width: '80%', // You can adjust this value (e.g., '70%', '90%', '1200px')
    maxWidth: '1200px', // Optional: Set a maximum width
    margin: '4 auto', // Center the container horizontally
    // You can add height or other styles here if needed, e.g.,
    // minHeight: '500px',
    // border: '1px solid #ccc',
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="px-4 sm:px-6 lg:px-8 py-8" style={containerStyles}>
          <div className="lg:flex">
            {/* Main content area - ensures no overlap with sidebar */}
            <div className="lg:w-full">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">PRIVACY POLICY & TERM OF USES</h1>

              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 mb-4">
                  Propertypistol Realty Private Limited ("<span className="font-semibold">Propertypistol</span>" or "<span className="font-semibold">We</span>") a Real Estate Regulatory Authority ("<span className="font-semibold">RERA</span>") Registered Agent bearing RERA No: <span className="font-semibold">A51700000043</span>. We prioritize your privacy. Our concise Privacy Policy outlines the personal information we collect through our website, including sub-domains and microsites, the purposes of collection we may share it with, and security measures in place. It also informs you about your rights, choices, and how to contact us regarding privacy concerns. We highly recommend reading this Privacy Policy before using services and/or providing personal information.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">INTERPRETATIONS AND DEFINITIONS</h2>

                <p className="mb-4">
                  <span className="font-semibold">"Data"</span> shall mean personal information, including sensitive personal information and special category personal data (as defined under Data Protection Laws) about you, which we collect, receive, or otherwise process in connection with your use of our website and/or the Platform.
                </p>

                <p className="mb-4">
                  <span className="font-semibold">"Data Protection Laws"</span> shall mean any applicable law for the time being in force relating to the processing of Data.
                </p>

                <p className="mb-4">
                  <span className="font-semibold">"Service Providers"</span> includes entities which provide services to and to whom we may disclose your Data for a specific purpose pursuant to a written contract.
                </p>

                <p className="mb-4">
                  <span className="font-semibold">"Propertypistol/We"</span> shall mean Propertypistol Realty Private Limited, and its subsidiaries, affiliates and associate companies.
                </p>

                <p className="mb-4">
                  <span className="font-semibold">"User or You"</span> shall mean the natural person who accesses our website/pages or Platform.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">WEBSITE CONTENT OVERVIEW:</h2>

                <p className="mb-4">
                  The contents of this landing page, containing details of properties, property photos, costs, and availability, are provided for informational and illustrative purposes only. This information is subject to change at any time. Users are hereby advised that the actual properties may differ from what is shown in photos and cost on the website and pages, and as such, no claims shall be entertained based on such representations.
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">Uses of Developer Information:</h3>

                <p className="mb-4">
                  All images, cost descriptions, logos, and other project materials featured on this landing page are presented in accordance with the respective project developer or its licensors. We are in legal agreements and established legal relationships with the said respective developer, thereby possessing the authority to advertise, market for sale, and generate leads for the respective project.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">TYPES OF DATA COLLECTED</h2>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">PERSONAL DATA</h3>

                <p className="mb-4">
                  While visiting to this website, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number</li>
                  <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>

                <p className="font-medium mb-2">We may use Personal Data for the following purposes:</p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><span className="font-medium">To provide and maintain our Service,</span> including to monitor the usage of our Service.</li>
                  <li><span className="font-medium">To contact You:</span> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                  <li><span className="font-medium">To provide information related to the property's sale, purchase etc.</span> with, special offers and general information about properties, real estate services which we offer that are similar to those that you have already purchased or enquired about.</li>
                  <li><span className="font-medium">To manage Your requests:</span> To attend and manage Your requests to Us.</li>
                </ul>

                <p className="font-medium mb-2">We may share Your personal information in the following situations:</p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><span className="font-medium">With Affiliates:</span> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our associates and any other subsidiaries, that We control or that are under common control with Us.</li>
                  <li><span className="font-medium">With Authorized Developers:</span> We may disclose Your personal information with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary.</li>
                  <li><span className="font-medium">With Your consent:</span> We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">RETENTION OF YOUR PERSONAL DATA</h2>

                <p className="mb-4">
                  We shall retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws).
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">DISCLOSURE OF YOUR PERSONAL DATA</h2>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-6 mb-3">USER'S CONSENT</h3>

                <p className="mb-4">
                  By using the Website/Landing Page and/or by providing information to Us through this Website/Landing Page, the User consents to the collection and use of the information disclosed by the User on the Website in accordance with this Privacy Policy.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">LAW ENFORCEMENT</h2>

                <p className="mb-4">
                  Under certain circumstances, the We may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">OTHER LEGAL REQUIREMENTS</h2>

                <p className="mb-4">
                  The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                </p>

                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Comply with a legal obligation.</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the Service.</li>
                  <li>Protect the personal safety of Users of the Service or the public.</li>
                  <li>Protect against legal liability.</li>
                </ul>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">COOKIES</h2>

                <p className="mb-4">
                  Cookies are primarily used to enhance your online experience and are not employed to track identifiable visitors' navigational habits. Statistical information, such as the domain from which you access the Internet, date and time of access, and the Internet address of the website from which you linked directly to our site, is collected in aggregate form to improve site functionality.
                </p>

                <p className="mb-4">
                  Most internet browsers accept cookies by default, but you can adjust settings or use third-party tools to refuse or receive prompts before accepting cookies. Disabling cookies may impact the functionality of certain parts of our Services.
                </p>

                <p className="mb-4">
                  For more information about cookies and how to manage them, visit <a href="http://www.aboutcookies.org" className="text-blue-600 hover:underline">www.aboutcookies.org</a>
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">SECURITY OF YOUR PERSONAL DATA</h2>

                <p className="mb-4">
                  The security of Your Personal Data is important to Us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, we cannot guarantee its absolute security.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">CHILDREN'S PRIVACY</h2>

                <p className="mb-4">
                  Our Service does not address anyone under the age of 18. We do not knowingly collect personally identifiable information from anyone under the age of 18. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 18 without verification of parental consent, we take steps to remove that information from Our servers.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">CHANGES TO THIS PRIVACY POLICY</h2>

                <p className="mb-4">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4">CONTACT US</h2>

                <p className="mb-4">
                  To request to review, update, or delete your personal information or to otherwise reach us, please submit a request by e-mailing us at <a href="mailto:support@propertypistol.com" className="text-blue-600 hover:underline">support@propertypistol.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
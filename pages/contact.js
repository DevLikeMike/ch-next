// Component imports
import Layout from "@/components/Layout";
import Map from "@/components/Map";

export default function ContactPage() {
  const formHandler = (e) => {
    e.preventDefaul();
    console.log("submitted");
  };

  return (
    <Layout>
      <Map />
      <section className='contact'>
        <h1 className='contact__header text-center'>Casey Hall Law</h1>
        <p className='contact__subHeader text-center'>
          Casey Hall law is located in Fleming Neon Kentucky and is dedicated to
          serving the surrounding areas. In-person consultations can be arranged
          in near by towns from Whitesburg to Pikeville.
        </p>
        <hr />
        <div className='contact__container flex'>
          <form onSubmit={formHandler} className='contact__form flex jc-fs col'>
            <h1 className='contact__form__header text-center'>Contact Us</h1>
            <input
              type='text'
              name='firstName'
              placeholder='First Name (required)'
              required
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name (required)'
              required
            />
            <input
              type='text'
              name='phoneNumber'
              placeholder='Phone Number (required)'
              required
            />
            <input type='email' name='email' placeholder='Email (required)' />
            <textarea
              name='message'
              placeholder='Brief details about your case.'
            ></textarea>
            <input type='submit' value='GET STARTED' />
          </form>
          <div className='contact__card flex flex-center col'>
            <h2 className='text-center'>Free Consultation</h2>
            <p className='card__contact text-center'>
              Contact us for a FREE consultation. Get your questions answered
              and the guidance you need from an experienced attorney.
            </p>
            <h1 className='card__phone text-center'>
              <i className='fas fa-phone'></i>1-888-888-8888
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
}

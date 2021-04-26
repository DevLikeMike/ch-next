// Next/React
import { useEffect } from "react";
import Link from "next/link";
// Component import
import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";
// Package layout
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <main className='homescreen'>
        <div className='landing'>
          <section className='hero'></section>
          <section className='intro'>
            <p>
              Do you need a personal injury lawyer? Located in the Eastern
              Kentucky area? Casey Hall Law can help you in your time of need.
            </p>
            <p>
              Whether you've been hurt due to someone's negligence, hurt in a
              motor vehicle accident, or hurt due to poor property maintainence,
              you may need the services of a skilled and knowledgeable personal
              injury attorney to receive the compensation YOU deserve. If you
              are in the Eastern Kentucky Area and find your self subject to one
              or more of these situations please schedule your free consultation
              today.
            </p>
            <Link href='/contact' className='contact-us'>
              <a className='contact-us'>Contact Us</a>
            </Link>
          </section>
        </div>
        <section className='when-to-hire'>
          <h2>Should I Hire a Personal Injury Attorney?</h2>
          <div className='card-container'>
            <div
              className='card'
              data-aos='fade-right'
              data-aos-once='true'
              data-aos-duration='700'
            >
              <img
                src='https://images.pexels.com/photos/613508/pexels-photo-613508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='law'
              />
              <p>
                After a claim, insurance companies many want to process your
                claim quickly and cheaply. Don't let them. You likely deserve
                more than their initial offer. <span>Read More...</span>
              </p>
            </div>
            <div
              className='card'
              data-aos='fade-left'
              data-aos-once='true'
              data-aos-duration='700'
            >
              <img
                src='https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt='law2'
              />
              <p>
                Are you receiving medical treatment? While you might have
                options paying for medical treatment cost through a personal
                insurance policy, this may become overwhelming and prevent you
                from getting the treatment you need. <span>Read More...</span>
              </p>
            </div>
            <div
              className='card'
              data-aos='fade-right'
              data-aos-once='true'
              data-aos-duration='700'
            >
              <img
                src='https://images.pexels.com/photos/1011848/pexels-photo-1011848.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                alt=''
              />
              <p>
                Are you unable to drive to work? When your ability to drive is
                impacted, your entire life changes. We can help resolve your
                claim, or file a law suit to help move you forward.
                <span>Read More...</span>
              </p>
            </div>
          </div>
        </section>
        <OnPageContact />
      </main>
    </Layout>
  );
}

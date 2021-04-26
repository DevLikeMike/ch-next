import Layout from "@/components/Layout";
import OnPageContact from "@/components/OnPageContact";

export default function SlipAndFall() {
  return (
    <Layout>
      <section className='aop-page'>
        <section className='hero saf'></section>
        <section className='content'>
          <h1 className='title'>Premises Liability</h1>
          <hr />
          <h1>When to contact lawyer for a slip and fall</h1>
          <p>
            Premise liability cover any situation in which a property owner
            fails to maintain thier property and this results in someone getting
            hurt. The most common among these situations are slip and falls. A
            typical slip and fall is the result of, but not limited to, slipping
            on a wet or icy floor. Premise liability can cover other things
            though, such as:
          </p>
          <ul>
            <li>Poor and inadequate lighting</li>
            <li>Defective conditions on the premises</li>
            <li>Dog bite</li>
            <li>Swimming pool accidents</li>
            <li>Ice and snow accidents</li>
            <li>Slip and Fall</li>
          </ul>
          <h1>How Premises Liability Cases Work</h1>
          <p>
            Essentially, if you feel you are a victim of a premises liability
            cases there are key factors to consider to get your case started. If
            these are proven via evidence, photos, or are still provable please
            schedule use for a free consultation today. These factors include:
          </p>
          <ul>
            <li>
              Proving the defendant is responsible for the properties upkeep by
              owning, occupying, or leasing the property
            </li>
            <li>The defendant was negligent in the use of thier property</li>
            <li>The plantiff (You) were harmed on this property</li>
            <li>
              The defendant's negligence was substantially part of your injury
            </li>
          </ul>
          <p>These factors are subject to change in different jurisdictions</p>
          <h1>Proving Negligence</h1>
          <p>
            Negligence in premises liability cases can be hard to prove. For
            example, if you are a victim to a slip and fall, you must be able to
            prove that the property owner knew or should have known of the
            hazard on the premises. In some cases knowledge of the property
            hazard can be presumed, such as mopping a floor. In this case, the
            property owner made the floor wet and knowledge of the hazard can be
            presumed. Again this is subject tot he jurisdiction your case is in.
          </p>
          <h1>Proving Negligence was substantially part of your injury</h1>
          <p>
            Showing the defendants negligence was a substantial factor in your
            injury, means the harm you suffered need to be a result of the
            action (or inaction) of the defendant. This negligence does not have
            to be the sole reason of your harm, but must martially contribute to
            the reason of harm.
          </p>
          <OnPageContact bgClass='onpage_contact flex flex-center blue' />
        </section>
      </section>
    </Layout>
  );
}

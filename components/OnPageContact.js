export default function OnPageContact({ bgClass }) {
  const formHandler = () => {
    console.log("submitted");
  };

  return (
    <section className={bgClass}>
      <form
        onSubmit={formHandler}
        className='onpage_contact__form flex jc-fs col'
      >
        <h1 className='onpage_contact__form__header text-center'>Contact Us</h1>
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
    </section>
  );
}

OnPageContact.defaultProps = {
  bgClass: "onpage_contact flex flex-center",
};

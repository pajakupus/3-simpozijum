import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import emailjs from 'emailjs-com';
import * as dotenv from 'dotenv';
dotenv.config();


export interface Props {
}

export function ProfileForm({ }: Props) {

  const [updating, setUpdating] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [licence, setLicence] = useState('');
  const [ustanova, setUstanova] = useState('');
  const [address, setAddress] = useState('');
  const [firstNameEmpty, setFirstNameEmpty] = useState(false);
  const [lastNameEmpty, setLastNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [titleEmpty, setTitleEmpty] = useState(false);
  const [phoneEmpty, setPhoneEmpty] = useState(false);
  const [licenceEmpty, setLicenceEmpty] = useState(false);
  const [ustanovaEmpty, setUstanovaEmpty] = useState(false);
  const [addressEmpty, setAddressEmpty] = useState(false);

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>, func: Function, emptyFunc: Function) => {
    // Allow only numeric characters
    const input = e.target.value.replace(/\D/g, '');
    if (input == '') {
      emptyFunc(true);
    } else {
      emptyFunc(false);
    }
    func(input);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, func: Function, emptyFunc: Function) => {
    const input = e.target.value;
    if (input == '') {
      emptyFunc(true);
    } else {
      emptyFunc(false);
    }
    func(input);
  }


  async function submitForm({
    firstName,
    lastName,
    email,
    licence,
    ustanova,
    title,
    phone,
    address,
  }: {
    firstName: string
    lastName: string
    email: string
    licence: string
    ustanova: string
    title: string
    phone: string
    address: string
  }) {

    

    setUpdating(true);

    firstName == '' ? setFirstNameEmpty(true) : null;
    lastName == '' ? setLastNameEmpty(true) : null;
    title == '' ? setTitleEmpty(true) : null;
    ustanova == '' ? setUstanovaEmpty(true): null;
    phone == '' ? setPhoneEmpty(true): null;
    licence == '' ? setLicenceEmpty(true) : null;
    email == '' ? setEmailEmpty(true): null;
    address == '' ? setAddressEmpty(true): null;
 
    if (firstNameEmpty || lastNameEmpty || emailEmpty || licenceEmpty || ustanovaEmpty || titleEmpty || phoneEmpty || addressEmpty) {
      throw new Error('Sva polja moraju biti popunjena');
    }
    try {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        licence: licence,
        phone: phone,
        ustanova: ustanova,
        title: title,
        address: address,
      };

      const { error } = await supabase.from('users').upsert(data, {
        returning: 'minimal', // Don't return the value after inserting
      })


      if (error) {
        throw error
      }

      const service_id : string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const template_id : string = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

      // Send email using EmailJS
      const templateParams = {
        to_email: process.env.NEXT_PUBLIC_MONDORAMA_EMAIL,
        message: `
        Ime: ${firstName},
        Prezime: ${lastName},
        Titula: ${title},
        Broj Licence: ${licence},
        Ustanova: ${ustanova},
        Telefon: ${phone},
        Adresa: ${address},
        Email: ${email},
        `, // Adjust message content as needed
      };

      const response = await emailjs.send(service_id, template_id, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID);


    } catch (error: any) {
      alert(error.message)
    } finally {
      setUpdating(false)
    }
  }


  return (
    <>
      <div className="w-full lg:w-[680px] flex flex-col items-start justify-start gap-[40px]">
        <div className="flex flex-col items-start justify-start">
          <b className="w-full lg:w-[620px] relative flex items-center">Prijavi se</b>
        </div>
        <form className="w-full flex flex-col items-start justify-start gap-[40px] text-sm font-dm-sans-body-regular-p6">
          <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[40px]">
            {/* ime */}
            <div className="w-full lg:w-[320px] flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="relative label" htmlFor="firstName">Ime:*</label>
              <input className="w-full lg:w-[320px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='Vaše Ime'
                disabled={updating}
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange(e,setFirstName,setFirstNameEmpty)} />
                {firstNameEmpty && <div className='text-red-500'>Ime je obavezno</div>}
            </div>
            
            {/* prezime */}
            <div className="w-full lg:w-[320px] flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="relative label" htmlFor="lastName">Prezime:*</label>
              <input className="w-full lg:w-[320px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='Vaše prezime'
                disabled={updating}
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange(e,setLastName,setLastNameEmpty)}
                />
                {lastNameEmpty && <div className='text-red-500'>Prezime je obavezno</div>}
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row items-start justify-start gap-[40px]">
            {/* titula */}
            <div className="w-full lg:w-[320px] flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="title">Titula:*</label>
              <input
                className="w-full lg:w-[320px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green"
                placeholder="Profesor"
                id="title"
                type="text"
                value={title}
                onChange={(e) => handleInputChange(e,setTitle,setTitleEmpty)}
                disabled={updating}
              />
              {titleEmpty && <div className='text-red-500'>Titula je obavezna</div>}
            </div>
            {/* Licenca */}
            <div className="w-full lg:w-[320px] flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="licence">Broj Licence:*</label>
              <input className="w-full lg:w-[320px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='' id="licence"
                value={licence}
                type="text"
                onChange={(e) => handleNumberInputChange(e, setLicence, setLicenceEmpty)}
                disabled={updating} 
                />
                {licenceEmpty && <div className='text-red-500'>Broj licenca je obavezan</div>}
            </div>
          </div>
          {/* ustanova */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="ustanova">Ustanova:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" id="ustanova"
                value={ustanova}
                type="text"
                onChange={(e) => handleInputChange(e,setUstanova,setUstanovaEmpty)}
                disabled={updating}
              />
                {ustanovaEmpty && <div className='text-red-500'>Ime ustanove je obavezano</div>}
            </div>
          </div>
          {/* adresa */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="address">Adresa:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" id="address"
                value={address}
                type="text"
                onChange={(e) => handleInputChange(e,setAddress,setAddressEmpty)}
                disabled={updating}
              />
                {addressEmpty && <div className='text-red-500'>Ime ustanove je obavezano</div>}
            </div>
          </div>
          {/* telefon */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="phone">Telefon:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" id="phone"
                value={phone}
                type="text"
                onChange={(e) => handleNumberInputChange(e, setPhone, setPhoneEmpty)}
                disabled={updating}
              />
                {phoneEmpty && <div className='text-red-500'>Broj licenca je obavezan</div>}
            </div>
          </div>
          {/* email */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="email">Email:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='primer@email.com' id="email"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e,setEmail,setEmailEmpty)}
                disabled={updating}
                />
                {emailEmpty && <div className='text-red-500'>Email je obavezan</div>}
            </div>
          </div>
          <button type='button' onClick={() => submitForm({ firstName, lastName, email, title, phone, ustanova, licence, address})}
            disabled={updating || firstNameEmpty || lastNameEmpty || emailEmpty || phoneEmpty || licenceEmpty || titleEmpty || ustanovaEmpty || addressEmpty} className="self-stretch rounded-13xl bg-seagreen shadow-[0px_2px_4px_rgba(48,_49,_51,_0.1),_0px_0px_1px_rgba(48,_49,_51,_0.05)] flex flex-row items-center justify-center py-6 px-12 text-7xl text-white font-manrope">
            <span className="relative leading-[109.5%] font-semibold">{updating ? 'Slanje prijave…' : 'Prijavi se'}</span>
          </button>
        </form>
      </div>
    </>
  )
}

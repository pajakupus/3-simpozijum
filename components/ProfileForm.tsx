import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
dotenv.config();

export interface Props {
}

export function ProfileForm({ }: Props) {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPass = process.env.GMAIL_PASSWORD;

  const [updating, setUpdating] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [phone, setPhone] = useState('');
  const [licence, setLicence] = useState('');
  const [ustanova, setUstanova] = useState('');

  const handleNumberInputChange = (e: React.ChangeEvent<HTMLInputElement>, func: Function) => {
    // Allow only numeric characters
    const input = e.target.value.replace(/\D/g, '');
    func(input);
  };


  async function submitForm({
    firstName,
    lastName,
    email,
    licence,
    ustanova,
    title,
    phone,
  }: {
    firstName: string
    lastName: string
    email: string
    licence: string
    ustanova: string
    title: string
    phone: string
  }) {

    setUpdating(true);
    try {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        licence: licence,
        phone: phone,
        ustanova: ustanova,
        title: title,
      };

      const { error } = await supabase.from('users').upsert(data, {
        returning: 'minimal', // Don't return the value after inserting
      })


      if (error) {
        throw error
      }

      // Sending email via SMTP using Nodemailer with Gmail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your_gmail_address@gmail.com',
          pass: 'your_gmail_password',
        },
      });

      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: 'your_email@example.com',
        to: email,
        subject: `Prijava za simpozijum - ${firstName} ${lastName}`,
        text: 'Body of your email',
      });

      console.log('Message sent: %s', info.messageId);


    } catch (error: any) {
      alert(error.message)
    } finally {
      setUpdating(false)
    }
  }


  return (
    <>
      <div className="flex flex-col items-start justify-start gap-[40px]">
        <div className="flex flex-col items-start justify-start">
          <b className="w-[620px] relative flex items-center">Prijavi se</b>
        </div>
        <form className="flex flex-col items-start justify-start gap-[40px] text-sm font-dm-sans-body-regular-p6">
          <div className="flex flex-row items-start justify-start gap-[40px]">
            {/* ime */}
            <div className="flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="relative label" htmlFor="firstName">Ime:*</label>
              <input className="w-[290px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='Vaše Ime'
                disabled={updating}
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            {/* prezime */}
            <div className="flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="relative label" htmlFor="lastName">Prezime:*</label>
              <input className="w-[290px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='Vaše prezime'
                disabled={updating}
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[40px]">
            {/* titula */}
            <div className="flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="title">Titula:*</label>
              <input
                className="w-[290px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green"
                placeholder="Profesor"
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={updating}
              />
            </div>
            {/* Licenca */}
            <div className="flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="licence">Broj Licence:*</label>
              <input className="w-[290px] box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='' id="licence"
                type="number"
                value={licence}
                onChange={(e) => handleNumberInputChange(e, setLicence)}
                disabled={updating} />
            </div>
          </div>
          {/* ustanova */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="ustanova">Ustanova:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" id="ustanova"
                type="ustanova"
                value={ustanova}
                onChange={(e) => setUstanova(e.target.value)}
                disabled={updating} />
            </div>
          </div>
          {/* telefon */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="phone">Telefon:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" id="phone"
                value={phone}
                onChange={(e) => handleNumberInputChange(e, setPhone)}
                disabled={updating} />
            </div>
          </div>
          {/* email */}
          <div className="self-stretch flex flex-row items-start justify-start gap-[40px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px] form-group">
              <label className="label" htmlFor="email">Email:*</label>
              <input className="self-stretch box-border flex flex-row items-center justify-start p-4 text-base text-black placeholder-cadet-green border-[1px] border-solid border-bb-green" placeholder='primer@email.com' id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={updating} />
            </div>
          </div>
          <button type='button' onClick={() => submitForm({ firstName, lastName, email, title, phone, ustanova, licence })}
            disabled={updating} className="self-stretch rounded-13xl bg-seagreen shadow-[0px_2px_4px_rgba(48,_49,_51,_0.1),_0px_0px_1px_rgba(48,_49,_51,_0.05)] flex flex-row items-center justify-center py-6 px-12 text-7xl text-white font-manrope">
            <span className="relative leading-[109.5%] font-semibold">{updating ? 'Slanje prijave…' : 'Prijavi se'}</span>
          </button>
        </form>
      </div>
    </>
  )
}

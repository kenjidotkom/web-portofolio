import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import { contact as contactArt } from '../assets';
import { contact as c, person } from '../data/portfolioData';
import './Contact.css';

const EMPTY = { name: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | error | sent
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) { setStatus('error'); return; }
    const subject = encodeURIComponent(`Halo dari ${form.name}`);
    const body = encodeURIComponent(form.message);
    window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
    setForm(EMPTY);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container container--md">
        <Reveal className="contact__card" data-surface="ink">
          <div className="contact__form-side">
            <h2 className="h-display-lg">
              {c.titleA}<br /><span className="accent-text">{c.titleHl}</span>
            </h2>
            <p className="contact__desc">{c.desc}</p>

            <form onSubmit={onSubmit} noValidate className="contact__form">
              <label className="sr-only" htmlFor="c-name">Nama kamu</label>
              <input id="c-name" className="input" placeholder="Nama kamu" autoComplete="name"
                value={form.name} onChange={set('name')} aria-invalid={status === 'error' && !form.name.trim()} />
              <label className="sr-only" htmlFor="c-msg">Pesanmu</label>
              <textarea id="c-msg" className="input input--area" placeholder="Tulis pesanmu"
                value={form.message} onChange={set('message')} aria-invalid={status === 'error' && !form.message.trim()} />
              <div className="contact__row">
                <Button type="submit" icon={Send}>{c.button}</Button>
                <p className="contact__status" role="status">
                  {status === 'error' && <><AlertCircle size={16} /> Lengkapi nama dan pesan dulu ya.</>}
                  {status === 'sent' && <><CheckCircle2 size={16} /> Terkirim! Aplikasi email dibuka.</>}
                </p>
              </div>
            </form>

            <ul className="contact__info">
              <li><Mail size={16} className="accent-text" /> <a href={`mailto:${person.email}`}>{person.email}</a></li>
              <li><Phone size={16} className="accent-text" /> <a href={person.whatsapp} target="_blank" rel="noopener noreferrer">{person.phone}</a></li>
            </ul>
          </div>

          <div className="contact__art">
            <img src={contactArt} alt={`Ilustrasi kontak ${person.name}`} className="contact__img" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}


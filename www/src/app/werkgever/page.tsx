'use client';

import * as React from 'react';
import { BrandCard } from '@/components/brand';
import { PrimaryButton } from '@/components/brand';

export default function WerkgeverPage() {
  const [isComplete, setIsComplete] = React.useState(false);
  const [formData, setFormData] = React.useState({
    bedrijfsNaam: '',
    contactPersoon: '',
    email: '',
    telefoon: '',
    aantalteMedewerkers: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-werkgever', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsComplete(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 text-text-primary">
          Dank je wel!
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          We hebben je inschrijving ontvangen. Ramon zal je binnenkort contacteren om je match-scan uit te voeren.
        </p>
        <BrandCard className="text-left">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Wat gebeurt er nu?
          </h3>
          <ul className="space-y-3 text-text-secondary">
            <li>1. Je ontvangt een bevestigingsemail</li>
            <li>2. Ramon neemt contact met je op voor een intake gesprek</li>
            <li>3. We voeren een gedetailleerde match-scan uit</li>
            <li>4. Je ontvangt een rapport met de beste kandidaten</li>
          </ul>
        </BrandCard>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-text-primary">
        Werkgever Match Scan
      </h1>
      <p className="text-center text-text-secondary mb-12">
        Vul je gegevens in en ontdek welke IT-specialisten perfect bij je passen.
      </p>

      <BrandCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Bedrijfsnaam
            </label>
            <input
              type="text"
              name="bedrijfsNaam"
              value={formData.bedrijfsNaam}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="Jouw MSP"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Contactpersoon
            </label>
            <input
              type="text"
              name="contactPersoon"
              value={formData.contactPersoon}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="Jouw naam"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              E-mailadres
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="jouw@bedrijf.nl"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Telefoonnummer
            </label>
            <input
              type="tel"
              name="telefoon"
              value={formData.telefoon}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="+31 6 1234 5678"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Hoeveel medewerkers werk je met?
            </label>
            <select
              name="aantalteMedewerkers"
              value={formData.aantalteMedewerkers}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
            >
              <option value="">Selecteer een optie</option>
              <option value="1-5">1-5</option>
              <option value="6-15">6-15</option>
              <option value="16-50">16-50</option>
              <option value="50+">50+</option>
            </select>
          </div>

          <PrimaryButton type="submit" className="w-full">
            Start je scan
          </PrimaryButton>
        </form>
      </BrandCard>
    </div>
  );
}

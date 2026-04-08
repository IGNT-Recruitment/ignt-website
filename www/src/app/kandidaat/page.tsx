'use client';

import * as React from 'react';
import { BrandCard } from '@/components/brand';
import { PrimaryButton } from '@/components/brand';

export default function KandidaatPage() {
  const [isComplete, setIsComplete] = React.useState(false);
  const [formData, setFormData] = React.useState({
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: '',
    functie: '',
    ervaringJaren: '',
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
      const response = await fetch('/api/submit-kandidaat', {
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
          Bedankt voor je interesse!
        </h1>
        <p className="text-xl text-text-secondary mb-8">
          We hebben je profiel ontvangen en zullen je berichten zodra we passende vacatures hebben gevonden.
        </p>
        <BrandCard className="text-left">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Volgende stappen
          </h3>
          <ul className="space-y-3 text-text-secondary">
            <li>1. Je ontvangt een bevestigingsemail</li>
            <li>2. We analyseren je profiel</li>
            <li>3. Zodra we een match hebben, nemen we contact op</li>
            <li>4. We begeleiden je door het sollicitatieproces</li>
          </ul>
        </BrandCard>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-text-primary">
        Kandidaat Profiel
      </h1>
      <p className="text-center text-text-secondary mb-12">
        Vul je gegevens in en we zoeken naar de perfecte rol voor jou.
      </p>

      <BrandCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Voornaam
            </label>
            <input
              type="text"
              name="voornaam"
              value={formData.voornaam}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="Jouw voornaam"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Achternaam
            </label>
            <input
              type="text"
              name="achternaam"
              value={formData.achternaam}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="Jouw achternaam"
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
              placeholder="jouw@email.nl"
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
              Huidige of gewenste functie
            </label>
            <input
              type="text"
              name="functie"
              value={formData.functie}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-purple"
              placeholder="bijv. Network Engineer"
            />
          </div>

          <div>
            <label className="block text-text-primary font-semibold mb-2">
              Jaar ervaring
            </label>
            <select
              name="ervaringJaren"
              value={formData.ervaringJaren}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-bg-primary border border-purple-400/30 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
            >
              <option value="">Selecteer een optie</option>
              <option value="0-2">0-2 jaar</option>
              <option value="2-5">2-5 jaar</option>
              <option value="5-10">5-10 jaar</option>
              <option value="10+">10+ jaar</option>
            </select>
          </div>

          <PrimaryButton type="submit" className="w-full">
            Mijn profiel indienen
          </PrimaryButton>
        </form>
      </BrandCard>
    </div>
  );
}

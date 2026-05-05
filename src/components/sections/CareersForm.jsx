import { useId, useState } from 'react'
import ButtonLink, { buttonLinkBase } from '../ui/ButtonLink'

const inputClassName =
  'w-full border border-black/40 px-5 py-3 text-sm tracking-widest text-black/70 font-montserrat placeholder-black/40 focus:outline-none focus:border-black'

const labelClassName =
  'block mb-2 text-left text-xs font-medium uppercase tracking-[0.3em] font-raleway'

const fields = [
  { name: 'firstName', label: 'First name', type: 'text', required: true, autoComplete: 'given-name' },
  { name: 'lastName', label: 'Last name', type: 'text', required: true, autoComplete: 'family-name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', required: true, autoComplete: 'tel' },
  { name: 'address', label: 'Address', type: 'text', required: true, autoComplete: 'street-address', wrapperClassName: 'md:col-span-1' },
  { name: 'city', label: 'City', type: 'text', required: true, autoComplete: 'address-level2' },
  { name: 'state', label: 'State', type: 'text', required: true, autoComplete: 'address-level1' },
  { name: 'zip', label: 'Zip code', type: 'text', required: true, autoComplete: 'postal-code' },
  { name: 'employer', label: 'Most recent employer', type: 'text', required: false, wrapperClassName: 'md:col-span-2' },
  { name: 'position', label: 'Position held', type: 'text', required: false, wrapperClassName: 'md:col-span-2' },
  { name: 'startDate', label: 'Start date [MM/YY]', type: 'text', required: false },
  { name: 'endDate', label: 'End date [MM/YY]', type: 'text', required: false },
]

export default function CareersForm() {
  const resumeId = useId()
  const [resumeName, setResumeName] = useState('')

  return (
    <form className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map(({ name, label, type, required, autoComplete, wrapperClassName }) => {
          const inputId = `careers-${name}`
          return (
            <div key={name} className={wrapperClassName}>
              <label htmlFor={inputId} className={labelClassName}>
                {label}
              </label>
              <input
                id={inputId}
                className={inputClassName}
                name={name}
                type={type}
                required={required}
                autoComplete={autoComplete}
              />
            </div>
          )
        })}

        <div className="md:col-span-2">
          <label htmlFor="careers-about" className={labelClassName}>
            Tell us about you
          </label>
          <textarea
            id="careers-about"
            className={`${inputClassName} min-h-[140px] resize-none`}
            name="about"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-4">

          <input
            id={resumeId}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            name="resume"
            onChange={(e) => {
              if (e.target.files[0]) {
                setResumeName(e.target.files[0].name)
              }
            }}
          />

          <label
            htmlFor={resumeId}
            className={`${buttonLinkBase} cursor-pointer`}
          >
            + Resume
          </label>

          {resumeName && (
            <span className="text-sm text-black/60 font-montserrat tracking-widest">
              {resumeName}
            </span>
          )}

        </div>

        <ButtonLink to="/closed">Submit Application</ButtonLink>

      </div>
    </form>
  )
}

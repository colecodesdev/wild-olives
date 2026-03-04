import { useId, useState } from 'react'

const inputClassName =
  'w-full border border-black/40 px-5 py-3 text-sm tracking-widest text-black/70 font-montserrat placeholder-black/40 focus:outline-none focus:border-black'

const buttonStyle =
  'inline-block p-3 px-4 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest'

export default function CareersForm() {
  const resumeId = useId()
  const [resumeName, setResumeName] = useState('')

  return (
    <form className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input className={inputClassName} name="firstName" placeholder="First name" />
        <input className={inputClassName} name="lastName" placeholder="Last name" />

        <input className={inputClassName} name="email" placeholder="Email" />
        <input className={inputClassName} name="phone" placeholder="Phone" />

        <div className="md:col-span-1">
          <input className={inputClassName} name="address" placeholder="Address" />
        </div>

        <input className={inputClassName} name="city" placeholder="City" />
        <input className={inputClassName} name="state" placeholder="State" />
        <input className={inputClassName} name="zip" placeholder="Zip code" />

        <div className="md:col-span-2">
          <input className={inputClassName} name="employer" placeholder="Most recent employer" />
        </div>

        <div className="md:col-span-2">
          <input className={inputClassName} name="position" placeholder="Position held" />
        </div>

        <input className={inputClassName} name="startDate" placeholder="Start date [MM/YY]" />
        <input className={inputClassName} name="endDate" placeholder="End date [MM/YY]" />

        <div className="md:col-span-2">
          <textarea
            className={`${inputClassName} min-h-[140px] resize-none`}
            name="about"
            placeholder="Tell us about you!"
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
        className={`${buttonStyle} cursor-pointer`}
      >
        + Resume
      </label>

      {resumeName && (
        <span className="text-sm text-black/60 font-montserrat tracking-widest">
          {resumeName}
        </span>
      )}

    </div>

    <button type="submit" className={`${buttonStyle}`}>
      Submit Application
    </button>

  </div>
    </form>
  )
}
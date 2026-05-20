import { useId, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonLink from '../ui/ButtonLink'

const inputClassName =
  'w-full border border-black/30 px-4 py-3 text-sm tracking-widest font-montserrat placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/50 focus:border-black'

const labelClassName =
  'block mb-2 text-left text-xs font-semibold uppercase tracking-[0.3em] font-raleway'

const MAX_RESUME_BYTES = 5 * 1024 * 1024
const ACCEPTED_EXTENSIONS = ['.pdf', '.doc', '.docx']

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
  { name: 'startDate', label: 'Start date', type: 'text', required: false, placeholder: 'MM/YY' },
  { name: 'endDate', label: 'End date', type: 'text', required: false, placeholder: 'MM/YY' },
]

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function validateResume(file) {
  const lower = file.name.toLowerCase()
  const hasValidExt = ACCEPTED_EXTENSIONS.some((ext) => lower.endsWith(ext))
  if (!hasValidExt) return 'Please upload a PDF, DOC, or DOCX file.'
  if (file.size > MAX_RESUME_BYTES) return 'File is too large. Maximum size is 5MB.'
  return null
}

export default function CareersForm() {
  const resumeId = useId()
  const inputRef = useRef(null)
  const [resume, setResume] = useState(null)
  const [resumeError, setResumeError] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const navigate = useNavigate()

  const handleFile = (file) => {
    if (!file) return
    const error = validateResume(file)
    if (error) {
      setResume(null)
      setResumeError(error)
      if (inputRef.current) inputRef.current.value = ''
      return
    }
    setResume(file)
    setResumeError('')
  }

  const handleRemove = () => {
    setResume(null)
    setResumeError('')
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!resume) {
      setResumeError('A resume is required.')
      return
    }
    navigate('/')
  }

  const dropzoneClass = [
    'flex flex-col items-center justify-center text-center px-6 py-10 border-2 border-dashed cursor-pointer transition-colors',
    isDragging
      ? 'border-black bg-black/5'
      : resumeError
      ? 'border-red-500/60 bg-red-50/40'
      : 'border-black/30 hover:border-black hover:bg-black/[0.02]',
  ].join(' ')

  return (
    <form className="max-w-3xl mx-auto" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map(({ name, label, type, required, autoComplete, wrapperClassName, placeholder }) => {
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
                placeholder={placeholder}
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

        <div className="md:col-span-2">
          <span className={labelClassName}>
            Resume <span className="text-red-600 normal-case tracking-normal">*</span>
          </span>

          <input
            id={resumeId}
            ref={inputRef}
            type="file"
            accept={ACCEPTED_EXTENSIONS.join(',')}
            className="sr-only"
            name="resume"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />

          {resume ? (
            <div className="flex items-center gap-4 border border-black/20 bg-white px-4 py-3">
              <i className="fa-regular fa-file-lines text-oliveBrown text-xl" aria-hidden="true" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-montserrat truncate" title={resume.name}>
                  {resume.name}
                </p>
                <p className="text-xs text-black/50 font-montserrat mt-0.5">
                  {formatBytes(resume.size)}
                </p>
              </div>
              <label
                htmlFor={resumeId}
                className="text-xs font-raleway uppercase tracking-[0.2em] text-black/60 hover:text-black cursor-pointer focus-within:ring-2 focus-within:ring-black/50 px-2 py-1"
              >
                Replace
              </label>
              <button
                type="button"
                onClick={handleRemove}
                aria-label="Remove resume"
                className="text-black/50 hover:text-black focus:outline-none focus:ring-2 focus:ring-black/50 px-2 py-1"
              >
                <i className="fa-solid fa-xmark text-base" aria-hidden="true" />
              </button>
            </div>
          ) : (
            <label
              htmlFor={resumeId}
              className={dropzoneClass}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault()
                setIsDragging(false)
                handleFile(e.dataTransfer.files?.[0])
              }}
            >
              <i className="fa-solid fa-paperclip text-2xl text-oliveBrown mb-3" aria-hidden="true" />
              <p className="text-sm font-montserrat text-black/80">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-black/50 font-montserrat mt-2 tracking-wide">
                PDF, DOC, or DOCX · 5MB max
              </p>
            </label>
          )}

          {resumeError && (
            <p className="mt-2 text-xs text-red-600 font-montserrat" role="alert">
              {resumeError}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 flex justify-center md:justify-end">
        <ButtonLink type="submit">Submit Application</ButtonLink>
      </div>
    </form>
  )
}

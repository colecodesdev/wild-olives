import { useId, useState } from 'react'
import ButtonLink from '../ui/ButtonLink'

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

const DEFAULT_EVENT_STYLES = [
  'Birthday',
  'Anniversary',
  'Wedding',
  'Rehearsal Dinner',
  'Corporate Event',
  'Holiday Party',
  'Other',
]

export default function PrivateEventsForm({
  className = '',
  onSubmit,
  eventStyleOptions,
}) {
  const styles = eventStyleOptions ?? DEFAULT_EVENT_STYLES
  const idPrefix = useId()
  const fieldId = (name) => `${idPrefix}-${name}`

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventStyle: '',
    guests: '',
    month: '',
    day: '',
    year: '',
    eventType: '',
    notes: '',
  })

  function update(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (onSubmit) onSubmit(form)
  }

  const inputBase =
    'w-full border border-black/30 px-4 py-3 text-sm tracking-widest font-montserrat focus:outline-none focus:ring-0'

  const labelBase =
    'block mb-2 text-left text-xs font-medium uppercase tracking-[0.3em] font-raleway'

  return (
    <form onSubmit={handleSubmit} className={`max-w-3xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={fieldId('firstName')} className={labelBase}>First name</label>
          <input
            id={fieldId('firstName')}
            className={inputBase}
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            autoComplete="given-name"
            required
          />
        </div>

        <div>
          <label htmlFor={fieldId('lastName')} className={labelBase}>Last name</label>
          <input
            id={fieldId('lastName')}
            className={inputBase}
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            autoComplete="family-name"
            required
          />
        </div>

        <div>
          <label htmlFor={fieldId('email')} className={labelBase}>E-mail</label>
          <input
            id={fieldId('email')}
            className={inputBase}
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className={labelBase}>Phone number</label>
          <input
            id={fieldId('phone')}
            className={inputBase}
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            autoComplete="tel"
            required
          />
        </div>

        <div>
          <label htmlFor={fieldId('eventStyle')} className={labelBase}>Event style</label>
          <select
            id={fieldId('eventStyle')}
            className={inputBase}
            value={form.eventStyle}
            onChange={(e) => update('eventStyle', e.target.value)}
            required
          >
            <option value="" />
            {styles.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor={fieldId('guests')} className={labelBase}>Number of guests</label>
          <input
            id={fieldId('guests')}
            className={inputBase}
            inputMode="numeric"
            value={form.guests}
            onChange={(e) => update('guests', e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor={fieldId('month')} className={labelBase}>Month</label>
          <select
            id={fieldId('month')}
            className={inputBase}
            value={form.month}
            onChange={(e) => update('month', e.target.value)}
            required
          >
            <option value="" />
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:col-span-1">
          <div>
            <label htmlFor={fieldId('day')} className={labelBase}>Day</label>
            <input
              id={fieldId('day')}
              className={inputBase}
              inputMode="numeric"
              value={form.day}
              onChange={(e) => update('day', e.target.value)}
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor={fieldId('year')} className={labelBase}>Year</label>
            <input
              id={fieldId('year')}
              className={inputBase}
              inputMode="numeric"
              value={form.year}
              onChange={(e) => update('year', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <label htmlFor={fieldId('eventType')} className={labelBase}>What kind of event? (Birthday, Wedding, etc.)</label>
          <input
            id={fieldId('eventType')}
            className={inputBase}
            value={form.eventType}
            onChange={(e) => update('eventType', e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor={fieldId('notes')} className={labelBase}>
            Should we know something special about you or your guests? Fill us in!
          </label>
          <textarea
            id={fieldId('notes')}
            className={`${inputBase} min-h-[160px] resize-none`}
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
          />
        </div>
      </div>

      <ButtonLink type="submit" className="mt-6">
        Submit Form
      </ButtonLink>
    </form>
  )
}

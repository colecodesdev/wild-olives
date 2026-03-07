import { useMemo, useState } from 'react'
import ButtonLink from '../ui/ButtonLink'

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

export default function PrivateEventsForm({
  className = '',
  onSubmit,
  eventStyleOptions,
}) {
  const styles = useMemo(
    () =>
      eventStyleOptions ?? [
        'Birthday',
        'Anniversary',
        'Wedding',
        'Rehearsal Dinner',
        'Corporate Event',
        'Holiday Party',
        'Other',
      ],
    [eventStyleOptions]
  )

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
    'text-left text-xs font-medium uppercase tracking-[0.3em] font-raleway'

  const buttonStyle =
    'inline-block p-3 px-4 text-white bg-black hover:bg-gray-800 rounded-sm uppercase font-semibold tracking-widest'

  return (
    <form onSubmit={handleSubmit} className={`max-w-3xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className={labelBase}>First name</div>
          <input
            className={inputBase}
            value={form.firstName}
            onChange={(e) => update('firstName', e.target.value)}
            required
          />
        </div>

        <div>
          <div className={labelBase}>Last name</div>
          <input
            className={inputBase}
            value={form.lastName}
            onChange={(e) => update('lastName', e.target.value)}
            required
          />
        </div>

        <div>
          <div className={labelBase}>E-mail</div>
          <input
            className={inputBase}
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            required
          />
        </div>

        <div>
          <div className={labelBase}>Phone number</div>
          <input
            className={inputBase}
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            required
          />
        </div>

        <div>
          <div className={labelBase}>Event style</div>
          <select
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
          <div className={labelBase}>Number of guests</div>
          <input
            className={inputBase}
            inputMode="numeric"
            value={form.guests}
            onChange={(e) => update('guests', e.target.value)}
            required
          />
        </div>

        <div>
          <div className={labelBase}>Month</div>
          <select
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
            <div className={labelBase}>Day</div>
            <input
              className={inputBase}
              inputMode="numeric"
              value={form.day}
              onChange={(e) => update('day', e.target.value)}
              required
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <div className={labelBase}>Year</div>
            <input
              className={inputBase}
              inputMode="numeric"
              value={form.year}
              onChange={(e) => update('year', e.target.value)}
              required
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className={labelBase}>What kind of event? (Birthday, Wedding, etc.)</div>
          <input
            className={inputBase}
            value={form.eventType}
            onChange={(e) => update('eventType', e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-2">
          <div className={labelBase}>
            Should we know something special about you or your guests? Fill us in!
          </div>
          <textarea
            className={`${inputBase} min-h-[160px] resize-none`}
            value={form.notes}
            onChange={(e) => update('notes', e.target.value)}
          />
        </div>
      </div>

      <ButtonLink to="/closed" className='mt-6'>Submit Form</ButtonLink>
    </form>
  )
}
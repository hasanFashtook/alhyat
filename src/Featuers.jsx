import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function Featuers({ className }) {
  const { t } = useTranslation();
  return (
    <section className={'Featuers ' + className} >
      <div className="container">
        <ul className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
          <li className=' bg-secound rounded-2xl p-5 mx-auto'>
            <div className=' aspect-square rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="/src/assets/images/family-travel.jpg"
                alt=""
              />
            </div>
            <dl className=' mt-4'>
              <dt className=' text-2xl font-extrabold text-black'>{t('variousTrips')} </dt>
              <dd className=' text-xl font-semibold'>{t('chooseFlight')}</dd>
            </dl>
          </li>
          <li className=' bg-secound rounded-2xl p-5 mx-auto'>
            <div className=' aspect-square rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="/src/assets/images/family-travel.jpg"
                alt=""
              />
            </div>
            <dl className=' mt-4'>
              <dt className=' text-2xl font-extrabold text-black'>رحلات متنوعة</dt>
              <dd className=' text-xl font-semibold'>يمكنك اختيار مقعد جلوسك في الرحلة...</dd>
            </dl>
          </li>
          <li className=' bg-secound rounded-2xl p-5 mx-auto'>
            <div className=' aspect-square rounded-xl overflow-hidden'>
              <img
                className='w-full h-full object-cover'
                src="/src/assets/images/family-travel.jpg"
                alt=""
              />
            </div>
            <dl className=' mt-4'>
              <dt className=' text-2xl font-extrabold text-black'>رحلات متنوعة</dt>
              <dd className=' text-xl font-semibold'>يمكنك اختيار مقعد جلوسك في الرحلة...</dd>
            </dl>
          </li>
        </ul>
      </div>
    </section>
  )
}

Featuers.propTypes = {
  className: PropTypes.string
}

export default Featuers

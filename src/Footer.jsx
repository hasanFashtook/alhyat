import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function Footer({ className }) {
  const { t } = useTranslation();
  return (
    <div
      id='contact'
      className={'Footer relative overflow-hidden' + className}>
      <div
        className=' absolute -z-20 bottom-0 w-full h-full bg-cover bg-bottom md:bg-center'
        style={{ backgroundImage: 'url("/src/assets/images/photo_2023-12-04_10-43-42.jpg")' }}>
      </div>
      <div className=' w-full h-full absolute top-0 left-0 bg-gradient-to-t 
          from-transparent from-50% to-white -z-10'
      >
      </div>
      <div className="container relative ">
        <h1 className=' font-bold text-2xl text-right my-8'>تواصل معنا</h1>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <ul className=' flex flex-col gap-4'>
            <li className='flex gap-4 items-center text-lg'>
              <img
                className=' w-4 h-4'
                src="/EMAIL.svg" alt="Email" />
              <a href="">alhayat@gmail.com</a>
            </li>
            <li className='flex gap-4 items-center text-lg'>
              <img
                className=' w-4 h-4'
                src="/facebook.svg" alt="Facebook" />
              <a href="">hayat travel agency</a>
            </li>
            <li className='flex gap-4 items-center text-lg'>
              <img
                className=' w-4 h-4'
                src="/website.svg" alt="Alhayat Website" />
              <a href="">www.Alhayat.sy.com</a>
            </li>
          </ul>
          <ul className=' flex flex-col gap-4'>
            <li className='flex gap-4 items-center text-lg'>
              <img
                className=' w-4 h-4'
                src="/EMAIL.svg" alt="Email" />
              <a href="">alhayat@gmail.com</a>
            </li>
            <li className='flex gap-4 items-center text-lg'>
              <img
                className=' w-4 h-4'
                src="/facebook.svg" alt="Facebook" />
              <a href="">hayat travel agency</a>
            </li>
            <li className='flex gap-4 items-center text-lg'>
              <a href="">{t('privacyPolicy')}</a>
            </li>
          </ul>
        </div>
        <p className=' py-4 font-bold text-center'>Powered & Designed By Levant Company</p>
      </div>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer

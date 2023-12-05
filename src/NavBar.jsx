import i18next from 'i18next';
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function NavBar({ className }) {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
    document.body.dir = i18next.dir();
  }

  return (
    <nav className={'NavBar ' + className} >
      <div className="container text-base text-black h-16 md:h-20 flex justify-between items-center">
        <ul className=' flex gap-4'>
          <li><a href="#contact">{t('contact')}</a></li>
          <li><a href="#about">{t('about')}</a></li>
          <li>
            <select
              className="custom-select bg-transparent pb-1 outline-none h-[29px] text-white"
              onChange={changeLanguageHandler}
              defaultChecked={"ar"}>
              <option className=' text-black bg-secound hover:!bg-main' value="ar" >{t('arabic')}</option>
              <option className=' text-black bg-secound hover:!bg-main' value="en" >{t('english')}</option>
            </select>
          </li>
        </ul>
        <div className="logo w-12">
          <img
            className=' w-full h-full object-cover'
            src="/public/logoo.svg"
            alt="" />
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  className: PropTypes.string
}

export default NavBar

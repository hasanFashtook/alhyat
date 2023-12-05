import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

function CallToAction({ className }) {
  const { t } = useTranslation()
  return (
    <div className={'CallToAction ' + className} >
      <div className="container flex flex-col md:flex-row gap-4 md:justify-between items-center">
        <div className="content max-w-sm flex-1">
          <dl>
            <dt className=' text-main text-3xl mb-4 font-bold capitalize'>
              {t('downloadApp')}
            </dt>
            <dd className=' text-xl'>
              {t('callToAction1')}
              <br />
              {t('callToAction2')}
              <br />
              {t('callToAction3')}
            </dd>
          </dl>
          <div className="sourceApp flex gap-4 mt-4">
            <a className="appStore cursor-pointer hover:scale-110 transition block h-12 flex-1">
              <img src="app store.svg" className=' h-full' alt="" />
            </a>
            <a className="appStore cursor-pointer hover:scale-110 transition block h-12 flex-1">
              <img src="app store.svg" className=' h-full' alt="" />
            </a>
          </div>
        </div>
        <div className="image max-w-sm flex-1 relative">
          <div
            className="background absolute top-0 left-1/2 -translate-x-1/2 
            -z-10 bg-secound w-4/6 h-5/6 rounded-3xl">
          </div>
          <img
            className=' max-w-xs'
            src="/src/assets/images/Asset 42.png"
            alt="" />
        </div>
      </div>
    </div>
  )
}

CallToAction.propTypes = {
  className: PropTypes.string
}

export default CallToAction

import { Fragment, FunctionComponent } from 'react'
import { Spanish, BrazilFlag, UsaFlag } from '../assets'

const LanguageSelector: FunctionComponent<{ handleLanguage: any }> = ({
  handleLanguage,
}) => {
  return (
    <Fragment>
      <Spanish
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleLanguage('ES')}
      />
      <BrazilFlag
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleLanguage('PT')}
      />
      <UsaFlag
        style={{ width: '100px', height: '100px' }}
        onClick={() => handleLanguage('EN')}
      />
    </Fragment>
  )
}

export default LanguageSelector

import { FunctionComponent } from 'react'
import { Spanish, BrazilFlag, UsaFlag } from '../assets'
import { ButtonsWrappers } from './LanguageSelector.style'

const LanguageSelector: FunctionComponent<{ handleLanguage: any }> = ({
  handleLanguage,
}) => {
  return (
    <ButtonsWrappers>
      <Spanish
        style={{
          width: '30px',
          height: '30px',
          borderRadius: ' 50%',
        }}
        onClick={() => handleLanguage('ES')}
      />
      <BrazilFlag
        style={{
          width: '30px',
          height: '30px',
          borderRadius: ' 50%',
        }}
        onClick={() => handleLanguage('PT')}
      />
      <UsaFlag
        style={{
          width: '30px',
          height: '30px',
          borderRadius: ' 50%',
        }}
        onClick={() => handleLanguage('EN')}
      />
    </ButtonsWrappers>
  )
}

export default LanguageSelector

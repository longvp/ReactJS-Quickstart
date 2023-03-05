import { useTranslation } from 'react-i18next';

import { Container } from 'components/containers';
import { Title } from 'components/typography';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Container className="Home">
      <div onChange={changeLanguage}>
        <input type="radio" value="en" name="language" defaultChecked /> English
        <input type="radio" value="vn" name="language" /> Viet Nam
      </div>
      <Title>{t('Home.title')}</Title>
      <div>{t('Home.description')}</div>
    </Container>
  );
};

export default Home;
